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

const CaseStudySharpen: React.FC = () => {
  const [refRequirementsGathering, requirementsGatheringIsInView] = useInViewAnimation();
  const [refDefiningTheFlow, definingTheFlowIsInView] = useInViewAnimation();
  const [refReportingMadeSimple, reportingMadeSimpleIsInView] = useInViewAnimation();
  const [refWaveformAnalytics, waveformAnalyticsIsInView] = useInViewAnimation();

  return (
    <div className="bg-background text-foreground">
      {/* Header Section */}
      <header className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-1 px-6 rounded-lg">
        <div className="mx-auto flex items-center justify-between">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight font-title">
              VoIP Analytics
            </h1>
          </div>
          <div className="relative w-[200px] aspect-square">
            <Image
              src="/images/casestudies/CaseStudySharpenActive.webp"
              alt="sharpen Case Study"
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
            Sharpen&apos;s CCaaS software cuts through the noise with user-centric design and innovative features.  Enhanced communication channels and productivity tools streamline operations, elevate customer interactions, and boost agent performance – all driven by prioritizing user feedback. This sets a new standard for contact center excellence.</p>
        </section>

        {/* Requirements Gathering Section */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Requirements Gathering</h2>
              <p className="text-muted-foreground leading-relaxed">Before we can determine the Minimum Viable Product (MVP) we have to understand our requirements.  In this case we&apos;re able to start with the limitations of our current system, what we can report on based on what information is stored in the database.  With that in mind, we group those concepts and break them down into a process.</p>
              <p className="text-muted-foreground leading-relaxed">When building a report, we can be sure that you&apos;ll want to report on a specific group of users, for a specific period of time, and that you&apos;ll want some (or all) of the details we&apos;ve collected in the database.  We can also be sure that nobody wants to be confused or do more work than necessary.</p>
              <p className="text-muted-foreground leading-relaxed">This is a depiction of the database fields that we&apos;re able to use, when the target group has been selected.  To choose the group we&apos;re reporting on, we can divide the groups by purpose, to make the selection more direct.</p>
            </div>
            <motion.div
              ref={refRequirementsGathering}
              initial={{ opacity: 0 }}
              animate={requirementsGatheringIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <Image
                src="/images/casestudies/sharpen/requirementsgathering.webp"
                alt="Requirementes Gathering"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </div>
        </section>

        {/* Defining the Flow Section */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Defining the Flow</h2>
              <p className="text-muted-foreground leading-relaxed">Aiming for simplicity, we place the start of our flow in the top center of the screen. When visiting the Report Builder, report creation will automatically be the default state.</p>
                  <div>
                      <div><span>1</span>Select the group to report on</div>
                      <div><span>2</span>Select the members you want included</div>
                      <div><span>3</span>Select a single date range of data</div>
                      <div><span>4</span>Select the report details (functions)</div>
                      <div><span>5</span>Preview your report, and save</div>
                  </div>
            </div>
            <motion.div
              ref={refDefiningTheFlow}
              initial={{ opacity: 0 }}
              animate={definingTheFlowIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-video"
            >
              <Image
                src="/images/casestudies/sharpen/DefiningTheFlow.webp"
                alt="Defining the Flow"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </div>
        </section>

        {/* Reporting Made Simple Section */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Reporting Made Simple</h2>
              <p className="text-muted-foreground leading-relaxed">With only 5 clicks, a new report can be generated and exported in a variety of formats, previewed on the screen, or used as a basis for a new report, reducing the clicks even further for commonly created reports.</p>
              <p className="text-muted-foreground leading-relaxed">While the Report Builder displays recently created reports on the left side of the screen, the report viewer follows suit with the same placement, but adding sort functionality to help find the report you need.</p>
            </div>
            <motion.div
              ref={refReportingMadeSimple}
              initial={{ opacity: 0 }}
              animate={reportingMadeSimpleIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-video"
            >
              <Image
                src="/images/casestudies/sharpen/ReportingMadeSimple.webp"
                alt="Reporting Made Simple"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </div>
        </section>

        {/* Diving Deeper into Analytics Section */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Diving Deeper into Analytics</h2>
              <p className="text-muted-foreground leading-relaxed">Ensuring quality communications doesn&apos;t stop with call length and other numeric data.  We want to be able to review those calls, and understand what happened.</p>
              <p className="text-muted-foreground leading-relaxed">Because there may be long pauses for various reasons, or increased volume indicating heated interaction, I built in a waveform visualizer.  The user can easily see where the line was silent, or where shouting begins.  This makes the review process remarkably faster and therefore more reviews can occur ensuring quality overall.</p>
            </div>
            <motion.div
              ref={refWaveformAnalytics}
              initial={{ opacity: 0 }}
              animate={waveformAnalyticsIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-video"
            >
        <Image
          src="/images/casestudies/sharpen/WaveformAnalytics.webp"
          alt="Waveform Analytics"
          fill
          style={{ objectFit: "contain" }}
        />
      </motion.div>
    </div>
  </section>

        {/* Conclusion Section */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Conclusion</h2>
          <p className="text-muted-foreground leading-relaxed">Call Centers using Sharpen&apos;s CCaaS are able to refine their call quality, easily spotting issues like excessive hold times, heated interactions, and long stretches of wasted time, all of which matters to a quality call center.</p>
          <p className="text-muted-foreground leading-relaxed">Furthermore our reporting model allows anyone with access the ability to quickly and easily generate reports which can be exported in a variety of formats and shared with stakeholders or added to larger reports for a fuller picture.</p>
        </section>
      </main>
    </div>
  );
};

export default CaseStudySharpen;