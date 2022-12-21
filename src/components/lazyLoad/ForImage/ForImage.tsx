import { useEffect } from 'react'

const useLazyLoadImage = (
    imgRef: React.RefObject<HTMLImageElement>,
    srcThumb: string,
    optionIntersection?: IntersectionObserverInit
) => {
    useEffect(() => {
        if ("IntersectionObserver" in window) {
            const setSrcForImgTag = (imgTag: HTMLImageElement, src: string) => {
                imgTag.src = src;
            };

            const imgTag = imgRef.current;
            if (!imgTag) return;

            imgTag.setAttribute("src", "");

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSrcForImgTag(
                            entry.target as any as HTMLImageElement,
                            srcThumb
                        );
                    }
                });
            }, optionIntersection);

            observer.observe(imgTag);
        } else {
        }
    }, [imgRef, srcThumb, optionIntersection]);
};

export default useLazyLoadImage;
