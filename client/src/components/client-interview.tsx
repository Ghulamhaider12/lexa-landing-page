import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const featuredInterview = {
  name: "Arslana Nawaz",
  title: "Senior Partner, PinPoint Legal",
  avatar: "https://lexa.deployments.otherdev.com/avatars/avatar-1.png",
  quote: "Implementing Lexa has been transformational for our firm. We've reduced contract review time by 70% and improved accuracy significantly. The AI-powered insights have helped us identify potential risks that we might have missed in traditional reviews.",
  metrics: [
    { value: "70%", label: "Time Saved" },
    { value: "95%", label: "Accuracy Rate" },
    { value: "200+", label: "Cases Handled" }
  ],
  image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
};

const additionalInterviews = [
  {
    name: "Fatima Akhtar",
    title: "High Court Advocate",
    avatar: "https://lexa.deployments.otherdev.com/avatars/avatar-4.png",
    preview: "Lexa's research capabilities have given me access to precedents I wouldn't have found otherwise..."
  },
  {
    name: "Ahsan Haq", 
    title: "Corporate Lawyer",
    avatar: "https://lexa.deployments.otherdev.com/avatars/avatar-3.png",
    preview: "The compliance dashboard has revolutionized how we manage regulatory requirements..."
  },
  {
    name: "Zara Ahmed",
    title: "Legal Tech Director", 
    avatar: "https://lexa.deployments.otherdev.com/avatars/avatar-7.png",
    preview: "The ROI from implementing Lexa was evident within the first quarter..."
  }
];

export default function ClientInterview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Client Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from legal professionals who have transformed their practice with Lexa
          </p>
        </motion.div>
        
        {/* Featured Client Interview */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img 
                  src={featuredInterview.image} 
                  alt="Legal team collaboration"
                  className="rounded-2xl shadow-2xl w-full" 
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={featuredInterview.avatar} 
                    alt={featuredInterview.name}
                    className="w-16 h-16 rounded-full" 
                  />
                  <div>
                    <h3 className="text-xl font-bold">{featuredInterview.name}</h3>
                    <p className="text-muted-foreground">{featuredInterview.title}</p>
                  </div>
                </div>
                
                <blockquote className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                  "{featuredInterview.quote}"
                </blockquote>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  {featuredInterview.metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="p-4"
                    >
                      <div className="text-2xl font-bold text-primary">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Additional Client Interviews Preview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalInterviews.map((interview, index) => (
            <motion.div
              key={interview.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              data-testid={`interview-preview-${interview.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={interview.avatar} 
                  alt={interview.name}
                  className="w-12 h-12 rounded-full" 
                />
                <div>
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {interview.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{interview.title}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {interview.preview}
              </p>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center text-primary text-sm font-medium"
              >
                <span>Watch Full Interview</span>
                <PlayCircle className="w-4 h-4 ml-2" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
