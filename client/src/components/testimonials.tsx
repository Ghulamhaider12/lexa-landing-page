import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Arslana Nawaz",
    title: "Adv. High Court, PinPoint",
    avatar: "https://lexa.deployments.otherdev.com/avatars/avatar-1.png",
    quote: "Lexa has been a game-changer for my legal practice. Its AI-powered insights and extensive database of judgments have saved me countless hours of research, allowing me to focus more on client needs. Highly recommend!"
  },
  {
    name: "Adeel Nawaz", 
    title: "Law Student, Hues",
    avatar: "https://lexa.deployments.otherdev.com/avatars/avatar-2.png",
    quote: "As a law student, Lexa's MCQ platform has been invaluable in preparing for exams. It's like having a personal tutor guiding me through the complexities of legal principles. A must-have for anyone serious about their legal studies."
  },
  {
    name: "Zara Ahmed",
    title: "Legal Consultant, Greenish", 
    avatar: "https://lexa.deployments.otherdev.com/avatars/avatar-7.png",
    quote: "Lexa's drafting feature is a lifesaver in my hectic schedule. It streamlines the process of creating legal documents, ensuring accuracy and compliance. Couldn't imagine managing my caseload without it."
  },
  {
    name: "Arsla Sidique",
    title: "Corporate Lawyer, Hues",
    avatar: "https://lexa.deployments.otherdev.com/avatars/avatar-1.png", 
    quote: "Impressed by Lexa's quick responses to my legal queries. Its AI-driven interface delivers clear and authoritative answers, making it my go-to tool for navigating legal complexities with confidence. Highly recommend!"
  },
  {
    name: "Fatima Akhtar",
    title: "Adv. High Court, Hues",
    avatar: "https://lexa.deployments.otherdev.com/avatars/avatar-4.png",
    quote: "Lexa has transformed how I approach legal research. Its comprehensive database of precedents and analyses provides me with critical insights for formulating winning legal strategies. Exceptional tool!"
  },
  {
    name: "Ahsan Haq",
    title: "Adv. High Court, Hues", 
    avatar: "https://lexa.deployments.otherdev.com/avatars/avatar-3.png",
    quote: "Lexa is more than just a chatbot—it's a visionary tool reshaping legal consultation in Pakistan. Its accessibility and affordability make it an indispensable asset for lawyers and law students alike. Truly revolutionary!"
  }
];

export default function Testimonials() {
  return (
    <section id="customers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What our clients say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by legal professionals across Asia and the Middle East
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              data-testid={`testimonial-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
