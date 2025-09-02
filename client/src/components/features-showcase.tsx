import { motion } from "framer-motion";
import { Check, FilePlus, Languages, Mic, Search, ShieldCheck, FormInput } from "lucide-react";

const features = [
  {
    title: "24/7 AI Consultancy",
    description: "Our advanced AI operates 24/7, providing immediate legal assistance when traditional legal services are unavailable. Unlike conventional law firms with limited hours, Lexa never sleeps.",
    image: "https://lexa.deployments.otherdev.com/media/customer-support.webp",
    benefits: [
      "24/7 AI Legal Support",
      "Multi-Language Contracts", 
      "Regional Compliance Engine",
      "Cross-Border Templates"
    ]
  },
  {
    title: "Secure Vault Management System",
    description: "Our encrypted vault system provides a secure, centralized repository for all your legal documents with bank-level encryption and comprehensive version history.",
    image: "https://lexa.deployments.otherdev.com/media/card-1.webp",
    benefits: [
      "End-to-end encryption",
      "Secure file sharing and storage",
      "Global security compliance"
    ]
  },
  {
    title: "Advanced E-Signing Capabilities",
    description: "Lexa's robust e-signing system offers legally binding signatures across multiple jurisdictions with customizable workflows and biometric verification.",
    image: "https://lexa.deployments.otherdev.com/media/document-collaboration-cropped.webp",
    benefits: [
      "Multi-party signing workflows",
      "Legal validity across 30+ jurisdictions",
      "Automated signature reminders"
    ]
  }
];

const aiFeatures = [
  {
    icon: FilePlus,
    title: "AI-Powered Contract Creation",
    description: "Craft binding legal documents instantly using pre-designed templates and smart prompts."
  },
  {
    icon: Languages,
    title: "Live Translation & Jargon Decoder", 
    description: "Translate entire contracts in real-time and get clear explanations of complex legal terms."
  },
  {
    icon: Mic,
    title: "Voice & Meeting Intelligence",
    description: "Lexa listens in on negotiations and provides real-time legal advice and risk alerts."
  }
];

const researchFeatures = [
  {
    icon: Search,
    title: "Legal Research & Judgment Library",
    description: "Access over 200K digitized judgments and 10K+ legal documents instantly."
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Risk Dashboard",
    description: "Stay ahead of liabilities with automated compliance checks and risk alerts."
  },
  {
    icon: FormInput,
    title: "Form-Based Drafting",
    description: "Upload any contract template, and Lexa turns it into a guided, fillable form."
  }
];

export default function FeaturesShowcase() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Augment All of Your Work on One Integrated, Secure Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of legal work with AI-powered tools designed for modern legal professionals
          </p>
        </motion.div>
        
        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border h-full">
                <motion.img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-primary/80 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + benefitIndex * 0.1 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">AI-Powered Features</h3>
            <div className="space-y-6">
              {aiFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <Icon className="w-4 h-4 text-primary-foreground" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Research & Compliance</h3>
            <div className="space-y-6">
              {researchFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <Icon className="w-4 h-4 text-secondary-foreground" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
