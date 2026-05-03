"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

interface ScrollFAQAccordionProps {
  data: FAQItem[];
  className?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export default function ScrollFAQAccordion({
  data,
  className,
  questionClassName,
  answerClassName,
}: ScrollFAQAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <div className={cn("w-full mx-auto", className)}>
      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(value) => setOpenItem(value || null)}
      >
        {data.map((item) => (
          <Accordion.Item value={item.id.toString()} key={item.id} className="mb-4">
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between gap-x-4 cursor-pointer group p-4 rounded-lg transition-colors duration-200" style={{ background: openItem === item.id.toString() ? 'rgba(255,255,255,0.06)' : 'transparent', border: '1px solid', borderColor: openItem === item.id.toString() ? 'rgba(255,255,255,0.1)' : 'transparent' }}
                onMouseEnter={e => { if (openItem !== item.id.toString()) e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                onMouseLeave={e => { if (openItem !== item.id.toString()) e.currentTarget.style.background = 'transparent'; }}
              >
                <div className={cn("flex items-center space-x-2 text-left", questionClassName)}>
                  <span className="text-base font-medium text-white transition-colors">{item.question}</span>
                </div>

                <span
                  className="transition-colors duration-200"
                  style={{ color: openItem === item.id.toString() ? '#FF9900' : 'rgba(255,255,255,0.3)' }}
                >
                  {openItem === item.id.toString() ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4 group-hover:text-white" />}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content asChild forceMount>
              <motion.div
                initial={false}
                animate={openItem === item.id.toString() ? "open" : "collapsed"}
                variants={{
                  open: { opacity: 1, height: "auto", marginTop: "12px" },
                  collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden px-4"
              >
                <div
                  className={cn(
                    "text-sm leading-relaxed",
                    answerClassName
                  )}
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {item.answer}
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
