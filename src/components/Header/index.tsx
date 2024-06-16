import SvgHamburger from "../../assets/svgComponents/SvgHamburger";
import SvgLogo from "../../assets/svgComponents/SvgLogo";
import Svgsend from "../../assets/svgComponents/SvgSend";
import SvgX from "../../assets/svgComponents/SvgX";

const Header = () => {
  return (
    <div className="border-text fixed left-0 right-0 top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between py-4">
        <SvgLogo />
        <div className="flex items-center justify-between gap-28">
          <div className="flex items-center gap-10">
            <button className="text-text bg-button hover:bg-buttonHover h-[41px] w-[146px] font-semibold">
              Connect Wallet
            </button>
            <button className="hover:opacity-80">
              <SvgX width={26} height={26} />
            </button>
            <button className="hover:opacity-80">
              <Svgsend width={26} height={26} />
            </button>
          </div>
          <button className="hover:opacity-80">
            <SvgHamburger width={26} height={26} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
