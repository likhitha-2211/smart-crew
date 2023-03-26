import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import me from "../assets/me.png"
import { Link } from "react-scroll"
import "./styles.css"

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#0a192f]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full wrapper-section">
          <h2 className="text-4xl sm:text-7xl justify-center font-bold text-white">Hello Buddy!</h2>
          <p className="text-white py-4 justify-center max-w-md">I am your Buddy-on-the-go.</p>
          <p className="text-white py-4 justify-center max-w-md">Join hands with me on a never ending journey!</p>
          {/* <p className="text-gray-500 py-4 max-w-md">Lorem ipsum is an enterprise-grade SaaS loyalty technology provider that builds comprehensive loyalty programs to foster brand love and change customer behavior</p> */}
          <div className="text-white main-content-section">
            <div className="content-one">
              <h3>Get Your Score</h3>
              <p>Wheely will show your score and show you what’s positive and what to work on. </p>
            </div>
            <div className="content-two">
              <h3>Save Your Money</h3>
              <p>Use your Score to buy customized car insurance and car accessories. Buy based on how you drive.</p>
            </div>
            <div className="content-three">
              <h3>Check Your Health</h3>
              <p> Pair your smartwatch and receive SOS voice assisted health alerts.</p>
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