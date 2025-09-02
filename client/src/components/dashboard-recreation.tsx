import { motion } from "framer-motion";
import { Grid3X3, List, FileText, Folder, Edit, Shield, BarChart, File } from "lucide-react";

const quickAccessItems = [
  { name: "Contracts", status: "Active", count: "24 files", icon: FileText, color: "blue" },
  { name: "Case Files", status: "Active", count: "18 files", icon: Folder, color: "green" },
  { name: "Legal Briefs", status: "Drafts", count: "12 files", icon: Edit, color: "yellow" },
  { name: "Client Docs", status: "Confidential", count: "36 files", icon: Shield, color: "red" },
  { name: "AI Analysis", status: "Reports", count: "8 files", icon: BarChart, color: "purple" },
  { name: "Templates", status: "Legal Forms", count: "15 files", icon: File, color: "teal" },
];

const recentActivity = [
  {
    name: "Contract_Amendment_2024.pdf",
    time: "2 hours ago",
    reason: "Recently accessed",
    reasonColor: "blue",
    owner: "John Smith",
    location: "Contracts",
    icon: FileText,
    iconColor: "red",
  },
  {
    name: "Case_Brief_Johnson_vs_State.docx",
    time: "1 day ago",
    reason: "Shared with you",
    reasonColor: "green",
    owner: "Sarah Wilson",
    location: "Case Files",
    icon: FileText,
    iconColor: "blue",
  },
];

export default function DashboardRecreation() {
  return (
    <section id="platform" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Experience the Future of Legal Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Manage your legal documents with AI assistance in one integrated, secure platform
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-6 md:p-8 shadow-2xl">
            {/* Dashboard Header */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-primary rounded-xl p-6 mb-6 text-primary-foreground"
            >
              <h3 className="text-2xl font-bold mb-2">Welcome back</h3>
              <p className="opacity-90">Manage your legal documents with AI assistance</p>
            </motion.div>
            
            {/* View Toggle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-2 mb-6"
            >
              <button 
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
                data-testid="button-grid-view"
              >
                <Grid3X3 className="w-4 h-4" />
                Grid
              </button>
              <button 
                className="text-muted-foreground px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-muted transition-colors"
                data-testid="button-list-view"
              >
                <List className="w-4 h-4" />
                List
              </button>
            </motion.div>
            
            {/* Quick Access Section */}
            <div className="mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex justify-between items-center mb-4"
              >
                <h4 className="text-lg font-semibold">Quick Access</h4>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  View all →
                </a>
              </motion.div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {quickAccessItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-card rounded-lg p-4 text-center hover:shadow-lg transition-all duration-200 cursor-pointer group"
                      data-testid={`card-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-${item.color}-200 transition-colors`}>
                        <Icon className={`w-6 h-6 text-${item.color}-600`} />
                      </div>
                      <h5 className="font-medium text-sm mb-1">{item.name}</h5>
                      <p className="text-xs text-muted-foreground mb-1">{item.status}</p>
                      <p className="text-xs text-muted-foreground">{item.count}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* Recent Activity Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold">Recent Activity</h4>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  View all →
                </a>
              </div>
              
              <div className="bg-card rounded-lg overflow-hidden">
                <div className="grid grid-cols-4 gap-4 p-4 border-b border-border text-sm font-medium text-muted-foreground">
                  <div>Document</div>
                  <div>Reason</div>
                  <div>Owner</div>
                  <div>Location</div>
                </div>
                
                <div className="divide-y divide-border">
                  {recentActivity.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <motion.div
                        key={activity.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                        whileHover={{ backgroundColor: "hsl(var(--muted) / 0.5)" }}
                        className="grid grid-cols-4 gap-4 p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                        data-testid={`activity-${activity.name.split('.')[0].toLowerCase()}`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className={`w-4 h-4 text-${activity.iconColor}-500`} />
                          <div>
                            <p className="text-sm font-medium">{activity.name}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                        <div>
                          <span className={`text-${activity.reasonColor}-600 text-sm`}>
                            {activity.reason}
                          </span>
                        </div>
                        <div className="text-sm">{activity.owner}</div>
                        <div className="text-sm">{activity.location}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
