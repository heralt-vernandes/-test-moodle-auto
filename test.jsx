import React from "react"; import { motion } from "framer-motion"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { Mail, Github, Linkedin } from "lucide-react";

export default function GeraldPortfolio() { return ( <div className="min-h-screen bg-gray-50 text-gray-900"> {/* Hero Section */} <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center"> <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} > <h1 className="text-4xl md:text-5xl font-bold leading-tight"> Hi, I’m <span className="text-blue-600">Gerald</span> </h1> <p className="mt-6 text-lg text-gray-600"> PhD in Accounting with strong interest in networking, cloud architecture, AI infrastructure, and system design. I build, experiment, and optimize. </p> <div className="mt-8 flex gap-4"> <Button className="rounded-2xl px-6">Contact Me</Button> <Button variant="outline" className="rounded-2xl px-6"> View Projects </Button> </div> </motion.div>

<motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-10 rounded-2xl shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-4">Core Focus</h2>
      <ul className="space-y-3 text-gray-600">
        <li>• Cloud & Virtualization (VM, Server Architecture)</li>
        <li>• Networking (Routing, VLAN, WAN, Mikrotik)</li>
        <li>• AI Infrastructure & Model Deployment</li>
        <li>• Research & Product Discovery</li>
      </ul>
    </motion.div>
  </section>

  {/* Projects Section */}
  <section className="bg-white py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">Selected Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg">Minecraft SMP Server</h3>
            <p className="text-gray-600 mt-3">
              Built and configured an online Minecraft server with secure
              remote access using tunneling and cloud integration.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg">AI Local Deployment</h3>
            <p className="text-gray-600 mt-3">
              Experimented with local LLM deployment and CPU optimization
              for lightweight model execution.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg">Network Lab</h3>
            <p className="text-gray-600 mt-3">
              Designed multi-VM network topology with routing, DHCP,
              gateway, and VLAN segmentation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

  {/* Contact Section */}
  <section className="py-20 px-6 bg-gray-100">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold">Let’s Work Together</h2>
      <p className="mt-4 text-gray-600">
        Interested in collaboration, research, or technical projects? Feel
        free to reach out.
      </p>
      <div className="mt-8 flex justify-center gap-6">
        <Button variant="outline" className="rounded-2xl">
          <Mail className="mr-2" size={18} /> Email
        </Button>
        <Button variant="outline" className="rounded-2xl">
          <Github className="mr-2" size={18} /> GitHub
        </Button>
        <Button variant="outline" className="rounded-2xl">
          <Linkedin className="mr-2" size={18} /> LinkedIn
        </Button>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="py-8 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Gerald. All rights reserved.
  </footer>
</div>

); }
