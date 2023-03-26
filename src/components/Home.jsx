import React from "react"
import wheelyLogo from "./../assets/wheelyLogo.png"
import "./styles.css"
import driveScore from "../assets/drivescore.jpeg"
import loyaltyProgram from "../assets/loyaltyprogram.png"
import coupons from "../assets/coupons.png"
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#fff]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full wrapper-section" style={{ marginTop: "200px" }}>
          <div className="home-tile">
            <h3 className="text-4xl sm:text-5xl justify-center font-bold text-black">Hello Buddy!</h3>
            <p className="text-black py-3 justify-center max-w-md">I am your Buddy-on-the-go.</p>
            <p className="text-black py-3 justify-center max-w-md">Join hands with me on a never ending journey!</p>
          </div>
          <div className="logo-section">
            <img className="wheelyLogo" src={wheelyLogo} alt="Logo" />
          </div>
          {/* <p className="text-gray-500 py-4 max-w-md">Lorem ipsum is an enterprise-grade SaaS loyalty technology provider that builds comprehensive loyalty programs to foster brand love and change customer behavior</p> */}
          <div className="text-white main-content-section">
            <div className="content-one">
              <div>
                <h3>Get Your Score</h3>
                <p>Wheely will show your score and show you what’s positive and what to work on. </p>
              </div>
              <div>
                <img src={driveScore} alt="driver score" />
              </div>
            </div>
            <div className="content-two">
              <div>
                <img src={loyaltyProgram} alt="loyalty Program " />
              </div>
              <div>
                <h3>Save Your Money</h3>
                <p>Use your Score to buy customized car insurance and car accessories. Buy based on how you drive.</p>
              </div>
            </div>
            <div className="content-three">
              <div>
                <h3>Check Your Health</h3>
                <p>Pair your smartwatch and receive SOS voice assisted health alerts.</p>
              </div>
              <div>
                <img src={coupons} alt="Smart Watch" style={{ maxHeight: "125px" }} />
              </div>
            </div>
            {/* <Link to="about" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link> */}
          </div>
        </div>
        <div>{/* <img src={me} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" /> */}</div>
      </div>
    </div>
  )
}
export default Home
