import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Settings, 
  Handshake, 
  Rocket, 
  Scale, 
  Users 
} from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Proven Expertise",
    description: "Over 25 successful Ind AS implementations across various sectors"
  },
  {
    icon: Settings,
    title: "Automation Focus",
    description: "Driven by automation for speed, accuracy, and efficiency"
  },
  {
    icon: Handshake,
    title: "Partner-led Execution",
    description: "Active involvement, not just oversight, in every engagement"
  },
  {
    icon: Rocket,
    title: "IPO Readiness",
    description: "Tailored support for IPO preparation and audit readiness"
  },
  {
    icon: Scale,
    title: "Compliance & Strategy",
    description: "Seamless blend of regulatory compliance and strategic insight"
  },
  {
    icon: Users,
    title: "Diverse Experience",
    description: "Strong experience across listed, unlisted, and group companies"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Our proven expertise and commitment to excellence make us the ideal partner for your financial needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-200">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
