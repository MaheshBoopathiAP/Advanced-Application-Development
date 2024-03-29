import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [countStart, setCountStart] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCountStart(true);
        }
      });
    });
  }, []);

  useEffect(() => {
    const countComp = document.querySelector(".countComp");
    observer.current.observe(countComp);
  }, []);

  return (
    <>
      <div className="relative text-[#262e45bb]">
        <div className="flex items-center p-4 sm:p-10 w-[100%] flex-col-reverse sm:flex-row justify-around sm:sticky top-0 min-h-[90vh] bg-slate-400 text-white ">
          <div className="sm:w-[50%] flex items-center">
            <img
              className="w-full max-h-[80%] animate-updown shadow-2xl rounded-lg overflow-hidden"
              src={
                "https://images.pexels.com/photos/5365499/pexels-photo-5365499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              loading="lazy"
              alt=""
            />
          </div>
          <div className="sm:w-[40%] flex flex-col  justify-center gap-5">
            <h1 className=" text-3xl sm:text-4xl font-semibold text-center sm:text-left">
              About Company
            </h1>
            <p className="text-justify sm:text-left">
              Royal Caribbean is the leading organization in boathouse booking. After starting its operation since 1988, the
              firm has achieved many accomplishments and has established wide
              spread dealer network. The firm is supplying high quality
              stay booking to Public like:
              <br />
              1. Foreigners
              <br />
              2. Native Tourists
              <br />
              3. MPSEB
              <br />
              4. State Transports
            </p>
            {/* <Link
              href="/about"
              className="bg-gradient-to-tr from-red-500 to-[#ff0e2c] text-[#ffffff] font-semibold text-lg px-4 py-2 rounded-full mx-auto sm:ml-0 "
            >
              Learn More
            </Link> */}
          </div>
        </div>
        <div className=" p-4 sm:p-10 w-[100%]  text-[#ffffff] sm:sticky top-0 bg-sky-500 min-h-[95vh] flex flex-col justify-center">
          <div className="items-center flex-col sm:flex-row flex w-full justify-around">
            <div className="sm:w-[40%] flex flex-col justify-center gap-5">
              <h1 className="text-4xl font-semibold text-center sm:text-left">
                Our Mission
              </h1>
              <p className="text-justify sm:text-start">
                Since our inception in 1988, Royal Caribbean has been at the
                forefront of revolutionizing the battery industry. With a rich
                history of accomplishments, we've become the go-to manufacturer
                of Automotive and Inverter Batteries, trusted by countless
                customers.
              </p>
              {/* <Link
                href="/about"
                className="text-[#ff0e2c] bg-white font-semibold text-lg px-4 py-2  rounded-full mx-auto sm:ml-0 "
              >
                Learn More
              </Link> */}
            </div>
            <div className="sm:w-[50%] flex items-center ">
              <img
                className="w-full max-h-[80%] animate-updown shadow-2xl rounded-lg overflow-hidden"
                src={
                  "https://images.pexels.com/photos/19800556/pexels-photo-19800556/free-photo-of-boat-ride.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                loading="lazy"
                alt=""
              />
            </div>
          </div>
          <div className=" bg-sky-500 flex justify-center text-center  gap-[10%] p-5 text-[#ffffff] font-semibold text-xl countComp">
            <div>
              <h1 className="text-xl md:text-3xl">
                {countStart ? (
                  <>
                    <CountUp start={0} end={1500} duration={5} delay={0} />+
                  </>
                ) : (
                  ""
                )}
              </h1>
              <p className="text-sm sm:text-xl">Satisfied Customer</p>
            </div>
            <div>
              <h1 className="text-xl md:text-3xl">
                {countStart ? (
                  <>
                    <CountUp start={0} end={35} duration={5} delay={0} />+
                  </>
                ) : (
                  ""
                )}
              </h1>
              <p className="text-sm sm:text-xl">Esteem Clients</p>
            </div>
            <div>
              <h1 className="text-xl md:text-3xl">
                {countStart ? (
                  <>
                    <CountUp start={0} end={1000} duration={5} delay={0} />+
                  </>
                ) : (
                  ""
                )}
              </h1>
              <p className="text-sm sm:text-xl">Bookings</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row p-4 sm:p-10 w-[100%] justify-around sm:sticky top-0 bg-white text-black min-h-[90vh] ">
          <div className="sm:w-[50%] flex items-center ">
            <img
              className="w-full max-h-[80%] animate-updown shadow-2xl rounded-lg overflow-hidden"
              src={
                "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
            />
          </div>
          <div className="sm:w-[40%] flex flex-col justify-center gap-5">
            <h1 className="text-3xl sm:text-4xl font-semibold text-center sm:text-left">
              Our Vision
            </h1>
            <p className="text-justify sm:text-start">
              Our journey is fueled by a clear vision: to provide power
              solutions that empower progress and elevate lives.
              <br />
              We uphold values of innovation, quality, and integrity, ensuring
              that every battery that bears our name is a testament to our
              commitment.
              <br />
              <br />
              Join us in our journey to power the future. Choose
              Royal Caribbean for excellence in every charge.
            </p>
            {/* <Link
              href="/about"
              className="bg-gradient-to-tr from-red-500 to-[#ff0e2c] text-[#ffffff] font-semibold text-lg px-4 py-2 rounded-full mx-auto sm:ml-0"
            >
              Learn More
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
