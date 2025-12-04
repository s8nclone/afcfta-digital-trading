

import { useState } from "react";
import {
  ChevronDown
} from "lucide-react";

const FAQ = ()=> {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the AFCFTA Digital Trade Portal?",
      answer: "The AFCFTA Digital Trade Portal is a government-backed platform designed to facilitate seamless digital trade across 54 African nations, connecting Nigerian businesses with opportunities under the African Continental Free Trade Area.",
    },
    {
      question: "How does the verification process work?",
      answer: "We use secure government-backed verification including NIN, CAC, and business documentation verification to ensure all traders are legitimate and trustworthy, building a secure trading community.",
    },
    {
      question: "What security measures do you have in place?",
      answer: "We employ military-grade encryption, regular security audits, government-backed identity verification, and secure payment integration through PAPSS to protect all transactions and data.",
    },
    {
      question: "Are there any fees for using the platform?",
      answer: "Registration and basic platform access are free. We offer premium features and advanced analytics at competitive rates designed to support MSMEs in accessing African markets.",
    },
    {
      question: "How long does the verification process take?",
      answer: "Most verifications are completed within 24-48 hours. During the verification period, you can explore the platform and access educational resources about AfCFTA trade opportunities.",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Below we've provided answers to common questions about our
            AfCFTA platform, security measures, and trading features.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg bg-white overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition text-left font-semibold"
              >
                {faq.question}
                <ChevronDown
                  size={20}
                  className={`transform transition ${
                    expandedFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedFaq === index && (
                <div className="px-6 py-4 bg-primary-50 border-t border-border text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;