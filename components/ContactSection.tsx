import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: false });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus({ loading: false, error: "", success: true });
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setStatus({
        loading: false,
        error: error instanceof Error ? error.message : "Something went wrong",
        success: false,
      });
    }
  };

  return (
    <section className="py-16 bg-gray-800 px-4">
      <div className="container mx-auto max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Contact for Work
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700/50 rounded-lg border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700/50 rounded-lg border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700/50 rounded-lg border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300 h-32"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          {status.error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-200 text-sm"
            >
              {status.error}
            </motion.div>
          )}

          {status.success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-200 text-sm"
            >
              Message sent successfully!
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={status.loading}
            whileHover={{ scale: status.loading ? 1 : 1.02 }}
            whileTap={{ scale: status.loading ? 1 : 0.98 }}
            className={`w-full p-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-lg font-bold transition-all duration-300 shadow-lg ${
              status.loading ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {status.loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
