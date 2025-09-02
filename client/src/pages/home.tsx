import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LanguageCycler from "@/components/language-cycler";
import CompanyCarousel from "@/components/company-carousel";
import DashboardRecreation from "@/components/dashboard-recreation";
import FeaturesShowcase from "@/components/features-showcase";
import Testimonials from "@/components/testimonials";
import FAQSection from "@/components/faq-section";
import BlogSection from "@/components/blog-section";
import ClientInterview from "@/components/client-interview";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-24 pb-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            {/* Trusted Users */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="flex -space-x-2">
                  <img 
                    src="https://lexa.deployments.otherdev.com/avatars/avatar-1.png" 
                    alt="Customer" 
                    className="w-8 h-8 rounded-full border-2 border-white" 
                  />
                  <img 
                    src="https://lexa.deployments.otherdev.com/avatars/avatar-2.png" 
                    alt="Customer" 
                    className="w-8 h-8 rounded-full border-2 border-white" 
                  />
                  <img 
                    src="https://lexa.deployments.otherdev.com/avatars/avatar-3.png" 
                    alt="Customer" 
                    className="w-8 h-8 rounded-full border-2 border-white" 
                  />
                </div>
                <span className="text-muted-foreground">
                  Trusted by 1000's of legal professionals across Asia and the Middle East
                </span>
              </div>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <motion.span 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block mb-2"
              >
                Draft, Share and Store
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="block mb-2"
              >
                your contracts in
              </motion.span>
              <div className="block">
                <LanguageCycler />
              </div>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto text-balance"
            >
              Create, translate, sign, and manage contracts autonomously — powered by AI intelligence designed for SMEs and small law firms.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl animate-glow"
                data-testid="button-hero-request-demo"
              >
                Request Demo
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                data-testid="button-hero-get-started"
              >
                Get Started for Free
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <CompanyCarousel />
      <DashboardRecreation />
      <FeaturesShowcase />
      <Testimonials />
      <FAQSection />
      <BlogSection />
      <ClientInterview />
      
      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Ready to Transform Your Legal Practice?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl opacity-90 mb-12 max-w-3xl mx-auto"
          >
            Get a personalized demo of Lexa and see how it can revolutionize your legal workflow with AI-powered tools designed for modern legal professionals.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              data-testid="button-cta-request-demo"
            >
              Request Demo
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200"
              data-testid="button-cta-start-trial"
            >
              Start Free Trial
            </motion.button>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-sm opacity-75 mt-6"
          >
            No spam. We'll only send you updates about Lexa.
          </motion.p>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
