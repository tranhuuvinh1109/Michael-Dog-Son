import PartnerImg from "../../assets/image/Partner.png";
import SvgAvaissance from "../../assets/svgComponents/SvgAvaissance";
import SvgBinance from "../../assets/svgComponents/SvgBinance";
import SvgCoinbase from "../../assets/svgComponents/SvgCoinbase";
import SvgEthereum from "../../assets/svgComponents/SvgEthereum";
import SvgPolygon from "../../assets/svgComponents/SvgPolygon";
import SvgSolana from "../../assets/svgComponents/SvgSolana";
import BgCircle from "../../assets/image/circle.png";

const Partner = () => {
  return (
    <div className="mt-16 bg-top pt-2" style={{ backgroundImage: `url(${BgCircle})` }}>
      <div className="flex justify-center">
        <img src={PartnerImg} alt="Partner" className="w-[450px]" />
      </div>
      <h5 className="text-center text-lg text-black">
        Buy and claim <span className="font-semibold">$DOGSON</span> on any of these chains
      </h5>
      <div className="pb-10 pt-24">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <SvgEthereum />
          <SvgBinance />
          <SvgPolygon />
          <SvgAvaissance />
          <SvgCoinbase />
          <SvgSolana />
        </div>
      </div>
    </div>
  );
};
export default Partner;
