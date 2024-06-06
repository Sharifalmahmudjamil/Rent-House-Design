const FourthSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <img
          className="lg:w-[650px] lg:h-[400px] lg:mx-[500px] lg:mt-44 mt-60 relative"
          src="../../../Image/design-2.jpg"
        />
        <div className="border lg:w-[550px] lg:h-[280px] w-80  bg-[#FDF0E7] absolute lg:mx-20 lg:-mt-36 -mt-24 p-8">
          <div className="flex">
            <span className="w-[50px]  hidden md:block h-[4px] bg-[#E61] rounded-full mb-4  mt-8  ">
              {" "}
            </span>
            <h1 className="text-[18px] font-semibold text-[#E61] mx-2 mt-5">
              Mission Statement
            </h1>
          </div>
          <div>
            <h1 className="lg:text-4xl font-bold text-[#1F2937] mt-5">
              Efficient and Transparent Home Buying Solutions
            </h1>
            <p className="text-base text-[#6B7280] font-medium mt-5">
              To bridge the miles with smiles, Heritage-Nest pledges to be the
              golden thread connecting NRIs to their homeland, through trust,
              transparency, and tailored real estate solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
