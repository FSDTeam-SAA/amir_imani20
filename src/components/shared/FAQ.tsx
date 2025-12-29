"use client";

import { useState } from "react";
import { ChevronDown, Minus, Plus } from "lucide-react";

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
        "DoUndo is a two-player strategy board game built around a unique system of symbols, layered memory, and psychological reading. It is designed to be easy to learn but deeply replayable, combining logic, pattern recognition, and interpretation of your opponent's intentions.",
    },
    {
      id: 2,
      question: "Is DoUndo suitable for children?",
      answer:
        "DoUndo can be enjoyed by families and older children, but it contains small components and is not suitable for very young children. Please always follow the age recommendation on the box and ensure that young players are supervised by an adult.",
    },
    {
      id: 3,
      question: "Is DoUndo a fortune-telling or psychological tool?",
      answer:
        "DoUndo is first and foremost a strategy and entertainment game. Some related products or content may include symbolic or narrative experiences, but these are for creative and entertainment purposes only and should not be treated as psychological, medical, financial, or legal advice.",
    },
    {
      id: 4,
      question: "Who owns the rights to DoUndo?",
      answer:
        "All intellectual property associated with DoUndo, including artwork, symbols, card designs, manuals, packaging, website content, and digital materials, is owned and controlled by DoUndo Corp. Unauthorized use, copying, or reproduction is strictly prohibited.",
    },
    {
      id: 5,
      question:
        "Can I use DoUndo images, logos, or symbols in my own projects or videos?",
      answer:
        "You may not use DoUndo logos, symbols, artwork, or other proprietary assets for commercial purposes without prior written permission from DoUndo Corp. For fan content or collaboration proposals, please contact us through the official website.",
    },
    {
      id: 6,
      question:
        "What personal data does DoUndo collect when I order from the website?",
      answer:
        "When you place an order, we collect only the information necessary to process and deliver your purchase, such as your name, email, shipping address, and basic order details. Payment information is handled securely by our third-party payment processors; we do not store your full card details.",
    },
    {
      id: 7,
      question: "Is my payment information secure?",
      answer:
        "Yes. All payments are processed through reputable third-party providers (such as Stripe or PayPal) using encrypted connections. DoUndo does not store your full credit card number or CVV on its servers.",
    },
    {
      id: 8,
      question: "Does DoUndo share or sell my personal information?",
      answer:
        "We do not sell your personal information. We may share limited data with trusted service providers, for example, shipping carriers, payment processors, and hosting providers, strictly for the purpose of fulfilling your orders and operating our services, as described in our Privacy Policy.",
    },
    {
      id: 9,
      question: "What should I do if my order arrives damaged or incomplete?",
      answer:
        "If your order arrives damaged, incomplete, or with the wrong items, please contact our support team at support@doundogames.com within 7 days of delivery. Include your order number and clear photos where possible. We will review your case and arrange a replacement or other appropriate solution.",
    },
    {
      id: 10,
      question:
        "Are customs duties or import taxes included in my order total?",
      answer:
        "For international orders, customs duties, import taxes, and local VAT are typically not included in the product or shipping price. These additional charges, if any, are usually collected by your local customs authority and are the responsibility of the recipient.",
    },
    {
      id: 11,
      question: "Can I request access to or deletion of my personal data?",
      answer:
        "Yes. In line with applicable privacy laws, you may request access to the personal data we hold about you, ask for corrections to inaccurate information, or request deletion in certain circumstances. To do so, please contact privacy@doundogames.com and we will assist you.",
    },
    {
      id: 12,
      question: "What happens if my package is lost in transit?",
      answer:
        "If tracking information suggests that your package has been lost in transit, we will work with the carrier to investigate. Once loss is confirmed, we will, in line with our Shipping Policy, either send a replacement or offer a refund, depending on the specific circumstances.",
    },
    {
      id: 13,
      question: "Can retailers or partners distribute DoUndo?",
      answer:
        "We welcome interest from retailers, distributors, and collaboration partners. Please reach out through our official contact channels with details about your business, location, and volume expectations so we can review and discuss potential partnerships.",
    },
    {
      id: 14,
      question: "How can I contact DoUndo for general questions or support?",
      answer:
        "For general questions, product support, or order-related inquiries, please contact us at support@doundogames.com or through the contact form on our official website. For privacy or legal matters, you may use privacy@doundogames.com or legal@doundogames.com as indicated in our policies.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="md:text-3xl xl:text-5xl font-bold text-center text-[#181D27]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#6C757D] text-base md:text-xl leading-[150%]  mb-12 text-center mt-2">
          Here are the top questions our players ask before getting started.
        </p>

        <div className="max-w-4xl mx-auto space-y-1">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-gray-200  overflow-hidden hover:border-gray-300 transition"
            >
              <button
                onClick={() =>
                  setOpenId(openId === faq.id ? null : faq.id || null)
                }
                className="w-full px-6 flex items-center justify-between bg-white hover:bg-gray-50 transition cursor-pointer"
              >
                <span className="text-left md:text-lg font-medium text-gray-900 py-4">
                  {faq.question}
                </span>
                {faq.id === openId ? (
                  <Minus
                    className={`transition-transform shrink-0 ml-4 border rounded-full w-6 h-6 p-1 border-primary text-primary`}
                  />
                ) : (
                  <Plus
                    className={`transition-transform shrink-0 ml-4 border rounded-full w-6 h-6 p-1 border-primary text-primary`}
                  />
                )}
              </button>

              {openId === faq.id && (
                <div className="px-6 pb-3">
                  <p className="text-gray-700 text-lg leading-relaxed">
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
