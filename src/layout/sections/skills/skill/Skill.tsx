import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/Icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type PropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: PropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
               <IconWrapper>
                   <Icon iconId={props.iconId}/>
               </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>

    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 28px 40px;
`

const IconWrapper = styled.div`
position: relative;
    
    &::before {
        position: absolute;
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.10);
        transform: rotate(45deg) translate(-50%, -50%);
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`


const SkillTitle = styled.h3`
    margin: 70px 0 15px;

    font-family: "Josefin Sans",sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
`
const SkillText = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
`