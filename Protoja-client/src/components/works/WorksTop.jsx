"use client";

import SpinHome from "../home/SpinHome";

const WorksTop = () => {
  return (
    <>
      <div className="relative h-screen bg-gray-900 top-0">
        <video
          src="/assets/heroVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="absolute inset-0"
        ></video>

        <div className="relative z-10 h-full text-white  md:ms-32 transition-transform ">
          <div className="flex items-center h-full w-full">
            <div className="flex justify-between w-[80%]">
              <h6 className="text-[48px] md:text-[70px] text-[#161616] font-bold w-[40%]">
                We craft interactive experiences
              </h6>
              <div className="mt-[120px]">
                <SpinHome />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksTop;
