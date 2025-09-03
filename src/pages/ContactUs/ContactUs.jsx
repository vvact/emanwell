import { Link } from "react-router-dom";
// If you installed react-helmet-async, you can uncomment these 2 lines:
import { Helmet } from "react-helmet-async";

export default function ContactUs() {
  // Simple client-side submit (replace with your API call later)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    console.log("Contact form data:", data);

    // TODO: POST to your backend endpoint, e.g.:
    // await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });

    alert("Thanks! Your message has been sent. We’ll get back to you soon.");
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-brand-navy text-white">
      {Helmet && (
        <Helmet>
          <title>Contact Us | Manwell</title>
          <meta
            name="description"
            content="Visit Manwell in Eastleigh, Nairobi or contact us online. Phone, email, hours, and map to our physical shop."
          />
        </Helmet>
      )}

      {/* Hero */}
      <section className="px-6 py-16 text-center bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.6))]">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-gold">Contact Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-200">
          We’d love to hear from you. Visit our Eastleigh shop, call us, or send a message using the form below.
        </p>
      </section>

      {/* Info + Form */}
      <section className="px-6 py-14 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-[#0b2448] rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold text-brand-gold">Get in touch</h2>
            <ul className="mt-4 space-y-3 text-gray-200">
              <li>
                <span className="font-semibold text-white">Phone:</span>{" "}
                <a href="tel:+254700000000" className="underline underline-offset-4 hover:text-brand-gold">
                  +254 700 000 000
                </a>
              </li>
              <li>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a href="mailto:support@manwell.co.ke" className="underline underline-offset-4 hover:text-brand-gold">
                  support@manwell.co.ke
                </a>
              </li>
              <li>
                <span className="font-semibold text-white">Address:</span>{" "}
                Eastleigh, Nairobi, Kenya (00100)
              </li>
              <li>
                <span className="font-semibold text-white">Hours:</span>{" "}
                Mon–Sun · 08:00 – 21:00
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-6">
              <p className="font-semibold text-white">Follow us</p>
              <div className="mt-2 flex gap-4">
                <a href="https://www.facebook.com/manwell" target="_blank" rel="noreferrer" className="hover:text-brand-gold">
                  Facebook
                </a>
                <a href="https://www.instagram.com/manwell" target="_blank" rel="noreferrer" className="hover:text-brand-gold">
                  Instagram
                </a>
                <a href="https://twitter.com/manwell" target="_blank" rel="noreferrer" className="hover:text-brand-gold">
                  X / Twitter
                </a>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="mt-6">
              <a
                href="mailto:support@manwell.co.ke?subject=Inquiry%20from%20Manwell%20Website"
                className="inline-block bg-brand-gold text-brand-navy font-semibold px-5 py-3 rounded-xl hover:opacity-90 transition"
              >
                Email Us Directly
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-[#0b2448] rounded-2xl p-2 shadow">
            <div className="h-80 w-full overflow-hidden rounded-xl">
              {/* Replace the q= parameter with your exact shop coordinates/name if you have them */}
              <iframe
                title="Manwell Shop - Eastleigh, Nairobi"
                src="https://www.google.com/maps?q=Eastleigh%2C%20Nairobi&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="p-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Eastleigh%2C%20Nairobi"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 text-brand-gold hover:opacity-90"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#0b2448] rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold text-brand-gold">Send us a message</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="block text-sm text-gray-200 mb-2">Full Name</label>
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl bg-[#0f2c59] text-white placeholder-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-gold"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-200 mb-2">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl bg-[#0f2c59] text-white placeholder-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-gold"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-200 mb-2">Subject</label>
              <input
                name="subject"
                type="text"
                placeholder="What’s this about?"
                className="w-full rounded-xl bg-[#0f2c59] text-white placeholder-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-gold"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-200 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="How can we help?"
                className="w-full rounded-xl bg-[#0f2c59] text-white placeholder-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-gold resize-y"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-gold text-brand-navy font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition"
            >
              Send Message
            </button>

            {/* Optional WhatsApp quick link */}
            <div className="text-center">
              <a
                className="inline-block mt-3 text-sm text-gray-200 underline underline-offset-4 hover:text-brand-gold"
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noreferrer"
              >
                Or chat with us on WhatsApp
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* Back home */}
      <div className="px-6 pb-16 max-w-6xl mx-auto text-center">
        <Link
          to="/"
          className="inline-block bg-white text-brand-navy font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
