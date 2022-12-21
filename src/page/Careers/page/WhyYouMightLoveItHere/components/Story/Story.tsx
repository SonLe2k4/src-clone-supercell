import classNames from "classnames/bind";
import { v4 } from "uuid";
import style from "./style.module.scss";
import Slider from "../../../../../../components/common/Slider";
import { useState } from "react";

type Props = {};
const cx = classNames.bind(style);
const Story = (props: Props) => {
    const [stateViewMobile, setStateViewMobile] = useState<boolean>(false);
    return (
        <Slider
            typeFullScreen="3"
            classNameAll={cx("wrapper-story")}
            classNameWrapper={cx(stateViewMobile && "show")}
            classNameControl={cx("control")}
            classNameUlTag={cx("ul-slider-story")}
            controlKeyboard="none"
            dataFullScreenStory={[
                {
                    id: v4(),
                    top: {
                        heading: `A Graphics Engineer’s Story`,
                        img: require("../../../../../../access/image/careers/whyYouMight/story/whyyou_story_graphicsengineer.812883e1.jpg"),
                        name: `On The Job`,
                        part: `part I`,
                    },
                    bottom: {
                        left: (
                            <>
                                <p>
                                    What does the average day-to-day actually
                                    look like for an engineer, or for any other
                                    position, at Supercell? If you’ve ever given
                                    a career with us some thought, you’ve
                                    probably wondered about that. And for good
                                    reason, because there’s only so much you can
                                    fit into an ‘open positions’ notice of
                                    bearable length.
                                </p>
                                <p>
                                    Of course, certain aspects of a job are
                                    universal. If you’re an engineer, depending
                                    on your specialisation, you’ll be designing
                                    databases, developing clients, churning out
                                    code and tinkering with curly brackets.
                                    That’s just as true for Supercell as it is
                                    for other places.
                                </p>
                                <p>
                                    What makes work at Supercell stand out is
                                    that whatever role you’ve been hired for,
                                    you’re in those shoes because...
                                </p>
                                <ul>
                                    <li>you’re an expert at what you do</li>
                                    <li>
                                        you don’t hesitate to put that unique
                                        expertise of yours to use, and
                                    </li>
                                    <li>you’re committed to cooperation.</li>
                                </ul>
                            </>
                        ),
                        right: (
                            <>
                                <p>
                                    What we mean by applying your craft is
                                    probably self-explanatory, but what do we
                                    mean when we say we’re looking for
                                    cooperative types? In practical terms, we’re
                                    saying that your team’s goals take
                                    precedence over personal agendas, that
                                    you’re never too proud to ask questions, and
                                    that you appreciate the importance of
                                    helping others. Being friendly is essential,
                                    and an earnest respect for your team-mates
                                    and colleagues is indispensable.
                                </p>
                                <p>
                                    Supercellians don’t count years of tenure at
                                    the company when they choose who they listen
                                    to. You’re trusted from day one to be a
                                    fully formed voice within your team and the
                                    company, contributing towards everyone’s
                                    success.
                                </p>
                                <i>Story continues on the next slide</i>
                            </>
                        ),
                        dataForMobile: (
                            <>
                                <h2 className={cx("color-fff")}>
                                    A Graphics Engineer’s Story
                                </h2>
                                <p>
                                    What does the average day-to-day actually
                                    look like for an engineer, or for any other
                                    position, at Supercell? If you’ve ever given
                                    a career with us some thought, you’ve
                                    probably wondered about that. And for good
                                    reason, because there’s only so much you can
                                    fit into an ‘open positions’ notice of
                                    bearable length.
                                </p>
                                <p
                                    className={cx(
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    Of course, certain aspects of a job are
                                    universal. If you’re an engineer, depending
                                    on your specialisation, you’ll be designing
                                    databases, developing clients, churning out
                                    code and tinkering with curly brackets.
                                    That’s just as true for Supercell as it is
                                    for other places.
                                </p>
                                <p
                                    className={cx(
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    What makes work at Supercell stand out is
                                    that whatever role you’ve been hired for,
                                    you’re in those shoes because...
                                </p>
                                <ul className={cx("ul-story")}>
                                    <li>you’re an expert at what you do</li>
                                    <li>
                                        you don’t hesitate to put that unique
                                        expertise of yours to use, and
                                    </li>
                                    <li>you’re committed to cooperation.</li>
                                </ul>
                                <p
                                    className={cx(
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    What we mean by applying your craft is
                                    probably self-explanatory, but what do we
                                    mean when we say we’re looking for
                                    cooperative types? In practical terms, we’re
                                    saying that your team’s goals take
                                    precedence over personal agendas, that
                                    you’re never too proud to ask questions, and
                                    that you appreciate the importance of
                                    helping others. Being friendly is essential,
                                    and an earnest respect for your team-mates
                                    and colleagues is indispensable.
                                </p>
                                <p
                                    className={cx(
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    Supercellians don’t count years of tenure at
                                    the company when they choose who they listen
                                    to. You’re trusted from day one to be a
                                    fully formed voice within your team and the
                                    company, contributing towards everyone’s
                                    success.
                                </p>
                                <i
                                    className={cx(
                                        "i-story",
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    Story continues on the next slide
                                </i>

                                <div className={cx("btn-read-story")}>
                                    <button
                                        onClick={() =>
                                            setStateViewMobile((prev) => !prev)
                                        }
                                    >
                                        read{" "}
                                        {!stateViewMobile ? "more" : "less"}
                                    </button>
                                </div>
                            </>
                        ),
                    },
                },
                {
                    id: v4(),
                    top: {
                        heading: `A Graphics Engineer’s Story`,
                        img: require("../../../../../../access/image/careers/whyYouMight/story/whyyou_story_graphicsengineer.812883e1.jpg"),
                        name: `On The Job`,
                        part: `part I`,
                    },
                    bottom: {
                        dataForMobile: (
                            <>
                                <h2 className={cx("color-fff")}>
                                    A Graphics Engineer’s Story
                                </h2>
                                <p>
                                    You won’t be expected to conform to any
                                    corporate structures or layers, and you
                                    won’t find any red tape even if you walk all
                                    the way down the office corridor. Having
                                    rigid formalities in place would make for a
                                    slightly more predictable organisation, but
                                    we optimise for speed. To that end, there’s
                                    nothing like giving employees ownership over
                                    their work and the tools to operate with
                                    independence and speed.
                                </p>
                                <p>
                                    A graphics engineer describes his early days
                                    at Supercell after joining the Tools & Tech
                                    team, who support our game development teams
                                    with the technology that they need:
                                </p>
                                <p
                                    className={cx(
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    <i>
                                        When I joined the company, my team had
                                        already agreed with the game teams to
                                        build a new renderer for our games. I
                                        got to see what had been developed up to
                                        that point, and I was given the option
                                        to either keep it or rewrite it. What
                                        was already there looked really good and
                                        was a close match with how I would have
                                        approached the problem. So I picked it
                                        up from there.
                                    </i>
                                </p>
                                <p
                                    className={cx(
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    <i>
                                        This was no small task, because to
                                        modify our games for the new renderer, I
                                        would have to get a feel for all the
                                        different game teams and their
                                        characteristic workflows. I started with
                                        Hay Day. Supercell’s culture allowed me
                                        to collaborate with the Hay Day team
                                        directly, with minimal bureaucracy. Both
                                        my own team and the Hay Day crew all
                                        trusted me to make the necessary
                                        decisions to get the job done, and to
                                        handle all communications with the
                                        relevant parties first-hand. Whenever I
                                        needed a hand with something, everyone
                                        was always happy to help.
                                    </i>
                                </p>
                                <p
                                    className={cx(
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    <i>
                                        Having shipped the new renderer in Hay
                                        Day, I am now navigating the other game
                                        teams and making sure their code base
                                        works with the new renderer to
                                        eventually bring all games onboard.
                                        Without the culture that we have,
                                        building and implementing the new
                                        renderer would have been much more
                                        difficult and time consuming.
                                    </i>
                                </p>
                                <p
                                    className={cx(
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    <i>Read Part II on the next slide</i>
                                </p>
                                <div className={cx("btn-read-story")}>
                                    <button
                                        onClick={() =>
                                            setStateViewMobile((prev) => !prev)
                                        }
                                    >
                                        read{" "}
                                        {!stateViewMobile ? "more" : "less"}
                                    </button>
                                </div>
                            </>
                        ),
                        left: (
                            <>
                                <p>
                                    You won’t be expected to conform to any
                                    corporate structures or layers, and you
                                    won’t find any red tape even if you walk all
                                    the way down the office corridor. Having
                                    rigid formalities in place would make for a
                                    slightly more predictable organisation, but
                                    we optimise for speed. To that end, there’s
                                    nothing like giving employees ownership over
                                    their work and the tools to operate with
                                    independence and speed.
                                </p>
                                <p>
                                    A graphics engineer describes his early days
                                    at Supercell after joining the Tools & Tech
                                    team, who support our game development teams
                                    with the technology that they need:
                                </p>
                                <i>
                                    When I joined the company, my team had
                                    already agreed with the game teams to build
                                    a new renderer for our games. I got to see
                                    what had been developed up to that point,
                                    and I was given the option to either keep it
                                    or rewrite it. What was already there looked
                                    really good and was a close match with how I
                                    would have approached the problem. So I
                                    picked it up from there.
                                </i>
                            </>
                        ),
                        right: (
                            <>
                                <p>
                                    <i>
                                        This was no small task, because to
                                        modify our games for the new renderer, I
                                        would have to get a feel for all the
                                        different game teams and their
                                        characteristic workflows. I started with
                                        Hay Day. Supercell’s culture allowed me
                                        to collaborate with the Hay Day team
                                        directly, with minimal bureaucracy. Both
                                        my own team and the Hay Day crew all
                                        trusted me to make the necessary
                                        decisions to get the job done, and to
                                        handle all communications with the
                                        relevant parties first-hand. Whenever I
                                        needed a hand with something, everyone
                                        was always happy to help.
                                    </i>
                                </p>
                                <p>
                                    <i>
                                        Having shipped the new renderer in Hay
                                        Day, I am now navigating the other game
                                        teams and making sure their code base
                                        works with the new renderer to
                                        eventually bring all games onboard.
                                        Without the culture that we have,
                                        building and implementing the new
                                        renderer would have been much more
                                        difficult and time consuming.
                                    </i>
                                </p>
                                <p>
                                    <i>Read Part II on the next slide</i>
                                </p>
                            </>
                        ),
                    },
                },
                {
                    id: v4(),
                    top: {
                        heading: `An Artist’s Story`,
                        img: require("../../../../../../access/image/careers/whyYouMight/story/whyyou_story_artist.edf5c517.jpg"),
                        name: `On The Job`,
                        part: `part II`,
                    },
                    bottom: {
                        dataForMobile: (
                            <>
                                <h2 className={cx("color-fff")}>
                                    An Artist’s Story
                                </h2>
                                <p>
                                    Visitors on our careers page may have
                                    noticed that whenever we have an opening for
                                    an artist, we’ve hardly ever had one for an
                                    Art Director . Well, sometimes we have, but
                                    we’ve used quotation marks around the title:
                                    “Art Director”. Because that is, and at the
                                    same time is not, what we are looking for.
                                </p>
                                <p
                                    className={cx(
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    Confused? Read on.
                                </p>
                                <p
                                    className={cx(
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    Supercell doesn’t really have any junior
                                    artists on board, at all. Even the least
                                    experienced Supercellian artists will have a
                                    few notches in their belt and could easily
                                    call themselves “senior artists”. Many are
                                    hardened industry veterans, the kind of
                                    people who would have been promoted past the
                                    daily grind of crafting art in most other
                                    companies, and into positions of
                                    directorship.
                                </p>
                                <p
                                    className={cx(
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    That hierarchical approach does not fit with
                                    how Supercell’s artists operate, however.
                                    Here, an artist’s experience is a
                                    tremendously valuable resource, but it’s not
                                    a badge. Everyone who contributes to the
                                    artistic output of our company is
                                    essentially on an even footing and has an
                                    equally strong desire to work hands on.
                                </p>
                                <p
                                    className={cx(
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    People have their personal strengths and
                                    specialties, but nobody stands above anyone
                                    else. For that reason, it would be very
                                    misleading of us to give the impression that
                                    we are looking for art directors in a
                                    conventional sense.
                                </p>
                                <p
                                    className={cx(
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    People have their personal strengths and
                                    specialties, but nobody stands above anyone
                                    else. For that reason, it would be very
                                    misleading of us to give the impression that
                                    we are looking for art directors in a
                                    conventional sense.
                                </p>
                                <p
                                    className={cx(
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    These values play in even when we turn to
                                    external production partners and freelancers
                                    to boost our ever-growing pipeline. One of
                                    our marketing artists, who has spent a lot
                                    of time with external studios on making
                                    animated videos for our games, sums it up
                                    like this:
                                </p>
                                <p
                                    className={cx(
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    <i>
                                        Whenever I, together with fellow artist
                                        colleagues from Supercell, visit a
                                        studio for the first time, we’re always
                                        cordially received by the studio heads,
                                        the CEO, the directors and the big-wheel
                                        producers. It goes without saying that
                                        we appreciate the gesture. It’s an
                                        indication of how committed these
                                        partners are to helping us, and we want
                                        to show respect for the corporate
                                        culture that they have developed for
                                        their own purposes. Yet from the start
                                        of any of these partnerships, we always
                                        need to make sure that our partners
                                        understand one thing: that communicating
                                        solely with the managers isn’t an option
                                        for us.
                                    </i>
                                </p>
                                <p
                                    className={cx(
                                        "animate",
                                        stateViewMobile && "show",
                                        !stateViewMobile && "hide"
                                    )}
                                >
                                    <i>Story continues on next slide</i>
                                </p>
                                <div className={cx("btn-read-story")}>
                                    <button
                                        onClick={() =>
                                            setStateViewMobile((prev) => !prev)
                                        }
                                    >
                                        read{" "}
                                        {!stateViewMobile ? "more" : "less"}
                                    </button>
                                </div>
                            </>
                        ),

                        left: (
                            <>
                                <p>
                                    Visitors on our careers page may have
                                    noticed that whenever we have an opening for
                                    an artist, we’ve hardly ever had one for an
                                    Art Director . Well, sometimes we have, but
                                    we’ve used quotation marks around the title:
                                    “Art Director”. Because that is, and at the
                                    same time is not, what we are looking for.
                                </p>
                                <p>Confused? Read on.</p>
                                <p>
                                    Supercell doesn’t really have any junior
                                    artists on board, at all. Even the least
                                    experienced Supercellian artists will have a
                                    few notches in their belt and could easily
                                    call themselves “senior artists”. Many are
                                    hardened industry veterans, the kind of
                                    people who would have been promoted past the
                                    daily grind of crafting art in most other
                                    companies, and into positions of
                                    directorship.
                                </p>
                                <p>
                                    That hierarchical approach does not fit with
                                    how Supercell’s artists operate, however.
                                    Here, an artist’s experience is a
                                    tremendously valuable resource, but it’s not
                                    a badge. Everyone who contributes to the
                                    artistic output of our company is
                                    essentially on an even footing and has an
                                    equally strong desire to work hands on.
                                </p>
                                <p>
                                    People have their personal strengths and
                                    specialties, but nobody stands above anyone
                                    else. For that reason, it would be very
                                    misleading of us to give the impression that
                                    we are looking for art directors in a
                                    conventional sense.
                                </p>
                            </>
                        ),
                        right: (
                            <>
                                <p>
                                    People have their personal strengths and
                                    specialties, but nobody stands above anyone
                                    else. For that reason, it would be very
                                    misleading of us to give the impression that
                                    we are looking for art directors in a
                                    conventional sense.
                                </p>
                                <p>
                                    These values play in even when we turn to
                                    external production partners and freelancers
                                    to boost our ever-growing pipeline. One of
                                    our marketing artists, who has spent a lot
                                    of time with external studios on making
                                    animated videos for our games, sums it up
                                    like this:
                                </p>
                                <i>
                                    Whenever I, together with fellow artist
                                    colleagues from Supercell, visit a studio
                                    for the first time, we’re always cordially
                                    received by the studio heads, the CEO, the
                                    directors and the big-wheel producers. It
                                    goes without saying that we appreciate the
                                    gesture. It’s an indication of how committed
                                    these partners are to helping us, and we
                                    want to show respect for the corporate
                                    culture that they have developed for their
                                    own purposes. Yet from the start of any of
                                    these partnerships, we always need to make
                                    sure that our partners understand one thing:
                                    that communicating solely with the managers
                                    isn’t an option for us.
                                </i>
                                <i>Story continues on next slide</i>
                            </>
                        ),
                    },
                },
                // {
                //     id: v4(),
                //     top: {
                //         heading: `An Artist’s Story`,
                //         img: require("../../../../../../access/image/careers/whyYouMight/story/whyyou_story_artist.edf5c517.jpg"),
                //         name: `On The Job`,
                //         part: `part II`,
                //     },
                //     bottom: {
                //         left: (
                //             <>
                //                 <p>
                //                     <i>
                //                         What we’ve noticed is that if we don’t
                //                         work directly with the artists
                //                         themselves – meaning the very people who
                //                         are doing the work that we’re
                //                         commissioning from them – we easily end
                //                         up with results rather different from
                //                         what we had in mind. This is only
                //                         natural, because working through layers
                //                         of management means things, even
                //                         important things, may get lost in
                //                         translation. This costs time and money,
                //                         and can be demoralizing for everyone
                //                         involved.
                //                     </i>
                //                 </p>
                //                 <p>
                //                     <i>
                //                         Talking to the artists without depending
                //                         on proxies comes with two additional
                //                         benefits. First of all, we get a much
                //                         better understanding of how the studio
                //                         actually goes about doing its work. With
                //                         that information, it’s much easier for
                //                         us to formulate our requests. Besides,
                //                         we then know where our assistance might
                //                         be needed, and where our input might
                //                         only be an unproductive distraction.
                //                     </i>
                //                 </p>
                //                 <p>
                //                     <i>
                //                         Secondly, an open connection between
                //                         people is crucial for building trust. We
                //                         want our partners to know who we are,
                //                         and vice-versa. Sometimes, when we’re
                //                         working on projects to tight deadlines,
                //                         there’s a risk that everyone involved
                //                         may end up doing an all-nighter to wrap
                //                         up a project on time.
                //                     </i>
                //                 </p>
                //             </>
                //         ),
                //         right: (
                //             <>
                //                 <p>
                //                     <i>
                //                         We want those artists to know that they
                //                         are doing it with us, as a temporary
                //                         team of sorts on a collective effort,
                //                         rather than having them feel that they
                //                         are doing it just to keep their bosses
                //                         happy. This shared sense of purpose has
                //                         an incredible impact on the quality of
                //                         the output.
                //                     </i>
                //                 </p>
                //                 <p>
                //                     <i>
                //                         The type of relationship described here
                //                         is just as relevant within Supercell.
                //                         Whatever you’re working on is not
                //                         something you’re doing because your boss
                //                         told you to do it, which is because
                //                         their boss told them to deliver it.
                //                         You’re doing it for and with your team,
                //                         because you and your colleagues have a
                //                         mutual dedication to create something
                //                         you can all be genuinely proud of.
                //                     </i>
                //                 </p>
                //             </>
                //         ),
                //     },
                // },
            ]}
            type="fullScreen"
        />
    );
};

export default Story;
