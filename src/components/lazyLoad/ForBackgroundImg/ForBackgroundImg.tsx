import { useEffect } from "react";

const useLazyLoadStyle = (
    HTMLElementRef: React.RefObject<any>,
    styleBackgroundImg: string,
    optionIntersection?: IntersectionObserverInit
) => {
    useEffect(() => {
        if ("IntersectionObserver" in window) {
            const setStyleForTagHTML = (
                tagHTML: HTMLImageElement,
                style: string
            ) => {
                tagHTML.style.cssText = style;
            };

            const tagHTML = HTMLElementRef.current;
            if (!tagHTML) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setStyleForTagHTML(
                            entry.target as any as HTMLImageElement,
                            styleBackgroundImg
                        );
                    }
                });
            }, optionIntersection);

            observer.observe(tagHTML);
        } else {
        }
    }, [HTMLElementRef, styleBackgroundImg, optionIntersection]);
};

export default useLazyLoadStyle;
