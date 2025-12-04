import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Sign Up",
      description: "Create an account and provide basic business details.",
      icon: "👤",
    },
    {
      number: "2",
      title: "Complete Verification",
      description:
        "Securely submit NIN, CAC documents, and identity information.",
      icon: "🛡️",
    },
    {
      number: "3",
      title: "Select Categories & Countries",
      description:
        "Choose industries and African markets you want to engage with.",
      icon: "🎯",
    },
    {
      number: "4",
      title: "Get Recommendations",
      description:
        "Receive guidance and export opportunities based on your profile.",
      icon: "✨",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Get started in four simple steps
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-1 bg-border" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-primary flex items-center justify-center mb-6 relative z-10 text-4xl">
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-bold text-center mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
