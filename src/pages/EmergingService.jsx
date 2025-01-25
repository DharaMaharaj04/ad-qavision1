import React from "react";
import banner from "../assets/images/banner.png";

const EmergingService = () => {
  return (
    <div className="">
    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${banner})` }}
    >
        <div className="absolute inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl font-bold sm:text-5xl text-center">
          Emerging Testing Services
          </h2>
        </div>
      </div>
    <section className="bg-white py-20 px-4 text-center">
      <h1 className="text-3xl md:text-5xl text-blue-600 font-extrabold">Revolutionizing Emerging Technology Testing Services in India</h1>
      <p className="mt-6 text-lg max-w-3xl mx-auto text-justify">
        Technology is moving fast, and so are the devices we use every day. With the surge of smart wearables, streaming platforms, 
        and connected TVs, ensuring flawless performance has become more important than ever. This is where QA Vision steps in!
      </p>
    </section>

    {/* Smart Wearable Testing Section */}
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Perfecting Smart Wearable App Testing: The QA Vision Advantage
        </h2>
        <p className="text-lg text-center mt-4 text-gray-600">
          Wearables are more than just gadgets—they're personal companions, whether it’s a fitness tracker or a smartwatch. Ensuring 
          a smooth user experience is crucial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Glitch Detection</h3>
            <p className="mt-2 text-gray-600">Our Smart Wearable App Testing in India is designed to catch every issue, from syncing problems to battery drain.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Real-Life Scenarios</h3>
            <p className="mt-2 text-gray-600">We test wearables in real-world conditions to ensure they work perfectly every time.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Daily Interaction Understanding</h3>
            <p className="mt-2 text-gray-600">We know how wearables interact with users daily, ensuring a seamless experience.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Android TV Testing Section */}
    <section className="py-16 bg-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Android TV Testing Made Seamless</h2>
        <p className="text-lg text-center mt-4 text-gray-600">
          Android TV has become a staple in today’s households, offering endless entertainment options. But with such vast possibilities, 
          things can easily go wrong.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Comprehensive User Interaction Testing</h3>
            <p className="mt-2 text-gray-600">We cover every aspect of user interaction, from navigating menus to streaming HD content.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Bug Detection</h3>
            <p className="mt-2 text-gray-600">We check for bugs that could disrupt the viewing experience.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Lag & Compatibility</h3>
            <p className="mt-2 text-gray-600">We focus on eliminating lag and ensuring compatibility across different devices.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Top-Notch Performance</h3>
            <p className="mt-2 text-gray-600">Our goal is to make sure your app delivers seamless performance every time.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Apple TV Testing Section */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Apple TV Testing: Excellence Meets Precision</h2>
        <p className="text-lg text-center mt-4 text-gray-600">
          Apple TV is known for its sleek interface and seamless experience, but rigorous testing is key to maintaining that reputation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Smooth Integration</h3>
            <p className="mt-2 text-gray-600">We test for flawless integration with the Apple TV ecosystem.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Quick Loading Times</h3>
            <p className="mt-2 text-gray-600">Ensuring your app loads swiftly and without delays.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Flawless Streaming</h3>
            <p className="mt-2 text-gray-600">We check for uninterrupted, high-quality streaming.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Video Streaming Testing Section */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600">Video Streaming Platform Testing: Keep Viewers Engaged</h2>
        <p className="text-lg text-center mt-4 text-gray-600">
          Buffering, poor video quality, and broken links can quickly turn viewers away. Our testing ensures a flawless viewing experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          <div className="p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold">Streaming Speed</h3>
            <p className="mt-2 text-gray-600">We ensure fast and smooth streaming without interruptions.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold">Video Quality</h3>
            <p className="mt-2 text-gray-600">We check for consistent high-quality video output.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold">User Interface</h3>
            <p className="mt-2 text-gray-600">We test the user interface for ease of navigation and responsiveness.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold">Heavy Traffic Handling</h3>
            <p className="mt-2 text-gray-600">Our testing ensures your platform can handle heavy traffic without issues.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 px-4 bg-[#4daaf6] text-white text-center">
      <h2 className="text-4xl font-bold">Optimize Your App Now</h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto">
        Our testing process ensures that nothing is left to chance, and your product is ready to shine. 
        We run comprehensive tests that cover every aspect of user experience.
      </p>
      <a href='/contact-us'>
      <button className="mt-8 px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-blue-600 hover:text-white">
        Get in Touch
      </button>
      </a>
    </section>
  </div>
  );
};

export default EmergingService;
