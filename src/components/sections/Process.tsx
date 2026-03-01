import {
  ClipboardList,
  Settings2,
  Link2,
  GraduationCap,
  BarChart3,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    title: "Initial Consultation",
    description:
      "We start with a deep dive into your business goals, communication challenges, and existing workflows to identify key areas for improvement.",
    icon: <ClipboardList size={36} />,
  },
  {
    title: "Model Customization",
    description:
      "We customize and fine-tune the PlythosAI model, incorporating your playbooks, data, and communication style to create a bespoke solution.",
    icon: <Settings2 size={36} />,
  },
  {
    title: "System Integration",
    description:
      "We seamlessly integrate PlythosAI with your existing systems, such as CRM, helpdesk, or communication platforms, ensuring a smooth workflow.",
    icon: <Link2 size={36} />,
  },
  {
    title: "Team Onboarding & Training",
    description:
      "We provide comprehensive onboarding and training to ensure your team can leverage the full power of PlythosAI from day one.",
    icon: <GraduationCap size={36} />,
  },
  {
    title: "Performance Monitoring",
    description:
      "We continuously monitor performance, providing insights and reports to track ROI and identify new opportunities for optimization.",
    icon: <BarChart3 size={36} />,
  },
];

function StepIcon({ number, icon }: { number: string; icon: React.ReactNode }) {
  return (
    <div className="relative w-fit">
      <div className="absolute -top-3 -left-3 z-10 w-8 h-8 rounded-full glass-panel flex items-center justify-center text-xs font-bold text-white">
        {number}
      </div>
      <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-linear-to-br from-brand-700 to-brand-500 flex items-center justify-center text-white shadow-xl shadow-brand-900/40">
        {icon}
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <FadeIn>
          <SectionHeading
            title="The Process"
            subtitle="Our streamlined process ensures a seamless integration of PlythosAI into your existing workflows, delivering value from day one."
          />
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            const isFirst = i === 0;
            const isLast = i === steps.length - 1;
            const number = String(i + 1).padStart(2, "0");
            return (
              <FadeIn key={step.title} delay={i * 80}>
                <div className="relative grid grid-cols-[2rem_1fr] md:grid-cols-2 gap-x-4 md:gap-x-16 gap-y-4 md:gap-y-0 items-center py-6 md:py-14">
                  {/* Mobile: dot column */}
                  <div className="md:hidden row-span-2 flex items-center justify-center">
                    <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-brand-500 ring-4 ring-brand-500/10" />
                  </div>

                  {/* Mobile: line segments — absolute within grid container so py-6 padding is included */}
                  {!isFirst && <div className="md:hidden absolute left-4 -translate-x-1/2 top-0 bottom-1/2 w-px bg-brand-600/25" />}
                  {!isLast && <div className="md:hidden absolute left-4 -translate-x-1/2 top-1/2 bottom-0 w-px bg-brand-600/25" />}

                  {/* Desktop: line segments above/below dot */}
                  {!isFirst && <div className="hidden md:block absolute left-1/2 top-0 bottom-1/2 w-px bg-brand-600/25 -translate-x-1/2" />}
                  {!isLast && <div className="hidden md:block absolute left-1/2 top-1/2 bottom-0 w-px bg-brand-600/25 -translate-x-1/2" />}

                  {/* Desktop: dot on center */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-brand-500 ring-4 ring-brand-500/10 -translate-x-1/2 -translate-y-1/2 z-10" />

                  {/* Icon — order alternates on desktop */}
                  <div className={isEven
                    ? "md:order-2 md:flex md:justify-start md:pl-8"
                    : "md:order-1 md:flex md:justify-end md:pr-8"
                  }>
                    <StepIcon number={number} icon={step.icon} />
                  </div>

                  {/* Text — order alternates on desktop */}
                  <div className={isEven
                    ? "md:order-1 md:pr-8"
                    : "md:order-2 md:pl-8"
                  }>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
