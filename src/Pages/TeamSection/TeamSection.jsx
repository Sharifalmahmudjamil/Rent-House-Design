const TeamSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="lg:mt-44 mt-60 flex">
        <span className="w-[50px]  hidden md:block h-[4px] bg-[#E61] rounded-full mb-4  mt-8  ">
          {" "}
        </span>
        <h1 className="text-[18px] font-semibold text-[#E61] mx-2 mt-5">
          Our Teem
        </h1>
      </div>
      <h1 className="text-4xl font-bold text-[#111827]">
        Discover the Faces Behind Our Success
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
        <div>
          <img
            className="w-[350px] h-[400px] "
            src="../../../Image/team.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[350px] h-[400px] "
            src="../../../Image/team1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[350px] h-[400px] object-cover"
            src="../../../Image/team2.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
