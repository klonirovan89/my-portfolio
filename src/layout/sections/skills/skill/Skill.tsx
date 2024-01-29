import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/Icon/Icon";

type PropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: PropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>

    );
};

const StyledSkill = styled.div`
    width: 33%;
    background-color: blueviolet;
    margin: 10px;
`
const SkillTitle = styled.h3`

`
const SkillText = styled.p`

`