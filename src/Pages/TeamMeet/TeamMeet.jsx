const TeamMeet = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mt-10 flex">
        <span className="w-[50px]  hidden md:block h-[4px] bg-[#E61] rounded-full mb-4  mt-8  ">
          {" "}
        </span>
        <h1 className="text-[18px] font-semibold text-[#E61] mx-2 mt-5">
          Meet the Team For Book Consultation
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-96 gap-5">
        <div>
          <h1 className="text-4xl font-bold text-[#111827]">
            Meet the stewards of your <br /> heritage journey
          </h1>
          <p className="text-base font-medium text-[#6B7280] mt-6">
            each member an embodiment of expertise and warmth, dedicated to
            guiding you <br /> home, every step of the way.
          </p>
          <button className="btn btn-outline  btn-sm bg-[#0059B1] text-white border-none rounded-none mt-10">
            Book Consultation Now
          </button>
        </div>
        <div>
          <img
            className="lg:w-[380px] lg:h-[300px]  lg:-mt-8"
            src="../../../Image/Home1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMeet;
