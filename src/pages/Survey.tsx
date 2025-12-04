import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface SurveyAnswer {
  [key: string]: string;
}

export default function Survey() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<SurveyAnswer>({});

  const questions = [
    {
      id: "company_type",
      question: "What type of business are you?",
      type: "single",
      options: [
        "Importer",
        "Exporter",
        "Manufacturer",
        "Service Provider",
        "Trading Company",
      ],
    },
    {
      id: "industries",
      question: "Which industries does your business operate in? (Select all that apply)",
      type: "multiple",
      options: [
        "Agriculture & Food",
        "Manufacturing",
        "Textiles & Apparel",
        "Technology & Services",
        "Energy & Minerals",
        "Pharmaceuticals",
        "Logistics & Transport",
        "Financial Services",
      ],
    },
    {
      id: "target_markets",
      question: "Which African markets are you interested in trading with?",
      type: "multiple",
      options: [
        "West Africa",
        "East Africa",
        "Southern Africa",
        "North Africa",
        "Central Africa",
      ],
    },
    {
      id: "trade_experience",
      question: "What is your experience with international trade?",
      type: "single",
      options: [
        "New to trade",
        "Less than 2 years",
        "2-5 years",
        "5-10 years",
        "More than 10 years",
      ],
    },
    {
      id: "main_challenges",
      question:
        "What are your main challenges with African trade? (Select all that apply)",
      type: "multiple",
      options: [
        "Regulatory Compliance",
        "Market Information",
        "Payment & Settlement",
        "Logistics & Shipping",
        "Product Certification",
        "Lack of Trust/Verification",
        "Currency & Exchange Risk",
        "Access to Credit",
      ],
    },
  ];

  const currentQuestion = questions[currentStep];
  const isAnswered =
    answers[currentQuestion.id] &&
    (currentQuestion.type === "multiple"
      ? answers[currentQuestion.id].split(",").length > 0
      : true);

  const handleSingleSelect = (option: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: option,
    });
  };

  const handleMultipleSelect = (option: string) => {
    const current = answers[currentQuestion.id]?.split(",") || [];
    const updated = current.includes(option)
      ? current.filter((o) => o !== option)
      : [...current, option];
    setAnswers({
      ...answers,
      [currentQuestion.id]: updated.join(","),
    });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Survey completed, navigate to registration
      localStorage.setItem("surveyAnswers", JSON.stringify(answers));
      navigate("/register");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <Layout hideHeader={true}>
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <div className="bg-muted border-b border-border py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">
                  Trade Readiness Assessment
                </h1>
                <p className="text-muted-foreground mt-2">
                  Prepare your business for AfCFTA trade opportunities
                </p>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-border rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Question {currentStep + 1} of {questions.length}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              {currentQuestion.question}
            </h2>

            {/* Single Select */}
            {currentQuestion.type === "single" && (
              <div className="space-y-3 mb-12">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSingleSelect(option)}
                    className={`w-full text-left px-6 py-4 rounded-lg border-2 transition font-medium ${
                      answers[currentQuestion.id] === option
                        ? "border-primary bg-primary-50 text-primary"
                        : "border-border hover:border-primary text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          answers[currentQuestion.id] === option
                            ? "border-primary bg-primary"
                            : "border-border"
                        }`}
                      >
                        {answers[currentQuestion.id] === option && (
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        )}
                      </div>
                      {option}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Multiple Select */}
            {currentQuestion.type === "multiple" && (
              <div className="space-y-3 mb-12">
                {currentQuestion.options.map((option) => {
                  const selected =
                    answers[currentQuestion.id]?.split(",").includes(option) ||
                    false;
                  return (
                    <button
                      key={option}
                      onClick={() => handleMultipleSelect(option)}
                      className={`w-full text-left px-6 py-4 rounded-lg border-2 transition font-medium ${
                        selected
                          ? "border-primary bg-primary-50 text-primary"
                          : "border-border hover:border-primary text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                            selected
                              ? "border-primary bg-primary"
                              : "border-border"
                          }`}
                        >
                          {selected && (
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          )}
                        </div>
                        {option}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {currentStep === questions.length - 1 ? "Complete & Continue" : "Next"}
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
