import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Linkedin, Github, Twitter, Send, MapPin, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isTyping, setIsTyping] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [responseTime, setResponseTime] = useState("");
  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const watchedFields = watch();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      
      const hour = now.getHours();
      if (hour >= 9 && hour <= 18) {
        setResponseTime("Usually responds within 2-4 hours");
      } else {
        setResponseTime("Usually responds within 8-12 hours");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hasContent = Boolean(watchedFields.message && watchedFields.message.length > 0);
    setIsTyping(hasContent);
  }, [watchedFields.message]);

  const onSubmit = async (data: ContactForm) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-cyber-blue" />,
      label: "Email",
      value: "krishnadipayan108@gmail.com",
      color: "cyber-blue",
      href: "mailto:dipayan@example.com"
    },
    {
      icon: <Linkedin className="text-cyber-purple" />,
      label: "LinkedIn",
      value: "linkedin.com/in/dipayan-ghosh",
      color: "cyber-purple",
      href: "https://www.linkedin.com/in/dipayan-ghosh-a874a327a/"
    },
    {
      icon: <Github className="text-cyber-green" />,
      label: "GitHub",
      value: "github.com/dipayncodes",
      color: "cyber-green",
      href: "https://github.com/dipayancodes"
    },
    {
      icon: <Twitter className="text-blue-400" />,
      label: "Twitter",
      value: "@dxpayan",
      color: "blue-400",
      href: "https://x.com/dxpayan"
    }
  ];

  const aiInsights = [
    { icon: <Clock className="w-4 h-4" />, label: "Response Time", value: responseTime },
    { icon: <Globe className="w-4 h-4" />, label: "Availability", value: "24/7 Digital Presence" },
    { icon: <MapPin className="w-4 h-4" />, label: "Time Zone", value: `Local: ${currentTime}` }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to collaborate on your next project? Whether it's building cutting-edge applications, 
              developing trading strategies, or analyzing complex data, I'm here to help bring your vision to life.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <p className="text-gray-400 mb-8">
                  Ready to collaborate on your next project? Let's discuss how we can bring your vision to life.
                </p>
              </div>

              {/* AI Insights Panel */}
              <motion.div
                className="glassmorphic rounded-xl p-4 border border-white/10 mb-6"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="text-sm font-semibold text-cyber-blue mb-3 flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${isTyping ? 'bg-cyber-green animate-pulse' : 'bg-gray-500'}`} />
                  AI Assistant Status
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {aiInsights.map((insight, index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs text-gray-400">
                      {insight.icon}
                      <span>{insight.label}:</span>
                      <span className="text-white">{insight.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group cursor-pointer"
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <div className={`w-12 h-12 bg-${item.color}/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 quantum-glow`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-gray-400 text-sm">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              className="glassmorphic rounded-2xl p-8 border border-white/10"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
                {/* 
                Note: Your message will be sent directly to my email address.
                */}
                <div className="mb-4 text-xs text-gray-400 italic flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyber-blue" />
                Messages sent via this form are delivered directly to my email inbox.
                </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      {...register("name")}
                      className="glassmorphic border-white/20 focus:border-cyber-blue/50"
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      {...register("email")}
                      type="email"
                      className="glassmorphic border-white/20 focus:border-cyber-blue/50"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    {...register("subject")}
                    className="glassmorphic border-white/20 focus:border-cyber-blue/50"
                    placeholder="Project Discussion"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    {...register("message")}
                    rows={6}
                    className="glassmorphic border-white/20 focus:border-cyber-blue/50"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-blue py-4 rounded-xl font-semibold"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
