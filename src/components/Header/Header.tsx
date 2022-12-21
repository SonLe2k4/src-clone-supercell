import { useState } from "react";

import classNames from "classnames/bind";
import BarBtn from "./components/BarBtn";
import Logo from "./components/Logo";
import SearchBtn from "./components/SearchBtn";
import SupercellId from "./components/SupercellId";
import Menu from "./Menu";
import style from "./style.module.scss";
const cx = classNames.bind(style);
type Props = {};

const Header = (props: Props) => {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState<boolean>(false);
  
  return (
    <>
      <header className={cx("wrapper-header", "web", 'shrink_web')}>
        <Logo className={cx("logo-web")} />
        <Menu className={cx("mr-auto")} />
        <SupercellId className={cx("ml-auto", "SupercellId")} />
        <SearchBtn />
      </header>
      <div className={cx("wrapper-header-mobile")}>
        <header className={cx("header-mobile")}>
          <Logo />
          <BarBtn
            isOpen={isOpenMenuMobile}
            setIsOpen={() => {
              setIsOpenMenuMobile((prev) => !prev);
            }}
          />
        </header>
        <div className={cx("menu-mobile-wrapper", isOpenMenuMobile && "open")}>
          <Menu mobile={true} className={cx("menu-mobile")} />
          <SearchBtn className={cx("search-btn-mobile")} text='Search' />
          <SupercellId className={cx("supercell-id-mobile")}/>
        </div>
      </div>
    </>
  );
};

export default Header;
