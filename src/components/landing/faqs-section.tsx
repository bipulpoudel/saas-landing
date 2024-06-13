const items = [
  {
    question: "What forms can Revesh automate?",
    answer:
      "Revesh can automate a wide range of immigration forms, including but not limited to I-693, I-485, and other related documentation.",
  },
  {
    question: "How secure is Revesh?",
    answer:
      "Revesh employs advanced encryption and security protocols to ensure that all data is securely stored and protected against unauthorized access.",
  },
  {
    question: "Can I add more users to my plan?",
    answer:
      "Yes, additional users can be added for free upto 5 users per agency. For more users, contact our sales team for a custom plan.",
  },
  {
    question: "What kind of support does Revesh offer?",
    answer:
      "Revesh offers email and phone support for all users, with 24/7 support available.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "The 14-day free trial allows you to explore features at no cost. No credit card is required to start the trial, and you can upgrade or cancel at any time.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. There are no cancellation fees, though we do not offer refunds for partial months.",
  },
  {
    question: "Does Revesh integrate with other software?",
    answer:
      "Yes, Revesh includes custom integrations and API access for custom plan based on use cases, allowing it to connect with other software systems your business uses.",
  },
  {
    question: "Is training provided for new users?",
    answer:
      "Yes, Revesh includes free onboarding and initial training for all users to ensure you and your team can fully utilize all features from day one.",
  },
  {
    question: "Can I customize workflows according to my business's needs?",
    answer:
      "Yes, Revesh allows you to customize forms and workflows to perfectly align with your business operations.",
  },
];

const FAQsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-32 max-sm:py-20 bg-muted">
      <div className="container flex flex-col gap-5 items-center justify-center text-center max-sm:items-start max-sm:text-left">
        <span className="border rounded-full px-4 py-1 bg-background shadow">
          FAQs
        </span>
        <h2 className="text-4xl font-medium max-sm:text-2xl">
          Frequently asked questions
        </h2>

        <p className="text-muted-foreground max-w-2xl text-base max-sm:text-sm">
          If you can’t find what you’re looking for, email our support team and
          if you’re lucky someone will get back to you.
        </p>

        <div className="grid grid-cols-3 gap-10 py-20 max-sm:grid-cols-1 max-sm:py-10">
          {items.map((item) => (
            <div
              className="flex flex-col gap-4 items-start text-start"
              key={item.question}
            >
              <h3 className="text-lg font-medium max-sm:text-xl">
                {item.question}
              </h3>
              <p className="text-muted-foreground font-light">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;
