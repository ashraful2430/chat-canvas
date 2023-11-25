import Container from "../../Shared/Container/Container";
import Marquee from "react-fast-marquee";

const AllTags = () => {
  return (
    <>
      <Container>
        <div className="mt-10">
          <h3 className="md:text-3xl font-medium text-center">
            Explore Topics with Our Tag Library
          </h3>
          <Marquee pauseOnHover={true} speed={150}>
            <div className="flex justify-center items-center gap-10 my-7">
              {/* techTalk */}
              <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                <div className="rounded-[10px] bg-white p-4  sm:p-6">
                  <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      #TechTalk
                    </h3>
                  </a>
                </div>
              </article>

              {/* ArtistryHub */}
              <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                <div className="rounded-[10px] bg-white p-4  sm:p-6">
                  <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      #ArtistryHub
                    </h3>
                  </a>
                </div>
              </article>

              {/* HealthyLiving */}
              <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                <div className="rounded-[10px] bg-white p-4  sm:p-6">
                  <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      #HealthyLiving
                    </h3>
                  </a>
                </div>
              </article>

              {/* TravelJunkie */}
              <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                <div className="rounded-[10px] bg-white p-4  sm:p-6">
                  <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      #TravelJunkie
                    </h3>
                  </a>
                </div>
              </article>

              {/* EcoEnthusiasts */}
              <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                <div className="rounded-[10px] bg-white p-4  sm:p-6">
                  <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      #EcoEnthusiasts
                    </h3>
                  </a>
                </div>
              </article>
            </div>
          </Marquee>
        </div>
      </Container>
    </>
  );
};

export default AllTags;
