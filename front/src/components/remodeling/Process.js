
import { ArrowRight } from "lucide-react";

const Process = () => {
  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We meet to understand your needs, evaluate the space, discuss ideas, and establish a preliminary budget.",
    },
    {
      step: 2,
      title: "Design and Planning",
      description: "We create detailed plans, select materials, and finalize budgets for your approval before starting.",
    },
    {
      step: 3,
      title: "Expert Execution",
      description: "Our team of professionals performs the transformation with precision, efficiency, and premium materials.",
    },
    {
      step: 4,
      title: "Delivery and Warranty",
      description: "We conduct a final inspection together to ensure your complete satisfaction and back our work with solid warranties.",
    },
  ];

  return (
    <section className="section process-section animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Process</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">HOW WE WORK</p>
        </div>

        <div className="process-steps">
          {processSteps.map((step) => (
            <div className="process-step" key={step.step}>
              <div className="step-number">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className="process-cta">
          <p>Start your project today with a free consultation</p>
          <a href="#contact" className="cta-button">
            Schedule Consultation <ArrowRight className="cta-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
