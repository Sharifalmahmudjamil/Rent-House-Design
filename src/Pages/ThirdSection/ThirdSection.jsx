const ThirdSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <img
          className="lg:w-[850px] lg:h-[350px]   lg:mx-24 mt-12 relative"
          src="../../../Image/design.jpg"
        />
        <div className="border lg:w-[550px] h-[280px] w-80 bg-[#ECF5FF] absolute lg:mx-[750px]  lg:-mt-36 -mt-16 p-8">
          <div className="flex">
            <span className="w-[50px]  hidden md:block h-[4px] bg-[#E61] rounded-full mb-4  mt-8  ">
              {" "}
            </span>
            <h1 className="text-[18px] font-semibold text-[#E61] mx-2 mt-5">
              Our Story
            </h1>
          </div>
          <div>
            <h1 className="lg:text-4xl font-bold text-[#1F2937] mt-5">
              Efficient and Transparent Home Buying Solutions
            </h1>
            <p className="text-base text-[#6B7280] font-medium mt-5">
              In the symphony of bustling markets and serene landscapes,
              Heritage-Nest was born—a vision to
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
