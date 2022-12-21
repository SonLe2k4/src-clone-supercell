import classNames from "classnames/bind";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { v4 } from "uuid";
import style from "./style.module.scss";

type Props = {};
const cx = classNames.bind(style);
const HorizontalScrollingImage = (props: Props) => {
    const [translateX, setTranslateX] = useState<number>(0);
    const [isTriggerEvent, setIsTriggerEvent] = useState<boolean>(false);
    const wpref = useRef<HTMLDivElement>(null);

    const dataImg = useMemo(
        () =>
            [
                {
                    id: v4(),
                    src: require("../../../../../../access/image/careers/ourOffice/helsinki/1.jpg"),
                },
                {
                    id: v4(),
                    src: require("../../../../../../access/image/careers/ourOffice/helsinki/2.jpg"),
                },
                {
                    id: v4(),
                    src: require("../../../../../../access/image/careers/ourOffice/helsinki/3.jpg"),
                },
                {
                    id: v4(),
                    src: require("../../../../../../access/image/careers/ourOffice/helsinki/4.jpg"),
                },
                {
                    id: v4(),
                    src: require("../../../../../../access/image/careers/ourOffice/helsinki/5.jpg"),
                },
            ] as { id: string; src: string }[],
        []
    );

    useEffect(() => {
        const wpTag = wpref.current;
        if (!wpTag) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsTriggerEvent(entry.isIntersecting);
                });
            },
            {
                threshold: 0.5,
            }
        );
        observer.observe(wpTag);
    }, []);

    useEffect(() => {
        if (!isTriggerEvent) return;

        const handleScrolling = (e: Event) => {
            const scrollTop =
                Math.floor(document.body.scrollTop) ||
                Math.floor(document.documentElement.scrollTop);
            // console.log(scrollTop);
            setTranslateX(scrollTop);
        };

        window.addEventListener("scroll", handleScrolling);

        return () => {
            window.removeEventListener("scroll", handleScrolling);
        };
    }, [isTriggerEvent]);

    const renderLiTag = useCallback(
        () =>
            dataImg.map((data) => (
                <li key={data.id}>
                    <img src={data.src} alt="" />
                </li>
            )),
        [dataImg]
    );

    return (
        <div className={cx("wrapper")} ref={wpref}>
            <div className={cx("container", "shrink_web", "shrink_mobile")}>
                <ul>
                    {renderLiTag()}
                </ul>
            </div>
        </div>
    );
};

export default HorizontalScrollingImage;
