import React from "react";
import Faq from "./Faq";

const FaqSection = () => {
  const faqs = [
    {
      id: 1,
      question: "What is your return policy?",
      answer:
        "You can return any item within 30 days of purchase for a full refund, provided it is in its original condition.",
    },
    {
      id: 2,

      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide. Shipping costs and delivery times vary depending on the destination.",
    },
    {
      id: 3,

      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email to monitor its delivery status.",
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, PayPal, Apple Pay, and Google Pay.",
    },
    {
      id: 5,
      question: "How can I contact customer support?",
      answer:
        "You can reach our support team via email at support@example.com or call us at +1 (800) 123-4567.",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-3xl text-center mb-7">
          Frequently Asked Questions
        </h1>

        {faqs.map((faq) => (
          <Faq key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
