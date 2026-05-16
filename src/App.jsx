import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { useState } from "react";

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  const location = useLocation();

  const item = (to, label) => (
    <Link
      to={to}
      className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
        location.pathname === to
          ? "bg-blue-500 text-white shadow-lg"
          : "text-slate-800 hover:bg-blue-100 hover:text-blue-600"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        <h1 className="text-blue-500 font-extrabold text-3xl tracking-wide animate-pulse">
          DAWNET
        </h1>

        <div className="flex gap-4">
          {item("/", "Home")}
          {item("/services", "Services")}
          {item("/about", "About")}
          {item("/ai", "AI")}
          {item("/contact", "Contact")}
        </div>
      </div>
    </nav>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            DAWNET
          </h2>

          <p className="text-slate-300 leading-7">
            Building innovative digital experiences through modern
            websites, scalable applications and creative UI/UX solutions.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-slate-300">
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>

            <Link to="/services" className="hover:text-blue-400 transition">
              Services
            </Link>

            <Link to="/about" className="hover:text-blue-400 transition">
              About
            </Link>

            <Link to="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Contact
          </h3>

          <p className="text-slate-300 mb-2">
            Email: info@dawnetinnovations.com
          </p>

          <p className="text-slate-300 mb-2">
            Phone: +91 7012 756 426
          </p>

          <p className="text-slate-300">
           location: Dawnet Innovations, 1st floor Structa Office Building,
Kovoor Rd, Poolakkadavu Rd, Vellimadukunnu,
Kozhikode, Kerala 673012
          </p>
        </div>
      </div>

      <div className="border-t border-slate-700 mt-10 pt-5 text-center text-slate-400 text-sm">
        © Dawnet Innovations 2024. All Rights Reserved. Website by Dawnet Innovations
Privacy Policy |Terms of Service
      </div>
    </footer>
  );
}

