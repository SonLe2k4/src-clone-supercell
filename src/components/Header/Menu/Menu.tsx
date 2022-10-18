import { IoIosArrowDown } from "react-icons/io";
import classNames from "classnames/bind";
import { useCallback, useRef } from "react";
import listNav, { nav } from "./list";
import style from "./style.module.scss";
type Props = {
  className?: string;
  mobile?: boolean;
};
const cx = classNames.bind(style);

const Menu = (props: Props) => {
  const clsOpenSub = useRef<string>(cx("open-sub"));
  const { mobile } = props;
  const removeClassOpenSub = useCallback((liTag: HTMLElement) => {
    const ulParentTag = liTag.parentElement;
    if (!ulParentTag) return;
    const childs = ulParentTag.childNodes;
    for (let i = 0; i < childs.length; i++) {
      const liTag = childs[i] as HTMLElement;
      const containsCls = liTag.classList.contains(clsOpenSub.current);
      if (containsCls) liTag.classList.remove(clsOpenSub.current);
    }
  }, []);
  const handleClickTagA = useCallback(
    (e: any) => {
      if (!mobile) return;
      e.preventDefault();
      const tagA = e.target as HTMLElement;
      const parentTag = tagA.parentElement as HTMLElement;

      const hasCls = parentTag.classList.contains(clsOpenSub.current);
      if (hasCls) {
        parentTag.classList.remove(clsOpenSub.current);
        return;
      }

      removeClassOpenSub(parentTag);

      parentTag?.classList.toggle(clsOpenSub.current);
    },
    [mobile, removeClassOpenSub]
  );
  const renderMenu = (isSub?: boolean, children?: nav[]) => {
    return (
      <ul className={cx("menu", isSub && "sub")}>
        {(children || listNav).map((item) => (
          <li key={item.id}>
            <a onClick={handleClickTagA} href={item.link}>
              {item.text}
              {mobile && !!isSub === false && (
                <IoIosArrowDown className={cx("arrow")} />
              )}
            </a>
            {item.children && renderMenu(true, item.children)}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <nav className={cx(props.className, "wrapper-menu")}>{renderMenu()}</nav>
  );
};

export default Menu;
