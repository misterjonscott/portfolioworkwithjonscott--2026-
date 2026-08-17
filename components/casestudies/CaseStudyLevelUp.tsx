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

const CaseStudyLevelUp: React.FC = () => {
  const [refUserFlowDiagram, userFlowDiagramIsInView] = useInViewAnimation();
  const [refComponentNotation, componentNotationIsInView] = useInViewAnimation();
  const [refDeterminingMonthlyIncome, determiningMonthlyIncomeIsInView] =
    useInViewAnimation();
  const [refExploreBudgetTrackingOptions, exploreBudgetTrackingOptionsIsInView] =
    useInViewAnimation();
  const [refClassifyingNeedsVsWants, classifyingNeedsVsWantsIsInView] =
    useInViewAnimation();
  const [refListingYourGoals, listingYourGoalsIsInView] = useInViewAnimation();

  return (
    <div className="bg-background text-foreground">
      {/* Header Section */}
      <header className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-1 px-6 rounded-lg">
        <div className="mx-auto flex items-center justify-between">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight font-title">
              Mobile App Development
            </h1>
          </div>
          <div className="relative w-[200px] aspect-square">
            <Image
              src="/images/casestudies/CaseStudyLevelUpActive.webp"
              alt="LevelUp Case Study"
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
            Our mobile app simplifies financial education through intuitive swipe gestures and interactive modules. Users build sound money management skills in budgeting, saving, and investing, guided by personalized recommendations. Extensive user research ensures an engaging and effective learning experience.
          </p>
        </section>

        {/* Wireframing and Journey Mapping Section */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Wireframing and Journey Mapping</h2>
              <p className="text-muted-foreground leading-relaxed">
                Journey maps and prototypes are our secret weapons for crafting a powerful financial education app. We map user journeys, from initial steps to financial mastery, to understand their needs and emotions. Prototypes bring our ideas to life, letting users interact and provide feedback. This rapid cycle of testing and refinement ensures a smooth, intuitive app that empowers users to achieve financial well-being. </p>
          <div className="flex justify-center">
            <motion.div
              ref={refUserFlowDiagram}
              initial={{ opacity: 0 }}
              animate={userFlowDiagramIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-4xl aspect-video"
            >
              <Image
                src="/images/casestudies/levelup/UserFlowDiagram.webp"
                alt="User flow diagram"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </div>
        </section>

        {/* Anatomy of a Course Section */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              ref={refComponentNotation}
              initial={{ opacity: 0 }}
              animate={componentNotationIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <Image
                src="/images/casestudies/levelup/componentNotation.webp"
                alt="Component notation"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Anatomy of a Course</h2>
              <p className="text-muted-foreground leading-relaxed">Each callout type (quiz, Did you know?, recap, and task/activity) has a unique icon and color-coded border for easy recognition. We designed them to be minimal and helpful, guiding your learning without being overwhelming.</p>
              <p className="text-muted-foreground leading-relaxed">Throughout the lesson, you&apos;ll also see a variety of visuals to keep things engaging. Images and videos will stretch across your entire screen for maximum impact, while illustrations will be centered for a clean, focused look.</p>
              <p className="text-muted-foreground leading-relaxed">This guide provides the development team with key details for styling these elements. Look for the orange arrows highlighting these details for a quicker build process.</p>
            </div>
          </div>
        </section>

        {/* User Journeys: Exploring Different Financial Goals Section */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">User Journeys: Exploring Different Financial Goals.</h2>
          <p className="text-muted-foreground leading-relaxed">Our app takes you on personalized journeys that unlock financial knowledge step-by-step.  Here&apos;s a glimpse into four key journeys:</p>
          <p className="text-muted-foreground leading-relaxed"><strong>Determining Your Monthly Income:</strong>  Start with a clear picture! This journey kicks off with a Course Overview explaining the importance of income awareness.  Interactive features like income calculators and illustrated examples guide you through identifying all your income sources.  Wrap up with a personalized breakdown of your monthly inflow, ready for budgeting.</p>
          <div className="flex justify-center">
            <motion.div
              ref={refDeterminingMonthlyIncome}
              initial={{ opacity: 0 }}
              animate={determiningMonthlyIncomeIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-4xl aspect-video"
            >
              <Image
                src="/images/casestudies/levelup/determiningMonthlyIncome.webp"
                alt="Determining Your Monthly Income: Flow"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </div>
          <p className="text-muted-foreground leading-relaxed"><strong>Explore Budget Tracking Options:</strong> Feeling overwhelmed by budgeting? Not anymore! The &quot;Explore Budget Tracking Options&quot; journey introduces you to various budgeting methods through engaging illustrations and interactive quizzes.  Match your financial personality to the perfect budgeting style, ensuring a comfortable and sustainable approach.  Swipe left for the next step!</p>
          <div className="flex justify-center">
            <motion.div
              ref={refExploreBudgetTrackingOptions}
              initial={{ opacity: 0 }}
              animate={exploreBudgetTrackingOptionsIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-4xl aspect-video"
            >
              <Image
                src="/images/casestudies/levelup/exploreBudgetTrackingOptions.webp"
                alt="Explore Budget Tracking Options: Flow"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </div>
          <p className="text-muted-foreground leading-relaxed"><strong>Classifying Needs vs Wants</strong>:  Mastering the art of &quot;needs vs. wants&quot; empowers smart spending. This journey starts with a Course Overview highlighting the difference.  Interactive exercises like sorting games and illustrated scenarios help you categorize expenses effectively.  Conclude by feeling confident in prioritizing your needs and making informed spending decisions.</p>
          <div className="flex justify-center">
            <motion.div
              ref={refClassifyingNeedsVsWants}
              initial={{ opacity: 0 }}
              animate={classifyingNeedsVsWantsIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-4xl aspect-video"
            >
              <Image
                src="/images/casestudies/levelup/classifyingNeedsVsWants.webp"
                alt="Classifying Needs Vs Wants: Flow"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </div>
          <p className="text-muted-foreground leading-relaxed"><strong>Listing Your Goals:</strong>  Let&apos;s turn financial dreams into reality! This journey begins with a Course Overview on setting achievable goals.  Interactive tools like guided prompts and vision board creation walk you through defining your short and long-term financial aspirations.  Finish by feeling motivated with a clear roadmap to your financial goals.</p>
          <div className="flex justify-center">
            <motion.div
              ref={refListingYourGoals}
              initial={{ opacity: 0 }}
              animate={listingYourGoalsIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-4xl aspect-video"
            >
              <Image
                src="/images/casestudies/levelup/listingYourGoals.webp"
                alt="Listing Your Goals: Flow"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </div>
          <p className="text-muted-foreground leading-relaxed">Throughout each journey, clear introductions and concluding summaries ensure you grasp the concepts.  Swipe left after each lesson to progress and unlock new financial mastery!</p>
        </section>

        {/* Conclusion Section */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Conclusion</h2>
          <p className="text-muted-foreground leading-relaxed">I UX-engineered a mobile app prototype to gamify financial literacy. Users embark on interactive journeys like &quot;Budget Tracking Bootcamp&quot; and &quot;Needs vs. Wants Showdown.&quot; Clear intros, engaging visuals, and fun exercises guide them towards financial well-being.  This case study highlights the power of UX design in crafting educational experiences that are both informative and delightful!</p>
        </section>
      </main>
    </div>
  );
};

export default CaseStudyLevelUp;