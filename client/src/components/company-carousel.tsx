import { motion } from "framer-motion";

const companies = [
  { name: "Google Cloud", logo: "https://lexa.deployments.otherdev.com/company-logos/google-cloud-3-transparent.webp" },
  { name: "Microsoft", logo: "https://lexa.deployments.otherdev.com/company-logos/microsoft-8-transparent.webp" },
  { name: "Bahria University", logo: "https://lexa.deployments.otherdev.com/company-logos/bahria-university-flat-transparent.webp" },
  { name: "University of Central Punjab", logo: "https://lexa.deployments.otherdev.com/company-logos/university-central-punjab-transparent.webp" },
  { name: "Sindh Bar Council", logo: "https://lexa.deployments.otherdev.com/company-logos/sindh-bar-council-transparent.webp" },
  { name: "Karachi Bar", logo: "https://lexa.deployments.otherdev.com/company-logos/karachi-bar-transparent.webp" },
  { name: "Law Student Council", logo: "https://lexa.deployments.otherdev.com/company-logos/law-student-council-transparent.webp" },
  { name: "MITE", logo: "https://lexa.deployments.otherdev.com/company-logos/logo-mite-resized.webp" },
];

export default function CompanyCarousel() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground text-lg"
          >
            Join 4,000+ companies already growing
          </motion.p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex space-x-16 animate-scroll">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <motion.img
                key={`first-${index}`}
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                data-testid={`company-logo-${company.name.toLowerCase().replace(/\s+/g, '-')}`}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <motion.img
                key={`second-${index}`}
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
