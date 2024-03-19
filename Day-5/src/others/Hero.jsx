import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Boat1 from "../assets/images/boat-1f.jpg"; 


const Hero = () => {
  

  return (
    <>
      <div className="ecomm-hero flex flex-col items-center justify-center md:px-[3%] lg:px-[8%]">
        <div className="relative rounded-3xl overflow-hidden md:my-[30px]">
          <div className="hidden md:flex">
            <Carousel
              autoPlay={true}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              interval={1500}
            >
              <div className="rounded-3xl">
                <img
                  className="h-[550px] rounded-3xl"
                  src={
                    Boat1
                  }
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="rounded-3xl">
                <img
                  className="h-[550px] rounded-3xl"
                  src={
                    "https://wallpaperbat.com/img/627302-boat-house-wallpaper.jpg"
                  }
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="rounded-3xl">
                <img
                  className="h-[550px] rounded-3xl"
                  src={
                    "http://northkeralatourpackages.com/wp-content/uploads/2018/02/kerala-houseboat-tour-packages.jpg"
                  }
                  loading="lazy"
                  alt=""
                />
              </div>
            </Carousel>
          </div>

          
        </div>
        <div className="sm:hidden flex md:px-[6%] py-[5%]">
          <Carousel
            autoPlay={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            interval={4000}
          >
            <div className="">
              <img
                className="h-[250px]"
                src={
                  "https://res.cloudinary.com/ddeihu3nx/image/upload/v1701420941/Hi-Power/assets/whspxhqnropx0ouaotnu.png"
                }
                loading="lazy"
                alt=""
              />
            </div>
            <div className="rounded-3xl">
              <img
                className="h-[250px]"
                src={
                  "https://res.cloudinary.com/ddeihu3nx/image/upload/v1701420940/Hi-Power/assets/oufik6h2mdk7nj1lbssm.png"
                }
                loading="lazy"
                alt=""
              />
            </div>
            <div className="rounded-3xl">
              <img
                className="h-[250px]"
                src={
                  "https://res.cloudinary.com/ddeihu3nx/image/upload/v1701420941/Hi-Power/assets/rm1picenosvoxieohctz.png"
                }
                loading="lazy"
                alt=""
              />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Hero;
