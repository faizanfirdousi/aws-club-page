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
    <div
      className={cn("max-w-4xl mx-auto text-center py-16", className)}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
        Frequently Asked Questions
      </h2>
      <p className="text-muted-foreground mb-10 text-lg">
        Everything you need to know about joining and succeeding in the AWS Community.
      </p>

      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(value) => setOpenItem(value || null)}
      >
        {data.map((item) => (
          <Accordion.Item value={item.id.toString()} key={item.id} className="mb-6">
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-start gap-x-4 cursor-default">
                <div
                  className={cn(
                    "relative flex items-center space-x-2 rounded-xl p-4 transition-all duration-300",
                    openItem === item.id.toString()
                      ? "bg-accent text-accent-foreground border border-border shadow-sm"
                      : "bg-card border border-border text-foreground hover:bg-muted",
                    questionClassName
                  )}
                >
                  {item.icon && (
                    <span
                      className={cn(
                        "absolute bottom-6",
                        item.iconPosition === "right" ? "right-0" : "left-0"
                      )}
                      style={{
                        transform: item.iconPosition === "right" ? "rotate(7deg)" : "rotate(-4deg)",
                      }}
                    >
                      {item.icon}
                    </span>
                  )}
                  <span className="font-medium text-left">{item.question}</span>
                </div>

                <span
                  className={cn(
                    "text-muted-foreground",
                    openItem === item.id.toString() && "text-foreground"
                  )}
                >
                  {openItem === item.id.toString() ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content asChild forceMount>
              <motion.div
                initial={false}
                animate={openItem === item.id.toString() ? "open" : "collapsed"}
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="flex justify-start mt-2">
                  <div
                    className={cn(
                      "relative w-full rounded-2xl px-5 py-4 text-muted-foreground text-base text-left bg-muted/50 border border-border shadow-sm",
                      answerClassName
                    )}
                  >
                    {item.answer}
                  </div>
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
