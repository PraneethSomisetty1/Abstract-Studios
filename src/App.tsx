import { ArrowRight, Code, Bot, Layers, MessageSquare, CheckCircle, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function App() {
  const [state, handleSubmit] = useForm("mwvpgvpz");

  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Solutions & Agents",
      description: "Custom AI assistants and intelligent agents tailored for your business needs and workflows."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Modern web applications with AI integrations, smart interfaces, and seamless user experiences."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Rapid Prototyping",
      description: "Quick iterations from concept to interactive prototypes to validate ideas fast."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Consulting",
      description: "Strategic guidance on AI adoption, technical architecture, and digital transformation."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your goals, audience, and technical requirements."
    },
    {
      step: "02",
      title: "Planning",
      description: "Defining scope, timeline, and deliverables with clear milestones."
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Iterative creation with regular check-ins and feedback loops."
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "Launch, handoff, and ongoing support to ensure success."
    }
  ];

  const projects = [
    {
      title: "Enterprise SaaS Platform",
      category: "Full-Stack Development",
      description: "Multi-tenant dashboard with real-time data visualization and role-based access control.",
      image: "/example1.jpg",
      tags: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "AI-Enhanced E-commerce Platform",
      category: "AI-Powered Full-Stack Application",
      description: "E-commerce platform integrating intelligent recommendations, automated workflows, and a streamlined checkout experience—designed for performance, scalability, and conversion.",
      image: "/Example2.webp",
      tags: ["React", "AI Integrations", "Payments"]
    },
    {
      title: "AI-Powered Customer Support Agent",
      category: "AI Solutions",
      description: "Custom AI support agent designed to handle customer inquiries using natural language understanding and automated workflows, seamlessly escalating to human support when needed.",
      image: "/example3.png",
      tags: ["OpenAI", "LangChain", "Next.js"]
    }
  ];

  const differentiators = [
    {
      title: "AI-Native Thinking",
      description: "We understand how to leverage AI effectively—building solutions that are practical, not just trendy."
    },
    {
      title: "Engineering Excellence",
      description: "Clean, maintainable code with thorough documentation, testing, and scalable architecture."
    },
    {
      title: "Direct Collaboration",
      description: "Work directly with experienced developers."
    },
    {
      title: "Transparent Process",
      description: "Clear communication, realistic timelines, and no surprise charges."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-semibold">Abstract Studios</div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition">Services</a>
            <a href="#process" className="text-gray-600 hover:text-gray-900 transition">Process</a>
            <a href="#work" className="text-gray-600 hover:text-gray-900 transition">Work</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
          </nav>
          <a 
            href="#contact"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Let's Talk
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl mb-6">
                Building Digital Products That Matter
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We design and build intelligent digital products, combining full-stack development with custom AI solutions. 
                From smart websites to bespoke AI agents and assistants, we help businesses integrate automation and intelligence into real, production-ready systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact"
                  className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-2 group"
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </a>
                <a 
                  href="#work"
                  className="border border-gray-300 px-8 py-4 rounded-full hover:border-gray-900 transition text-center"
                >
                  View Our Work
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NzY2MzAyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern workspace"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive services to take your product from idea to market
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition"
              >
                <div className="text-black mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured, predictable process that keeps you informed every step of the way
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-gray-100 mb-4">{step.step}</div>
                <h3 className="text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Project Samples</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              NDA-safe examples showcasing our technical capability and design quality
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Abstract Studios Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Why Abstract Studios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What sets us apart from other agencies and freelancers
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.map((item, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Let's Build Something Together</h2>
            <p className="text-xl text-gray-600">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>
          
          {state.succeeded ? (
            <div className="bg-white p-12 rounded-xl text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl mb-2">Thank you for reaching out!</h3>
              <p className="text-gray-600">We'll be in touch soon to discuss your project.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-xl shadow-sm">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">Name *</label>
                  <input 
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Your name"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">Email *</label>
                  <input 
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="you@company.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="company" className="block text-sm mb-2">Company</label>
                <input 
                  id="company"
                  type="text"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your company (optional)"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm mb-2">What are you looking for? *</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  placeholder="Tell us about your project, timeline, and budget..."
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button 
                type="submit"
                disabled={state.submitting}
                className="w-full bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Inquiry'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="text-2xl font-semibold mb-4">Abstract Studios</div>
              <p className="text-gray-400">
                Crafting exceptional digital experiences through engineering and design.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Praneeth.1002@gmail.com
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/abstract-studioss/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Abstract Studios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
