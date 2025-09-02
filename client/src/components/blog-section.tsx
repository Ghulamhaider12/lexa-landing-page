import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "The Future of AI in Legal Practice",
    excerpt: "Exploring how artificial intelligence is revolutionizing the legal industry and transforming traditional legal workflows.",
    category: "Legal Tech",
    readTime: "5 min read", 
    author: "Sarah Johnson",
    authorAvatar: "https://lexa.deployments.otherdev.com/avatars/avatar-1.png",
    date: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Digital Contract Management Best Practices",
    excerpt: "Learn how to streamline your contract lifecycle management with digital tools and automated workflows.",
    category: "Contract Law",
    readTime: "7 min read",
    author: "Ahmed Hassan", 
    authorAvatar: "https://lexa.deployments.otherdev.com/avatars/avatar-2.png",
    date: "Dec 12, 2024",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Navigating Legal Compliance in the Digital Age",
    excerpt: "Understanding the evolving landscape of legal compliance and how technology can help ensure regulatory adherence.",
    category: "Compliance",
    readTime: "6 min read",
    author: "Maria Rodriguez",
    authorAvatar: "https://lexa.deployments.otherdev.com/avatars/avatar-3.png", 
    date: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Latest from our Blog</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest legal technology insights and AI innovations
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              data-testid={`blog-post-${post.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <motion.img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img 
                      src={post.authorAvatar} 
                      alt={post.author}
                      className="w-6 h-6 rounded-full" 
                    />
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            data-testid="button-view-all-articles"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
