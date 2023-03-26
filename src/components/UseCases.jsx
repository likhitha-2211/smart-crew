import React from "react"
import code from "../assets/code2.png"

const UseCases = () => {
  return (
    <div name="usecases" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">UseCases</p>
          <p className="py-6 text-2xl">Connected Vehicle Data Use Cases</p>
          <br />
          <p>Get data and insights about events on the road and in the car</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">Safety & Emergency Solutions</span>
              <p className="text-center">Improve response times, reduce congestion, decrease property damage, and save lives with connected car data. Information like airbag triggering, hard braking, speed, and location give emergency responders a headstart and also identify problem areas to transportation planners.</p>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">Innovative Insurance</span>
              <p className="text-center">Use connected car data to increase profitability and create better policyholder experiences. Connected car data provides a deeper and much more accurate view into driving behavior and can be used for pay-as-you-drive (PAYD) and pay-how-you-drive (PHYD) usage-based insurance, driver behavior monitoring and feedback.</p>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">Safety & Emergency Solutions</span>
              <p className="text-center">Improve response times, reduce congestion, decrease property damage, and save lives with connected car data. Information like airbag triggering, hard braking, speed, and location give emergency responders a headstart and also identify problem areas to transportation planners.</p>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">Safety & Emergency Solutions</span>
              <p className="text-center">Improve response times, reduce congestion, decrease property damage, and save lives with connected car data. Information like airbag triggering, hard braking, speed, and location give emergency responders a headstart and also identify problem areas to transportation planners.</p>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">Innovative Insurance</span>
              <p className="text-center">Use connected car data to increase profitability and create better policyholder experiences. Connected car data provides a deeper and much more accurate view into driving behavior and can be used for pay-as-you-drive (PAYD) and pay-how-you-drive (PHYD) usage-based insurance, driver behavior monitoring and feedback.</p>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">Safety & Emergency Solutions</span>
              <p className="text-center">Improve response times, reduce congestion, decrease property damage, and save lives with connected car data. Information like airbag triggering, hard braking, speed, and location give emergency responders a headstart and also identify problem areas to transportation planners.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UseCases
