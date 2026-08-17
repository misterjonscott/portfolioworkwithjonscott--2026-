"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Custom hook for intersection observer
const useInViewAnimation = (threshold = 0.2) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);
  return [ref, isInView] as const;
};

const CaseStudyLids: React.FC = () => {
  const [refCheckoutProcess01, checkoutProcess01IsInView] =
    useInViewAnimation();
  const [refCheckoutProcess02, checkoutProcess02IsInView] =
    useInViewAnimation();
  const [refCheckoutProcess03, checkoutProcess03IsInView] =
    useInViewAnimation();
  const [refCheckoutProcess04, checkoutProcess04IsInView] =
    useInViewAnimation();
  const [refCheckoutProcess05, checkoutProcess05IsInView] =
    useInViewAnimation();
  const [refShoppingCart, shoppingCartIsInView] = useInViewAnimation();
  const [refBuildingBlocks, buildingBlocksIsInView] = useInViewAnimation();
  const [refFanShops, fanShopsIsInView] = useInViewAnimation();

  return (
    <div className="bg-background text-foreground">
      {/* Header Section */}
      <header className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-1 px-6 rounded-lg">
        <div className="mx-auto flex items-center justify-between">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight font-title">
              Smart Shopping
            </h1>
          </div>
          <div className="relative w-[200px] aspect-square">
            <Image
              src="/images/casestudies/CaseStudyLidsActive.webp"
              alt="Lids Case Study"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Introduction Section */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            Lids, a leading retailer for hats and headwear, caters to a diverse
            audience passionate about expressing themselves through style. In
            2009, we embarked on a project to enhance the online shopping
            experience for Lids customers. This case study dives into the design
            process and solutions implemented to streamline the checkout
            process, improve the shopping cart functionality, and create
            engaging homepages across various teams and organizations within
            Lids.
          </p>
        </section>

        {/* Faster to Finish: Optimizing the Checkout Process Section */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Faster to Finish: Optimizing the Checkout Process
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Who needs checkout marathons? I revamped Lids&apos; checkout into a
            single, smooth journey. Users see a sneak peek of the next step,
            keeping them moving forward. Real-time validation catches errors on
            the fly, and completion cards on the side let users easily review
            and edit any section. Boom! Less frustration, clear sailing, and
            happy Lids customers!
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <motion.div
                ref={refCheckoutProcess01}
                initial={{ opacity: 0 }}
                animate={checkoutProcess01IsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="relative aspect-square"
              >
                <Image
                  src="/images/casestudies/lids/checkoutProcess01.webp"
                  alt="Component notation"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </motion.div>
              <p className="text-muted-foreground leading-relaxed">
                While the user completes Billing Information, the tab for
                Shipping Information is revealed. This shows the user what to
                expect, and the accordion styling makes the whole checkout
                process appear on one page.
              </p>
            </div>
            <div>
              <motion.div
                ref={refCheckoutProcess02}
                initial={{ opacity: 0 }}
                animate={checkoutProcess02IsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="relative aspect-square"
              >
                <Image
                  src="/images/casestudies/lids/checkoutProcess02.webp"
                  alt="Component notation"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </motion.div>
              <p className="text-muted-foreground leading-relaxed">
                As this system handled form validation through PHP, we&apos;d
                check each form when the user selected the first element of the
                next section.
              </p>
            </div>
            <div>
              <motion.div
                ref={refCheckoutProcess03}
                initial={{ opacity: 0 }}
                animate={checkoutProcess03IsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="relative aspect-square"
              >
                <Image
                  src="/images/casestudies/lids/checkoutProcess03.webp"
                  alt="Component notation"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </motion.div>
              <p className="text-muted-foreground leading-relaxed">
                Upon correcting errors, users can simply click the first field
                in the next section to seamlessly progress.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <motion.div
                ref={refCheckoutProcess04}
                initial={{ opacity: 0 }}
                animate={checkoutProcess04IsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="relative aspect-square"
              >
                <Image
                  src="/images/casestudies/lids/checkoutProcess04.webp"
                  alt="Component notation"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </motion.div>
              <p className="text-muted-foreground leading-relaxed">
                After the user has completed all fields required for the
                checkout process, we show a final review before allowing
                submission.
              </p>
            </div>
            <div>
              <motion.div
                ref={refCheckoutProcess05}
                initial={{ opacity: 0 }}
                animate={checkoutProcess05IsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="relative aspect-square"
              >
                <Image
                  src="/images/casestudies/lids/checkoutProcess05.webp"
                  alt="Component notation"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </motion.div>
              <p className="text-muted-foreground leading-relaxed">
                If the user needs to go back and edit a filled section, they may
                select the “edit” control on any section to open it and make
                changes.
              </p>
            </div>
          </div>
        </section>

        {/* Boosting Conversions: A Shopping Cart Designed to Sell Section */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              ref={refShoppingCart}
              initial={{ opacity: 0 }}
              animate={shoppingCartIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <Image
                src="/images/casestudies/lids/shoppingCart.webp"
                alt="Shopping Cart Redesign"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Boosting Conversions: A Shopping Cart Designed to Sell
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We turned Lids&apos; shopping cart into a conversion champion! Dual
                columns streamline the experience while subtly nudging
                purchases. Clear product details and easy edits are on the
                right, with timely nudges to reach free shipping. Convenient
                buttons for &quot;Continue Shopping&quot; and &quot;Checkout&quot; are always at
                hand. Transparency reigns with detailed breakdowns of each
                charge. Plus, a peek at hot picks tempts them to add more!
                Trustworthy checkout icons round out the experience. This cart
                empowers decisions and drives those sweet conversions!
              </p>
            </div>
          </div>
        </section>

        {/* Building Blocks: A Flexible System for Team Fan Shops */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center content-start">
            <motion.div
              ref={refBuildingBlocks}
              initial={{ opacity: 0 }}
              animate={buildingBlocksIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4]"
            >
              <Image
                src="/images/casestudies/lids/buildingBlocks.webp"
                alt="Building Blocks"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Building Blocks: A Flexible System for Team Fan Shops
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To streamline development and maintain brand consistency across
                all Lids team fan shops, we established a modular design system.
                This system utilizes a core set of reusable components that can
                be customized to reflect the unique visual identity of each
                team. Each component offers two width options, allowing for
                strategic use of &quot;pop-out&quot; elements to create visual hierarchy
                and draw user attention.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The system follows a clear structure, consisting of:
              </p>

              <ul className="list-disc list-outside space-y-2">
                <li>
                  <strong>Page Header:</strong> Houses essential elements like
                  logos and search functionality.
                </li>
                <li>
                  <strong>Navigation:</strong> Provides intuitive access to key
                  team and product categories.
                </li>
                <li>
                  <strong>Shipping Promotion (Optional):</strong> Highlights
                  current shipping offers.
                </li>
                <li>
                  <strong>Hero Banner:</strong> A prominent visual showcase for
                  featured products or promotions.
                </li>
                <li>
                  <strong>SEO Text:</strong> Search engine optimized content to
                  improve discoverability.
                </li>
                <li>
                  <strong>Optional Search Tools:</strong> Advanced filtering
                  options for a refined browsing experience.
                </li>
                <li>
                  <strong>Email Lead Generation:</strong> Encourages signups for
                  promotions and exclusive offers.
                </li>
                <li>
                  <strong>Secondary Banners:</strong> Additional promotional
                  space for targeted campaigns.
                </li>
                <li>
                  <strong>Footer:</strong> Provides essential information and
                  links.
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                While all team fan shops adhere to this core structure, each
                section can be adjusted in height as needed to accommodate
                specific content requirements. This flexibility empowers
                individual teams to tailor their online presence while
                maintaining a consistent user experience across the Lids
                brand.{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <motion.div
              ref={refFanShops}
              initial={{ opacity: 0 }}
              animate={fanShopsIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-4xl aspect-square"
            >
              <Image
                src="/images/casestudies/lids/fanShops.webp"
                alt="Lids Fan Shops"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Conclusion</h2>
          <p className="text-muted-foreground leading-relaxed">
            This Lids case study demonstrates the power of user-centered design,
            efficient design systems, and data-driven decision making. Through
            these strategies, we were able to significantly enhance the online
            shopping experience for Lids customers, streamlining the checkout
            process, creating engaging homepages, and ultimately contributing to
            a more successful online business presence for the Lids brand and
            its various teams.
          </p>
        </section>
      </main>
    </div>
  );
};

export default CaseStudyLids;
