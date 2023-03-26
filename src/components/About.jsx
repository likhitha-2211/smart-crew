import React from "react"

const About = () => {
  return (
    <div name="about" id="about" className="w-full h-screen bg-[#fff] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md text-black flex flex-col justify-center items-center w-4/6" style={{ background: "#d5c6ff" }}>
          <div className="max-w-[1000px] w-full mb-4">
            <div className="sm:text-left pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4" style={{ borderColor: "#fff" }}>
                About Us
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full px-4">
            <div className="about-tile">
              <p> We aspire to create a mobility ecosystem that uses data to make every driving experience truly rewarding. Our vision is to enable a world of environmentally-friendly cities that run more efficiently.</p>
              <p>To conceive, develop and manufacture irrigation products which are benchmarked against the best in the industry, at prices that are universally affordable across geographies -. with a team of self-motivated and empowered professionals.</p>
              <p>To be an organisation that empowers and enriches lives of farmers with world-class, cost-effective irrigation products and solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
