import styled from "styled-components"
import {theme} from "../../../styles/Theme";
import {font} from "../../../Common";

const Main = styled.section`
    min-height: 100vh;
    background: #1F1F20;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    margin-top: 65px;

    &::before {
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};

        position: absolute;
        top: -20px;
        left: 24px;
        z-index: -1;

        @media ${theme.media.mobile} {
            width: 300px;
            height: 403px;
            top: -11px;
            left: 20px;
        }
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;

    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`

const MainTitle = styled.h1`
    ${font({weight: 400, Fmax: 27, Fmin: 20})}
`

const Name = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 26})}
    letter-spacing: 0.05em;
    margin: 10px 0;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;

    span {
        position: relative;
        z-index: 0;

        // &::before {
        //     position: absolute;
        //     content: '';
        //     display: inline-block;
        //    
        //     bottom: 0;
        //     z-index: -1;
        //    
        //     width: 100%;
        //     height: 20px;
            //     background-color: ${theme.colors.accent};
        // }
    }

    @media ${theme.media.mobile} {
        margin: 10px 0 10px 0;
    }
`

const SmallText = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 400, Fmax: 20, Fmin: 14})}

    margin-top: 65px;
`

export const S = {
    Main,
    PhotoWrapper,
    Photo,
    MainTitle,
    Name,
    SmallText
}