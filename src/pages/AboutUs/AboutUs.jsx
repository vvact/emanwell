// src/pages/AboutUs.jsx
export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0a192f] to-[#1c2a48] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Learn more about our story, mission, and the values that drive us forward.
        </p>
      </section>

      {/* Company Story */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-[#0a192f] mb-6">Our Story</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Founded with a vision to bring innovation and quality, our company has been
          dedicated to creating solutions that matter. We started small, but with
          passion and resilience, we’ve grown into a trusted name in the industry.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Today, we continue to push boundaries, explore new opportunities, and remain
          committed to delivering excellence for our customers and community.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-6 border-l-4 border-yellow-500 bg-white shadow rounded-lg">
            <h3 className="text-2xl font-semibold text-[#0a192f] mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To empower individuals and businesses with innovative solutions that make
              everyday life simpler, smarter, and better.
            </p>
          </div>
          <div className="p-6 border-l-4 border-yellow-500 bg-white shadow rounded-lg">
            <h3 className="text-2xl font-semibold text-[#0a192f] mb-2">Our Vision</h3>
            <p className="text-gray-700">
              To be a global leader recognized for creativity, customer-first
              excellence, and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#0a192f] mb-10">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Integrity", desc: "We uphold honesty and transparency in everything we do." },
            { title: "Innovation", desc: "We embrace creativity and technology to solve real problems." },
            { title: "Excellence", desc: "We strive for the highest quality in our products and services." },
            { title: "Collaboration", desc: "We believe teamwork brings out the best solutions." },
            { title: "Customer Focus", desc: "We put our customers at the heart of every decision." },
            { title: "Sustainability", desc: "We are committed to building a better future responsibly." },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#0a192f] mb-2">
                {value.title}
              </h3>
              <p className="text-gray-700">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0a192f] mb-6">Meet Our Team</h2>
          <p className="text-gray-700 mb-8">
            Behind every success is a passionate and dedicated team. Stay tuned as we
            introduce our amazing people here.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded-lg">👤 Team Member 1</div>
            <div className="p-6 bg-white shadow rounded-lg">👤 Team Member 2</div>
            <div className="p-6 bg-white shadow rounded-lg">👤 Team Member 3</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0a192f] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Work With Us?</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-6">
          Whether you’re looking for a partnership, collaboration, or simply want to
          learn more, we’d love to hear from you.
        </p>
        <a
          href="/contact"
          className="bg-yellow-500 text-[#0a192f] font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