/* ---------------- HOME ---------------- */
function Home() {
  return (
    <div className="pt-24 min-h-screen bg-[#F8F9FA] text-[#1A202C] overflow-hidden relative">

      {/* Decorative Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-30 animate-bounce"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center min-h-[85vh] px-8 gap-10 relative z-10">

        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">
            Dawnet <span className="text-blue-500">Innovations</span>
          </h1>

          <p className="text-xl text-slate-600 leading-9 max-w-2xl">
            Innovative digital solutions for modern businesses.
            We create websites, scalable applications and
            seamless user experiences that help brands grow.
          </p>

          <Link
            to="/services"
            className="inline-block mt-10 bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-2xl font-semibold shadow-xl transition-all duration-300 hover:scale-105"
          >
            Explore Services
          </Link>
        </div>

        <div className="flex justify-center relative animate-float">
          <div className="absolute w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
            alt="tech cartoon"
            className="w-[520px] relative z-10 hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </div>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    {
      title: "Design & Develop Custom Websites",
      text:
        "We build websites that are visually stunning and performance-driven with responsive modern layouts.",
      img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
    },
    {
      title: "Create E-commerce Experiences",
      text:
        "We create scalable online stores with secure payment integrations and smooth customer experiences.",
      img: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
    },
    {
      title: "Develop Scalable Web Applications",
      text:
        "We transform business processes into modern and intuitive web applications built for growth.",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721291.png"
    },
    {
      title: "Provide Ongoing Support & Maintenance",
      text:
        "We ensure websites remain secure, fast and optimized with continuous maintenance.",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png"
    },
    {
      title: "Enhance User Experiences",
      text:
        "Our UI/UX experts design intuitive and engaging experiences that users love.",
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
    }
  ];

  return (
    <div className="pt-28 min-h-screen bg-[#F8F9FA] text-[#1A202C] px-8 md:px-16 pb-20">

      <h1 className="text-5xl font-extrabold text-center text-blue-500 mb-20 animate-pulse">
        Our Services
      </h1>

      <div className="space-y-24">
        {services.map((s, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={s.img}
                alt={s.title}
                className="w-80 h-80 object-contain bg-white p-8 rounded-3xl shadow-2xl hover:scale-110 transition duration-500"
              />
            </div>

            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-blue-500 mb-5">
                {s.title}
              </h2>

              <p className="text-slate-600 text-lg leading-9">
                {s.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <div className="pt-28 min-h-screen bg-[#F8F9FA] text-[#1A202C] px-8 md:px-16 pb-20 space-y-28">

      {/* ABOUT */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png"
            className="w-80 hover:rotate-6 transition duration-500"
            alt="about"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-blue-500 mb-5">
            What we're about
          </h2>

          <p className="text-slate-600 text-lg leading-9">
            Empowering businesses through innovative,
            impactful digital solutions.
          </p>
        </div>
      </div>

      {/* VISION */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055683.png"
            className="w-80 hover:scale-110 transition duration-500"
            alt="vision"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-blue-500 mb-5">
            Our Vision
          </h2>

          <p className="text-slate-600 text-lg leading-9">
            We aim to empower businesses through transformative
            digital experiences by combining creativity and
            cutting-edge technology.
          </p>
        </div>
      </div>

      {/* MISSION */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
            className="w-80 hover:-translate-y-4 transition duration-500"
            alt="mission"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-blue-500 mb-5">
            Our Mission
          </h2>

          <p className="text-slate-600 text-lg leading-9">
            To build dynamic, user-centered and scalable
            digital solutions that help businesses grow.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- AI ---------------- */
function AI() {
  const [msg, setMsg] = useState([
    { role: "bot", text: "Hi 👋 I am DAWNET AI" }
  ]);

  const [input, setInput] = useState("");

  const send = () => {
    if (!input) return;

    let reply = "Contact Dawnet for more information.";

    if (input.toLowerCase().includes("service")) {
      reply =
        "We provide Web Development, E-commerce, Web Apps and UI/UX services.";
    }

    setMsg([
      ...msg,
      { role: "user", text: input },
      { role: "bot", text: reply }
    ]);

    setInput("");
  };

  return (
    <div className="pt-28 min-h-screen bg-[#F8F9FA] flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-3xl shadow-2xl border border-slate-200 animate-fade-in-up">

        <div className="flex items-center gap-3 mb-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
            className="w-12 animate-spin-slow"
            alt="ai"
          />

          <h2 className="text-blue-500 text-2xl font-bold">
            DAWNET AI
          </h2>
        </div>

        <div className="h-80 overflow-y-auto space-y-3 mb-4">
          {msg.map((m, i) => (
            <div
              key={i}
              className={`p-3 rounded-2xl ${
                m.role === "bot"
                  ? "bg-slate-100 text-slate-700"
                  : "bg-blue-500 text-white ml-auto"
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            className="flex-1 p-3 rounded-xl border border-slate-300 outline-none"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={send}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 rounded-xl font-semibold transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <div className="pt-28 min-h-screen bg-[#F8F9FA] flex justify-center items-center px-4">

      <div className="w-full max-w-lg bg-white p-8 rounded-3xl shadow-2xl border border-slate-200 hover:shadow-blue-200 transition duration-500">

        <div className="flex justify-center mb-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7269/7269995.png"
            className="w-24 animate-bounce"
            alt="contact"
          />
        </div>

        <h2 className="text-blue-500 text-4xl font-bold text-center mb-6">
          Contact Dawnet
        </h2>

        <input
          className="w-full p-4 mb-4 border border-slate-300 rounded-xl outline-none focus:border-blue-500"
          placeholder="Name"
        />

        <input
          className="w-full p-4 mb-4 border border-slate-300 rounded-xl outline-none focus:border-blue-500"
          placeholder="Email"
        />

        <textarea
          className="w-full p-4 mb-4 border border-slate-300 rounded-xl outline-none focus:border-blue-500"
          rows="5"
          placeholder="Message"
        />

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl font-semibold transition hover:scale-105">
          Send Message
        </button>
      </div>
    </div>
  );
}

/* ---------------- APP ---------------- */
export default function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
