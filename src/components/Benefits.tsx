const Benefits = () => {
  const benefits = [
    {
      icon: "📈",
      title: "Empower MSMEs & Exporters",
      description: "Level the playing field with digital tools, market access, and export readiness support for small and medium enterprises across Nigeria.",
      color: "bg-blue-50",
    },
    {
      icon: "🛡️",
      title: "Promote Transparency & Verification",
      description: "Build trust through government-backed identity verification, secure documentation, and compliance with AfCFTA standards.",
      color: "bg-green-50",
    },
    {
      icon: "🌍",
      title: "Unlock Access to African Markets",
      description: "Connect with 1.3 billion consumers across 54 countries with simplified trade processes and digital infrastructure.",
      color: "bg-amber-50",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">Benefits & Impact</h2>
          <p className="text-lg text-muted-foreground">
            Transforming African trade for businesses and governments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.color} p-8 rounded-xl border border-border hover:shadow-lg transition`}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;