import AboutUs from "../../assets/image/about.png";
import BgButtonBorder from "../../assets/image/bg-button-border.png";

const About = () => {
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full sm:w-1/2">
        <div className="px-14">
          <h1 className="text-6xl font-semibold">About us</h1>
          <h5 className="mt-10">
            Welcome to Michael Dog Son, your trusted companion in cryptocurrency! Our mission is to simplify your crypto
            journey with reliable insights, innovative solutions, and a supportive community. We believe in the power of
            blockchain technology and digital assets.
          </h5>
          <h5 className="mt-6">
            Stay connected with us and be a part of our vibrant community. Checkout our socials to keep up with the
            latest updates and join the conversation!
          </h5>
          <div className="mt-10 flex justify-center">
            <button
              className="h-[62px] w-[199px] bg-no-repeat text-lg font-semibold text-bluePrimary hover:opacity-80"
              style={{ backgroundImage: `url(${BgButtonBorder})` }}
            >
              Checkout our socials
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:w-1/2">
        <img src={AboutUs} about="AboutUs" className="w-2/3 sm:w-full" />
      </div>
    </div>
  );
};

export default About;
