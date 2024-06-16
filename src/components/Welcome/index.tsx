import Member1 from "../../assets/image/Mem1.png";
import Member2 from "../../assets/image/Mem2.png";
import Member3 from "../../assets/image/Mem3.png";
import Member4 from "../../assets/image/Mem4.png";
import BgBlur from "../../assets/image/Blur.png";
import BgWelcome from "../../assets/image/bg-welcome.png";
import BgButtonScale from "../../assets/image/bg-button-scale.png";
import BgButtonScaleHover from "../../assets/image/bg-button-scale-hover.png";
import BgButtonDefault from "../../assets/image/bg-button-default.png";

const Welcome = () => {
  return (
    <div
      className="relative flex h-[960px] items-center justify-start bg-right bg-no-repeat"
      style={{ backgroundImage: `url(${BgWelcome})` }}
    >
      <div className="z-10 w-1/2">
        <h1 className="text-6xl font-semibold">Lorem Ipsum dolor dummy text</h1>
        <div className="relative mt-6">
          <span className="absolute h-full w-1 rounded-lg bg-bluePrimary"></span>
          <h5 className="pl-4 text-lg">Subheading lorem ipsum text for idea and placement.</h5>
        </div>
        <div className="mt-4 flex items-center gap-6">
          <button
            className="h-[66px] w-[228px] bg-no-repeat text-xl font-semibold text-text"
            style={{ backgroundImage: `url(${BgButtonScale})` }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${BgButtonScaleHover})`)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${BgButtonScale})`)}
          >
            Connect Wallet
          </button>
          <button
            className="h-[72px] w-[176px] text-xl font-semibold text-text hover:opacity-80"
            style={{ backgroundImage: `url(${BgButtonDefault})` }}
          >
            Learn more
          </button>
        </div>
        <div className="mt-8 flex items-center gap-6">
          <h5 className="text-lg">Our members</h5>
          <div className="flex items-center">
            <div>
              <img src={Member1} alt="Member1" />
            </div>
            <div>
              <img src={Member2} alt="Member2" />
            </div>
            <div>
              <img src={Member3} alt="Member3" />
            </div>
            <div>
              <img src={Member4} alt="Member4" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <img src={BgBlur} alt="BgBlur" />
      </div>
    </div>
  );
};

export default Welcome;
