import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What industries can benefit from your AI solutions?",
    answer: "Our AI solutions are applicable across various industries, including healthcare, finance, retail, and manufacturing. Lexa specifically focuses on legal services, providing specialized tools for law firms, legal departments, and legal professionals."
  },
  {
    question: "How do you ensure data privacy and security?",
    answer: "We adhere to strict data privacy regulations and implement robust security measures including end-to-end encryption, secure file storage, and compliance with global security standards to protect sensitive legal information."
  },
  {
    question: "Can your AI solutions be customized to fit specific business needs?",
    answer: "Absolutely! Lexa offers customizable workflows, templates, and AI models that can be tailored to your specific legal practice areas and business requirements. Our platform adapts to your firm's unique processes and differentiators."
  },
  {
    question: "Do you provide ongoing support and maintenance for your AI solutions?",
    answer: "Yes, we offer comprehensive support and maintenance services including 24/7 customer support, regular updates, training resources, and dedicated account management to ensure the smooth operation of our AI solutions."
  },
  {
    question: "How can I get started with your AI solutions?",
    answer: "Simply reach out to our team to schedule a consultation and personalized demo. We'll explore how our AI solutions can benefit your specific legal practice and guide you through the implementation process."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advice and answers from our team
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg border border-border overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-all duration-200"
                  whileHover={{ backgroundColor: "hsl(var(--muted) / 0.5)" }}
                  data-testid={`faq-question-${index}`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    </motion.div>
                  </div>
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
