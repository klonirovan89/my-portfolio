import React from 'react';

import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/proj-1.png";
import timerImg from "./../../../assets/images/proj-2.png";
import {TabMenu} from "./tabMenu/TabMenu";
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"

const worksItem = ["All", "Landing page", "React", "SPA",]
const workData = [
    {
        src: socialImg,
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        src: timerImg,
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItem}/>
                <FlexWrapper justify={"space-around"} align={"flex-start"} wrap={"wrap"}>
                    {workData.map((work, index) => {
                            return (
                                <Work
                                    key={index}
                                    src={work.src}
                                    title={work.title}
                                    text={work.text}/>
                            )
                        }
                    )}
                </FlexWrapper>
            </Container>
        </S.Works>
    )
}