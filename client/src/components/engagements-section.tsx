import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building, BarChart3, RefreshCw } from "lucide-react";

const engagementCategories = [
  {
    icon: Building,
    title: "End-to-End Financial Reporting",
    color: "bg-primary",
    clients: [
      "Kesoram Industries Limited and Group Companies",
      "Mehai Technologies Limited and its Subsidiaries",
      "Dynamic Services & Security Limited",
      "Destiny Logistics & Infra Limited"
    ]
  },
  {
    icon: BarChart3,
    title: "Financial Reporting Automation",
    color: "bg-secondary",
    clients: [
      "Albert David Limited (Kothari Group)",
      "Birla Corporation Limited (M.P. Birla Group)"
    ]
  },
  {
    icon: RefreshCw,
    title: "Ind AS Transition & IPO",
    color: "bg-accent",
    clients: [
      "ArisInfra Group (Listed on June 25, 2025)",
      "Crizac Limited (IPO to open on July 2, 2025)",
      "Regaal Resources Limited",
      "Maheshwari Mining Private Limited"
    ]
  }
];

export default function EngagementsSection() {
  return (
    <section id="engagements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Key Engagements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            In 3 Years, We've Delivered High-Impact Engagements Across Leading Listed, Unlisted, and IPO-Bound Companies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engagementCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className={`${category.color} text-white p-3 rounded-lg inline-block mb-4`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                  <ul className="text-gray-600 space-y-2">
                    {category.clients.map((client, clientIndex) => (
                      <li key={clientIndex} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-sm">{client}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
