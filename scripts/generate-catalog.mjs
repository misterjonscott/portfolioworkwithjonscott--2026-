import { Project } from "ts-morph";
import fg from "fast-glob";
import * as fs from "node:fs/promises";
import * as path from "node:path";

async function generateCatalog() {
  console.log("🔍 Scanning component tree for UI contracts...");

  // Match both UI primitives and major section components
  const files = await fg(["components/**/*.{tsx,jsx}", "sections/**/*.{tsx,jsx}"], {
    cwd: process.cwd(),
    absolute: true,
    ignore: ["**/node_modules/**", "**/.next/**", "**/*.test.*"]
  });

  const project = new Project();
  const catalog = [];

  for (const filePath of files) {
    const sourceFile = project.addSourceFileAtPath(filePath);
    const componentName = path.basename(filePath, path.extname(filePath));
    const props = [];

    // 1. Check declared interfaces
    for (const iface of sourceFile.getInterfaces()) {
      for (const prop of iface.getProperties()) {
        props.push({
          name: prop.getName(),
          type: prop.getType().getText(),
          required: !prop.hasQuestionToken(),
          description: prop.getJsDocs().map(d => d.getDescription().trim()).join(" ") || null
        });
      }
    }

    // 2. Check type aliases (e.g., type Props = { ... })
    for (const alias of sourceFile.getTypeAliases()) {
      const type = alias.getType();
      for (const prop of type.getProperties()) {
        props.push({
          name: prop.getName(),
          type: prop.getValueDeclaration()?.getType().getText() || "unknown",
          required: !prop.isOptional(),
          description: null
        });
      }
    }

    catalog.push({
      component: componentName,
      relativePath: path.relative(process.cwd(), filePath),
      propsCount: props.length,
      props
    });
  }

  const outputPath = path.resolve(process.cwd(), "docs/component-catalog.json");
  await fs.writeFile(outputPath, JSON.stringify(catalog, null, 2), "utf-8");

  console.log(`✅ Success: Parsed ${catalog.length} components. Generated ${outputPath}`);
}

generateCatalog().catch((err) => {
  console.error("❌ Catalog generation failed:", err);
  process.exit(1);
});