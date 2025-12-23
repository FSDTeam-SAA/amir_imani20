"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id?: number;
  question?: string;
  answer?: string;
}

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What is DoUndo?",
      answer:
        "DoUndo is a tabletop gaming platform that connects people through immersive games, offering unique adventures both around and beyond the table.",
    },
    {
      id: 2,
      question: "Is DoUndo available for children?",
      answer:
        "DoUndo has multiple offerings suitable for different age groups. We recommend checking the specific game details for age recommendations.",
    },
    {
      id: 3,
      question: "Is DoUndo a feature-rich or psychologist-tool?",
      answer:
        "DoUndo is primarily a gaming platform focused on entertainment and social connection, not a psychological tool.",
    },
    {
      id: 4,
      question:
        "Can I use DoUndo images, logos, or symbols in any own products or videos?",
      answer:
        "Please contact our licensing team for permissions regarding use of DoUndo assets in your products.",
    },
    {
      id: 5,
      question: "What personal data does DoUndo collect from the website?",
      answer:
        "We collect minimal personal data and only use it to improve your experience. See our privacy policy for complete details.",
    },
    {
      id: 6,
      question: "Is my payment information secure?",
      answer:
        "Yes, we use industry-standard encryption and security measures to protect all payment information.",
    },
    {
      id: 7,
      question: "Does DoUndo share or sell my personal information?",
      answer:
        "No, DoUndo does not share or sell personal information to third parties without your consent.",
    },
    {
      id: 8,
      question: "What happens if my package is lost in transit?",
      answer:
        "Contact our support team with your order details and we will investigate and resolve the issue promptly.",
    },
    {
      id: 9,
      question: "Can retailers or partners distribute DoUndo?",
      answer:
        "We work with select retail partners. Contact our partnerships team for distribution inquiries.",
    },
    {
      id: 10,
      question: "How can I contact DoUndo for general questions or support?",
      answer:
        "You can reach us through our contact form, email, or phone. Visit our contact page for all available options.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id ||null)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition"
              >
                <span className="text-left font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform flex-shrink-0 ml-4 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === faq.id && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
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
