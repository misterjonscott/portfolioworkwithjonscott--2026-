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

const CaseStudyGeofeedia: React.FC = () => {
  const [refDataManager, dataManagerIsInView] = useInViewAnimation();
  const [refAccountManager, accountManagerIsInView] = useInViewAnimation();
  const [refAccountImpersonation, accountImpersonationIsInView] =
    useInViewAnimation();
  const [refUsersAndRoles, usersAndRolesIsInView] = useInViewAnimation();
  const [refSharing, sharingIsInView] = useInViewAnimation();

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
              src="/images/casestudies/CaseStudyGeofeediaActive.webp"
              alt="Geofeedia Case Study"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        {/* Introduction Section */}
        <section>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Introduction</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Geofeedia was a platform that monitored social media based on
              location. It let users access and analyze posts, images, and videos
              from specific areas in real time. Organizations like law
              enforcement, government agencies, and businesses used it for event
              monitoring, emergency response, market research, and brand
              management.
            </p>
            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl aspect-video">
                <Image
                  src="/images/casestudies/geofeedia/geofeediaMain.webp"
                  alt="Geofeedia overview"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview Section */}
        <section>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              We aim to create an intuitive UI that manages complex data and scales for more users and data. The focus is on minimalist design principles, featuring clear hierarchy, spacious layouts, and concise labels to reduce clutter. Intuitive navigation, including well-organized menus and context-sensitive actions, improves user experience. Continuous refinement based on user feedback ensures the UI remains user-centered and adaptable to evolving needs.
            </p>
          </div>
        </section>

        {/* Data Manager Section */}
        <section>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Data Manager</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This interface was designed to manage users&apos; saved locations,
                  event recordings, and other collections of data.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The design shows all key datapoints, hiding an actions menu
                  behind a kebab for visual simplicity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We wanted to provide the end user with as much information and
                  action as possible, without cluttering the screen.
                </p>
              </div>
              <motion.div
                ref={refDataManager}
                initial={{ opacity: 0 }}
                animate={dataManagerIsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="relative aspect-square"
              >
                <Image
                  src="/images/casestudies/geofeedia/dataManager.webp"
                  alt="Data Manager"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Account Manager Section */}
        <section>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              ref={refAccountManager}
              initial={{ opacity: 0 }}
              animate={accountManagerIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:order-first"
            >
              <Image
                src="/images/casestudies/geofeedia/accountManager.webp"
                alt="Account Manager"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Account Manager
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Disabled accounts are hidden in a dedicated tab, and a large
                sortable scrolling table details a matrix of account details.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Geofeedia customers were often resellers, and would need a way
                to manage the various clients they were supporting.
              </p>
            </div>
          </div>
        </section>

        {/* Account Impersonation Section */}
        <section>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Account Impersonation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To better support our users, we created the capability to
                impersonate user accounts. This meant we could debug issues and
                see exactly what the user was seeing in order to guide them to
                the appropriate solution.
              </p>
            </div>
            <motion.div
              ref={refAccountImpersonation}
              initial={{ opacity: 0 }}
              animate={accountImpersonationIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <Image
                src="/images/casestudies/geofeedia/accountImpersonation.webp"
                alt="Account Impersonation"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </div>
        </section>

        {/* Users and Roles Section */}
        <section>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Users and Roles</h2>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              These modals were designed to Edit/Create users, and roles. The
              modal title changes based on the action the user is executing.
              Fields use auto-completion and a selectable drop-down listing, and
              can support multiple entries if appropriate.
            </p>
          </div>
          <div ref={refUsersAndRoles} className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={usersAndRolesIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <Image
                src="/images/casestudies/geofeedia/userEdit.webp"
                alt="User Editing"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={usersAndRolesIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <Image
                src="/images/casestudies/geofeedia/roleEdit.webp"
                alt="Role Editing"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </div>
        </section>

        {/* Sharing Section */}
        <section>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Sharing your View
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Because Geofeedia&apos;s tool was intended to watch over geographic
              areas, we made it possible to share locations which were defined
              by shapes drawn on the map. The user could bulk add invitations by
              permission level, and easily manage existing access to shared
              locations. As you may notice, the location is also editable, so
              another user could fine-tune the location without need to update
              the associated group.
            </p>
          </div>
          <motion.div
            ref={refSharing}
            initial={{ opacity: 0 }}
            animate={sharingIsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-4xl aspect-video">
              <Image
                src="/images/casestudies/geofeedia/shareLocation.webp"
                alt="Location Sharing"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>
        </section>

        {/* Conclusion Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold">Conclusion</h2>
          <p className="text-muted-foreground leading-relaxed">
            The successful development of Account and Data management, along
            with Account impersonation functionalities, underscored Geofeedia&apos;s
            commitment to providing comprehensive and user-friendly solutions
            for location-based social media monitoring. By prioritizing
            simplicity, accessibility, and security in the design of its
            interfaces, Geofeedia ensured that users could seamlessly navigate
            complex data structures while efficiently managing user accounts and
            permissions.
          </p>
        </section>
      </main>
    </div>
  );
};

export default CaseStudyGeofeedia;
