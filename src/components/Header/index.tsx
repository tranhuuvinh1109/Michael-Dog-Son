import SvgHamburger from "../../assets/svgComponents/SvgHamburger";
import SvgLogo from "../../assets/svgComponents/SvgLogo";
import Svgsend from "../../assets/svgComponents/SvgSend";
import SvgX from "../../assets/svgComponents/SvgX";
import BgButton from "../../assets/image/bg-button.png";
import BgButtonHover from "../../assets/image/bg-button-hover.png";
import { LINK_T, LINK_X } from "../../constants/common";

const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 border-b border-text bg-bluePrimary80 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between py-4">
        <div className="hidden sm:block">
          <SvgLogo />
        </div>
        <div className="block px-4 sm:hidden">
          <SvgLogo width={100} />
        </div>
        <div className="hidden items-center justify-between gap-28 sm:flex">
          <div className="flex items-center gap-10">
            <button
              className="h-[41px] w-[146px] font-semibold text-text"
              style={{ backgroundImage: `url(${BgButton})` }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${BgButtonHover})`)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${BgButton})`)}
            >
              Connect Wallet
            </button>
            <a href={LINK_X} target="_blank" rel="noreferrer">
              <button className="hover:opacity-80">
                <SvgX width={26} height={26} />
              </button>
            </a>

            <a href={LINK_T} target="_blank" rel="noreferrer">
              <button className="hover:opacity-80">
                <Svgsend width={26} height={26} />
              </button>
            </a>
          </div>
          <button className="hover:opacity-80">
            <SvgHamburger width={26} height={26} />
          </button>
        </div>
        <div className="flex items-center gap-4 px-4 sm:hidden">
          <a href={LINK_X} target="_blank" rel="noreferrer" className="flex items-center">
            <button className="hover:opacity-80">
              <SvgX width={24} height={24} />
            </button>
          </a>

          <a href={LINK_T} target="_blank" rel="noreferrer" className="flex items-center">
            <button className="hover:opacity-80">
              <Svgsend width={24} height={24} />
            </button>
          </a>
          <button className="hover:opacity-80">
            <SvgHamburger width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
