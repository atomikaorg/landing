const Contacts = () => {
  return (
    <section className="container bg-white rounded-[50px] px-16 py-[74px] max-md:px-5 max-md:py-[54px] mt-[208px] max-md:mt-[116px] flex justify-between items-center mb-10 shadow-xl max-md:flex-col max-md:items-start" id="contacts">
      <div className="flex flex-col gap-y-7 max-md:gap-y-5">
        <a
          href="tel:998555111112"
          className="text-[54px] font-semibold max-md:text-[35px] max-[432px]:!text-[32px]"
        >
          +998 (55) 511-11-33
        </a>
        <a
          href="mailto:info@atomika.org"
          className="font-medium text-gray-text text-[34px] inline-flex gap-x-4 max-md:text-[26px] max-md:items-center max-[432px]:!text-[20px]"
        >
          <span>
            <img
              className="size-14 max-md:size-[45px]"
              src="/support_icon.png"
              alt=""
            />
          </span>
          info@atomika.org{" "}
        </a>
      </div>
      <div className="flex gap-x-7 max-md:mt-[74px] max-md:justify-between max-md:w-full">
        <a href="#">
          <div className="size-[112px] max-md:size-[102px] max-[432px]:!size-[86px] rounded-full bg-[#3B579D] text-white flex items-center justify-center font-semibold text-[34px] shadow-[0_56px_82.2px] shadow-[#3C579DCC]">
            FB
          </div>
        </a>
        <a href="https://instagram.com/atomika_uz" target="_blank">
          <div className="size-[112px] max-md:size-[102px] max-[432px]:!size-[86px] rounded-full bg-gradient-to-b from-[#5752D4] via-[#D217C0] to-[#FBB637] text-white flex items-center justify-center font-semibold text-[34px] shadow-[0_56px_82.2px] shadow-[#F84269CC]">
            INS
          </div>
        </a>
        <a href="https://t.me/atomika_online" target="_blank">
          <div className="size-[112px] max-md:size-[102px] max-[432px]:!size-[86px] rounded-full bg-[#26A4E2] text-white flex items-center justify-center font-semibold text-[34px] shadow-[0_56px_82.2px] shadow-[#26A4E2CC]">
            TG
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contacts;
