import React from 'react';

import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/Icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "../skills/skill/Skills_Styles";
import {C} from "./Testimony_Styles";

export const Testimony:React.FC = () => {
    return (
        <C.Testimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"quote"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </C.Testimony>
    )
}

