import React from "react";

type Props = {};

type TIndex = "Shanghai" | "San Francisco" | "Seoul";

export type TImgData = {
    left: {
        top: string;
        bottom: {
            left: string;
            right: string;
        };
    };
    right: string;
};

type value = {
    control: {
        title: TIndex;
        position: string;
    };
    content: {
        text: string;
        link: { text: string; link: string }[];
        img: TImgData;
    };
};

export type TDataOfficeLiving = {
    [key in TIndex]: value;
};

const data: TDataOfficeLiving = {
    Shanghai: {
        control: {
            title: `Shanghai`,
            position: `Game Studio & Marketing`,
        },
        content: {
            text: `After the launch of Boom Beach in the Chinese market the time was right for us to open an office in China. Initially located in Beijing the team found a new home in the Jing’an district of Shanghai in order to be closer to our partners. The team has grown to become our second largest after Helsinki. In 2018, we took a big step as a company as Shanghai became the site for our first game studio outside Helsinki. The goal for our developers in Shanghai and in Helsinki is exactly the same: to create globally appealing games that are played for years and remembered forever. This is our opportunity to bring together the best of two different worlds.`,
            link: [
                { text: `READ MORE ABOUT LIVING IN SHANGHAI`, link: "/" },
                { text: `See our open positions in Shanghai`, link: "/" },
            ],
            img: {
                left: {
                    top: require("../../../../../../../access/image/careers/ourOffice/officeLiving/shanghai/shanghai_desktop_medium.8da9bfb2.jpg"),
                    bottom: {
                        left: require("../../../../../../../access/image/careers/ourOffice/officeLiving/shanghai/shanghai_desktop_small_1.d491f078.jpg"),
                        right: require("../../../../../../../access/image/careers/ourOffice/officeLiving/shanghai/shanghai_desktop_small_2.fb90e4ba.jpg"),
                    },
                },
                right: require("../../../../../../../access/image/careers/ourOffice/officeLiving/shanghai/shanghai_desktop_large.ff783814.jpg"),
            },
        },
    },
    "San Francisco": {
        control: {
            position: `Game Studio & Marketing`,
            title: `San Francisco`,
        },
        content: {
            text: `San Francisco was the first office we opened outside of Helsinki. Back when Hay Day and Clash of Clans were still in development it was time to prepare our global marketing efforts. With the Bay Area being home to major partners such as Facebook, Google and Twitter, and amazing talent, it was a natural home for our second office. The team spent a few years in shared startup spaces until moving into their permanent home in the heart of the Financial District sheltering 40 professionals from brand marketers to data scientists. In December 2021, we announced that we are setting up a new game development studio in North America with the dream of making games not expected from us.`,
            link: [
                {
                    text: `Read more about the North America Game Studio`,
                    link: "/",
                },
                { text: `See open positions in San Francisco`, link: "/" },
            ],
            img: {
                left: {
                    top: require("../../../../../../../access/image/careers/ourOffice/officeLiving/sanfra/sanfra_desktop_medium.30232a56.jpg"),
                    bottom: {
                        left: require("../../../../../../../access/image/careers/ourOffice/officeLiving/sanfra/sanfra_desktop_small_1.c32929c7.jpg"),
                        right: require("../../../../../../../access/image/careers/ourOffice/officeLiving/sanfra/sanfra_desktop_small_2.7270620d.jpg"),
                    },
                },
                right: require("../../../../../../../access/image/careers/ourOffice/officeLiving/sanfra/sanfra_desktop_large.374a370f.jpg"),
            },
        },
    },
    Seoul: {
        control: {
            position: `Marketing`,
            title: `Seoul`,
        },
        content: {
            text: `South Korea is a long-standing hotspot for gaming culture, and our Seoul office was founded soon after San Francisco, back in 2013. Since then, it’s helped Supercell leave a lasting mark on the Korean gaming landscape, especially with the tremendous successes of Clash of Clans and Brawl Stars. Both of these games propelled us to become the most popular mobile game publisher in the country. Team Seoul’s work isn’t limited to South Korea – it also handles our presence in the Japanese market, and inspires creative efforts across our company.`,
            link: [
                {
                    text: `See open positions in Seoul`,
                    link: "/",
                },
            ],
            img: {
                left: {
                    top: require("../../../../../../../access/image/careers/ourOffice/officeLiving/seoul/seoul_desktop_medium.acd21d36.jpg"),
                    bottom: {
                        left: require("../../../../../../../access/image/careers/ourOffice/officeLiving/seoul/seoul_desktop_small_1.19422d45.jpg"),
                        right: require("../../../../../../../access/image/careers/ourOffice/officeLiving/seoul/seoul_desktop_small_2.0e248095.jpg"),
                    },
                },
                right: require("../../../../../../../access/image/careers/ourOffice/officeLiving/seoul/seoul_desktop_large.07a0c9d1.jpg"),
            },
        },
    },
};

export const OfficeLiving = React.createContext(
    {} as {
        dataContent: value;
        setActive: React.Dispatch<React.SetStateAction<TIndex>>;
        active: TIndex;
        data: TDataOfficeLiving;
    }
);

const OfficeLivingProvider = (props: React.PropsWithChildren<Props>) => {
    const [active, setActive] = React.useState<TIndex>("Shanghai");

    const dataContent = React.useMemo(() => data[active], [active]);

    //
    return (
        <OfficeLiving.Provider
            value={{
                dataContent,
                setActive,
                active,
                data,
            }}
        >
            {props.children}
        </OfficeLiving.Provider>
    );
};

export default OfficeLivingProvider;
