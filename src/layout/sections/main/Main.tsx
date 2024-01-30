import React from 'react';
import styled from "styled-components";
import photo from './../../../assets/images/myPhoto.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Pasha Shcherbachenko</span></Name>
                        <MainTitle>A Web Developer. </MainTitle>
                    </div>
                    <PhotoWrapper><Photo src={photo} alt=""/></PhotoWrapper>

                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background: #1F1F20;
    display: flex;
`

const PhotoWrapper = styled.div`
    position: relative;
z-index: 0;
    &::before {
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        position: absolute;
        top: -24px;
        left: -24px;
        z-index: -1;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    font-size: 27px;
    font-weight: 400;

    display: flex;
    justify-content: flex-start;
`

const Name = styled.h2`
    font-family: "Josefin Sans", sans-serif;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 10px 0;
    
    display: flex;
    justify-content: flex-start;
    

    span {
        position: relative;
        z-index: 0;
        display: flex;
        justify-content: flex-start;
        
        &::before {
            position: absolute;
            bottom: 0;
            z-index: -1;

            content: '';
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
        }
    }
`

const SmallText = styled.h2`
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    font-weight: 400;
`
