const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">

      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
        Find Your
        <span className="text-blue-600"> Dream College </span>
        with AI
      </h1>

      <p className="mt-4 text-blue-600 font-medium text-lg">
        Trusted by thousands of students across India
      </p>

      <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
        Get personalized college recommendations based on your
        entrance exam rank, budget, preferred branch, state,
        and career goals.
      </p>

      <div className="mt-10 flex justify-center gap-4">

        <button className="bg-blue-600 text-white px-10 py-4 text-lg rounded-xl hover:bg-blue-700 transition">
          Get Started
        </button>

        <button className="border border-blue-600 text-blue-600 px-10 py-4 text-lg rounded-xl hover:bg-blue-50 transition">
          Explore Colleges
        </button>

      </div>

    </section>
  );
};

export default Hero;