const OurTeamSection = () => {
  return (
    <div className="relative ">
      <div className=" w-full h-[220px] sm:h-[320px] md:h-[420px] ourTeamSection flex items-center justify-center md:mt-[4rem] md:mb-[10rem]"></div>
      <div className="static md:absolute mx-auto md:mx-0 w-[80%] md:w-[50%] left-[10%] top-[10%] md:block bg-[#fff] md:h-[620px] md:shadow-2xl md:px-[4rem] pt-[3rem]">
        <h2 className="text-[1.6rem] md:text-[2.13rem] font-[600] text-[#616060] mb-[0.2rem]">
          Our Team:
        </h2>
        <h2 className="text-[1.6rem] md:text-[2.13rem] font-[600] text-[#430990] mb-[1.2rem]">
          Standard of Excellence
        </h2>
        <div>
          <p className="mb-[3rem]">
            Gadolin is affiliated with some of the area&apos;s best physicians;
            from family practitioners to specialists, we have a wide range of
            knowledge and experience. With our staff of skilled health care
            professionals, you can rest assured that we are committed to your
            safety and well-being every step of the way.
          </p>
          <p className="mb-[3rem]">
            Clinical research are a great way to learn more about your health
            status, treatment options, and even acess to medication at no cost
            to you. Our expertly trained medical staff is committed to providing
            the highest quality health care to patients.
          </p>
          <p>
            our patients always comes first. If you have any questions about
            participating in research, Call us at +1-300-555-0171 or send us a
            mail at georgia.young@example.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
