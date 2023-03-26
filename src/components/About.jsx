import React from "react"

const About = () => {
  return (
    <div name="about" id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-left pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">About Us</p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full px-4">
            <div>
              <p> We aspire to create a mobility ecosystem that uses data to make every driving experience truly rewarding. Our vision is to enable a world of environmentally-friendly cities that run more efficiently.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
