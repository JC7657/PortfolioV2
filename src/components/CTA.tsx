import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-xl mb-8">
          I'm actively seeking challenging roles where I can apply my skills and grow. Let's discuss how I can contribute to your team.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
            Get In Touch
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-lg">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;