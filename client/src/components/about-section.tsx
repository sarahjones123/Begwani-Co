import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Begwani & Co., Chartered Accountants, founded in 2021, is a Kolkata-based CA firm providing 
            end-to-end financial reporting, accounting advisory, Ind AS transition, and virtual CFO services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              To be a one-stop, trusted solution provider in the realm of financial reporting and accounting transformation.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-gray-600">
              To empower corporates with specialized financial expertise, enabling seamless compliance and strategic decision-making.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office building" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Team Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="text-center p-8 bg-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="Shreyans Begwani" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-primary mb-2">Shreyans Begwani</h3>
              <p className="text-gray-600 mb-4">FCA, B.Com (H), Cert. IFRS (ACCA), FAFD, AICA</p>
              <p className="text-sm text-gray-500 mb-4">Founder</p>
              <p className="text-gray-600 text-sm">
                Fellow Chartered Accountant with over a decade of experience in Ind AS implementation and 
                financial reporting automation. Having spearheaded Ind AS transitions for over 25 companies across sectors.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="text-center p-8 bg-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="Indrajit Dhar" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-primary mb-2">Mr. Indrajit Dhar</h3>
              <p className="text-gray-600 mb-4">ACA, ACS, Ph. D</p>
              <p className="text-sm text-gray-500 mb-4">Senior Advisor – Strategic Finance & Governance</p>
              <p className="text-gray-600 text-sm">
                Highly experienced Chartered Accountant and Company Secretary with more than 35 years of 
                practical experience in corporate finance, accounts and taxation.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
