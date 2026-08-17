"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Custom hook for intersection observer
const useInViewAnimation = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
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

const CaseStudyIndigo: React.FC = () => {
  const [refDashboardBeforeAfter, dashboardBeforeAfterIsInView] =
    useInViewAnimation();
  const [refReducedClutter, reducedClutterIsInView] = useInViewAnimation();
  const [refFilteringMenu, filteringMenuIsInView] = useInViewAnimation();
  const [refLotsAndLevels, lotsAndLevelsIsInView] = useInViewAnimation();
  const [refUserManagement, userManagementIsInView] = useInViewAnimation();
  const [refBranding, brandingIsInView] = useInViewAnimation();
  const [refDashboardConclusion, dashboardConclusionIsInView] =
    useInViewAnimation();

  return (
    <div className="bg-background text-foreground">
      {/* Header Section */}
      <header className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-1 px-6 rounded-lg">
        <div className="mx-auto flex items-center justify-between">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight font-title">
              Data Management
            </h1>
          </div>
          <div className="relative w-[200px] aspect-square">
            <Image
              src="/images/casestudies/CaseStudyIndigoActive.webp"
              alt="Indigo Case Study"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-4">
        {/* Introduction Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold">Introduction</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Indigo&apos;s primary product reads the output from Mass
            Spectrometry machines, and delivers human-readable results without
            the training required to read and analyze the test results without
            years of medical training. Unfortunately, while the software&apos;s
            capability was amazing, accurate and much faster than human review,
            it was also difficult to use and properly configure.
          </p>
          <motion.div
            ref={refDashboardBeforeAfter}
            initial={{ opacity: 0 }}
            animate={dashboardBeforeAfterIsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-4xl aspect-video">
              <Image
                src="/images/casestudies/indigo/dashboardBeforeAndAfter.webp"
                alt="Indigo overview"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>
        </section>

        {/* Project Overview Section */}
        <section>
          <div className="space-y-4">  
            <h2 className="text-3xl md:text-4xl font-bold">
              Reduce Clutter, Direct Attention
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Any batches that are already cancelled or certified no longer need
              attention, and are very rarely viewed, so we don&apos;t need to
              sacrifice valuable screen space to display them. In this iteration,
              I used a tabbed approach to show only active batches, but the user
              can easily view the completed batches with a single click.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This declutters the display, calling more attention to where
              it&apos;s needed, while making the matrix feel more approachable.
            </p>
          </div>
        </section>

        {/* Reusable Filtering Section */}
        <section>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Data Manager</h2>
              <p className="text-muted-foreground leading-relaxed">
                The existing filter column displayed all possible filters and
                all possible values, occupying more screen space than necessary,
                and introducing unnecessary visual clutter.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I replaced lists of checkbox-selected elements with a single
                input where the user clicks to display a scrolling dropdown of
                all available options, and can select one or more. Just as
                simple as unchecking a checkbox, the user can click the X icon
                to remove a filter parameter.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                By user request, we added the ability to save filtering states,
                so a complex system of filters can be loaded instantly.{" "}
              </p>
            </div>
            <motion.div
              ref={refReducedClutter}
              initial={{ opacity: 0 }}
              animate={reducedClutterIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <Image
                src="/images/casestudies/indigo/reducedClutter.webp"
                alt="Reducing Clutter"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </div>
        </section>

        {/* Dashboard Conclusion Section */}
        <section>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Reusable Filtering
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The existing filter column displayed all possible filters and
                all possible values, occupying more screen space than necessary,
                and introducing unnecessary visual clutter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I replaced lists of checkbox-selected elements with a single
                input where the user clicks to display a scrolling dropdown of
                all available options, and can select one or more. Just as
                simple as unchecking a checkbox, the user can click the X icon
                to remove a filter parameter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By user request, we added the ability to save filtering states,
                so a complex system of filters can be loaded instantly.{" "}
              </p>
            </div>
            <motion.div
              ref={refFilteringMenu}
              initial={{ opacity: 0 }}
              animate={filteringMenuIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <Image
                src="/images/casestudies/indigo/filterMenu.webp"
                alt="Filtering Menu"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </div>
        </section>

        {/* Dashboard Conclusion */}
        <section>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Dashboard Conclusion
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Overall the dashboard appears much more professional and polished,
              making it easier to get work done. Filtering is simplified,
              unnecessary results are hidden, and color coding is used to
              highlight the batches that require immediate attention. This
              redesigned dashboard contains all of the same information, but in a
              much more approachable and finished format that users absolutely
              loved.
            </p>
            <motion.div
              ref={refDashboardConclusion}
              initial={{ opacity: 0 }}
              animate={dashboardConclusionIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-4xl aspect-video">
                <Image
                  src="/images/casestudies/indigo/dashboardConclusion.webp"
                  alt="Dashboard before and after"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Controlling the Flow */}
        <section>
          <div className="space-y-4">

            <h2 className="text-3xl md:text-4xl font-bold">
              Controlling the Flow
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Configuration of this software is largely done on the Lots & Levels
              configuration screen, but the existing flow was confusing and led
              users to call for help more often than not. Simply redesigning the
              flow made the process obvious and clear.
            </p>
            <motion.div
              ref={refLotsAndLevels}
              initial={{ opacity: 0 }}
              animate={lotsAndLevelsIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-4xl aspect-video">
                <Image
                  src="/images/casestudies/indigo/lotsAndLevels.webp"
                  alt="Lots and Levels Configuration"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Combining to Simplify */}
        <section>
          <div className="space-y-4">

            <h2 className="text-3xl md:text-4xl font-bold">
              Combining to Simplify
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Configuration of users occured on 3 separate screens, with one
              allowing new users to be added, the next allowing management of user
              accounts, and yet another screen just to manage complex user
              permissions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I combined all of these activities into a single interface saving
              time for our users, but also simplifying debugging and development
              processes for our developers.
            </p>
            <motion.div
              ref={refUserManagement}
              initial={{ opacity: 0 }}
              animate={userManagementIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-4xl aspect-video">
                <Image
                  src="/images/casestudies/indigo/userManagement.webp"
                  alt="User Configuration"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Branding */}
        <section>
          <div className="space-y-4">

            <h2 className="text-3xl md:text-4xl font-bold">Branding</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whle redesigning the look of our interfaces, I foudn the opportunity to rebrand the company, 
              and it was so successful that I was asked to create new brand assets from the ground-up, which
              would be used at shows and conventions.  This is a sample of the materials that I provided.
            </p>
            <motion.div
              ref={refBranding}
              initial={{ opacity: 0 }}
              animate={brandingIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-4xl aspect-video">
                <Image
                  src="/images/casestudies/indigo/indigoBranding.webp"
                  alt="Indigo Branding"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Conclusion</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Decoding the results of a complex medical testing process is no easy
              task, even when you&apos;ve created software that can decode those
              results very quickly. My changes resulted in a much easier, and more
              approachable, system that no longer required the valuable time of
              trained medical staff for initial review, allowing doctors to focus
              on other tasks, only addressing the most confusing of results.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CaseStudyIndigo;
