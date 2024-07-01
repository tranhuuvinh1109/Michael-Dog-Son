import BgContainer from "../../assets/image/bg-container.png";
import BgContainerToken from "../../assets/image/bg-container-token.png";
import BgTotal from "../../assets/image/total.png";
import { SloganList, TagList, TimelineList } from "../../constants/common";
import SvgTag from "../../assets/svgComponents/SvgTag";

const Timeline = () => {
  return (
    <div className="pb-10">
      <div className="flex flex-wrap pt-10 sm:justify-around">
        {TimelineList.map((item, index) => {
          return (
            <div className="relative bg-no-repeat p-4" key={index}>
              <img src={BgContainer} alt="BgContainer" className="sm:w-[500px]" />
              <div className="absolute top-0">
                <h1 className="mt-10 text-center text-5xl sm:mt-16">{item.title}</h1>
                <div className="mt-4 flex flex-col gap-4 px-6 sm:mt-16 sm:gap-10">
                  {item.text.map((child, childIndex) => {
                    return (
                      <h5 className="sm:text-lg" key={childIndex}>
                        {child}
                      </h5>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-10 flex flex-col items-center gap-4 p-4 sm:px-0">
        {SloganList.map((item, index) => {
          return (
            <div key={index} className="w-fit rounded-2xl bg-bluePrimary px-6 py-4">
              <h2 className="text-center text-lg font-semibold uppercase">{item}</h2>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <div className="mt-10 pb-10">
          <div className="relative w-fit">
            <img src={BgContainerToken} alt="BgContainerToken" className="h-[280px] w-[330px] sm:h-fit sm:w-[600px]" />
            <div className="absolute top-0 pl-4 pt-4 sm:pl-8 sm:pr-16 sm:pt-8">
              <h1 className="font-semibold text-bluePrimary sm:text-4xl">
                {"MICHAEL DOGSON HAS A TOTAL SUPPLY OF 200,000,000,000 TOKENS"}
              </h1>
              <div className="mt-2 flex gap-2">
                <div className="w-3 rounded-full bg-bluePrimary"></div>
                <h5 className="text-sm sm:text-base">
                  {
                    "The $MDS token is minted on Ethereum and is unique in that it can also be claimed, stored and traded on Solana, BNB Chain, Base, Polygon, or Avalanche using Wormhole and Portal Bridge tech."
                  }
                </h5>
              </div>
              <div className="hidden flex-wrap sm:mt-6 sm:flex">
                {TagList.map((item, index) => {
                  return (
                    <div className="flex w-1/2 items-center gap-2 text-sm" key={index}>
                      <div>
                        <SvgTag fill={item.color} />
                      </div>
                      <div className="flex items-center gap-1">
                        <h5>{item.text}</h5>
                        <h5 className="text-redPrimary">{item.percent}</h5>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-2 flex flex-wrap sm:hidden">
                {TagList.map((item, index) => {
                  return (
                    <div className="flex w-1/2 items-center gap-2 text-sm" key={index}>
                      <div>
                        <SvgTag width={10} height={5} fill={item.color} />
                      </div>
                      <div className="flex items-center gap-1">
                        <h5>{item.text}</h5>
                        <h5 className="text-redPrimary">{item.percent}</h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="-right-18 absolute top-[50%] -translate-x-2/4 -translate-y-2/4 sm:-right-60">
              <img src={BgTotal} alt="BgTotal" className="w-[58px] sm:w-[200px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-24"></div>
    </div>
  );
};

export default Timeline;
