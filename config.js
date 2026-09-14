/** @type {import('style-dictionary').Config} */
export default {
  // 1. Where to look for raw Figma token data
  source: ['tokens/tokens.json'],

  // 2. Define custom hooks for Style Dictionary v4
  hooks: {
    transforms: {
      // Custom transform to ensure spacing tokens preserve/append 'px' units safely
      'spacing/px': {
        type: 'value',
        filter: (token) => token.type === 'spacing' || token.path.includes('spacing'),
        transform: (token) => {
          const val = String(token.value);
          return val.endsWith('px') ? val : `${val}px`;
        }
      }
    }
  },

  platforms: {
    // Platform 1: Standard CSS variables asset pipeline
    css: {
      // We combine native web transforms with our custom spacing/px utility
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hex', 'spacing/px'],
      buildPath: 'app/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables'
      }]
    },
    // Keep the temporary tailwind block for Phase 1 stability
    tailwind: {
      transformGroup: 'js',
      buildPath: 'app/',
      files: [{
        destination: 'tokens.json',
        format: 'json/nested'
      }]
    }
  }
};
