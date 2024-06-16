import AboutUs from "../../assets/image/about.png";
import BgButtonBorder from "../../assets/image/bg-button-border.png";

const About = () => {
  return (
    <div className="flex items-center">
      <div className="w-1/2">
        <div className="px-14">
          <h1 className="text-6xl font-semibold">About us</h1>
          <h5 className="mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </h5>
          <h5 className="mt-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </h5>
          <div className="mt-10">
            <button
              className="h-[62px] w-[199px] bg-no-repeat text-lg font-semibold text-bluePrimary hover:opacity-80"
              style={{ backgroundImage: `url(${BgButtonBorder})` }}
            >
              Checkout our socials
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src={AboutUs} about="AboutUs" />
      </div>
    </div>
  );
};

export default About;
