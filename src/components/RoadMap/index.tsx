import { RoadmapList } from "../../constants/common";
import BgRoadmap from "../../assets/image/circle-roadmap.png";

const RoadMap = () => {
  return (
    <div className="py-10 text-text">
      <h1 className="text-6xl font-semibold">Roadmap</h1>
      <div className="relative mb-10">
        <span className="absolute left-0 h-full w-1 rounded-full bg-bgPrimary"></span>
        <h5 className="pl-4">Strategic plan outlining steps to achieve specific goals and milestones.</h5>
      </div>
      <div className="flex">
        <div className="w-1/2 bg-contain bg-left-top bg-repeat-y" style={{ backgroundImage: `url(${BgRoadmap})` }}>
          <h1 className="pt-16 text-4xl font-semibold text-bgPrimary">Phase 1</h1>
          <h5>Launch and Initial Growth (Investor-Focused and Michael Jackson Inspired)</h5>
        </div>
        <div className="w-1/2 pl-16">
          {RoadmapList.map((item, index) => {
            return (
              <div key={index} className="flex gap-10">
                <div className="flex flex-col items-center">
                  <div className="my-1 h-[20px] w-[20px] rounded-full border-2 border-bgPrimary"></div>
                  <div className="flex-1 border-l-2 border-dashed border-bgPrimary bg-transparent"></div>
                </div>
                <div className="pb-10">
                  <h3 className="text-lg font-semibold text-bgPrimary">{item.title}</h3>
                  <div className="mt-4">
                    {item.content.map((child, childIndex) => {
                      return (
                        <h4 key={childIndex} className="text-text">
                          <span className="font-semibold">{child.label}</span> {child.text}
                        </h4>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default RoadMap;
