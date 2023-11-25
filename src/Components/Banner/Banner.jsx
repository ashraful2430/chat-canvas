import Container from "../../Shared/Container/Container";

const Banner = () => {
  return (
    <>
      <Container>
        <div
          className="hero h-[80vh]"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/H783kQ3/25968261-frontend-online-2.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-5xl font-bold">Join the Conversation</h1>
              <p className="mb-5">
                Discover a vibrant community where ideas flourish and
                discussions thrive. Engage with like-minded individuals, share
                your insights, and explore a world of diverse conversations.
                Welcome to a forum where your voice matters. Join us and let the
                dialogue begin!
              </p>
              <div className="flex w-full justify-center items-end">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                  <label
                    htmlFor="hero-field"
                    className="leading-7 text-sm text-white"
                  >
                    Search via tags
                  </label>
                  <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
