import { HeroList } from "../../constants/common";
import Coin from "../../assets/image/Coin.png";

const Hero = () => {
  return (
    <div className="flex justify-between">
      {HeroList.map((item, index) => {
        return (
          <div key={index} className="relative pb-20">
            <div className="bg-bgContainerBlue h-[462px] w-[346px] px-4 py-6">
              <h1 className="text-2xl text-white">{item.title}</h1>
              <div className="mt-8 flex flex-col gap-6">
                <p className="">{item.content}</p>
                <p className="">{item.footer}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 w-fit -translate-x-2/4">
              <img src={Coin} alt="Coin" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
