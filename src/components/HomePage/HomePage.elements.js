import styled from 'styled-components'
import * as vars from '../../styleVars/style.variables';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const ParallaxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100vw;
    // height: 100vh;
    padding-inline: 2em;
    scroll-behaviour: smooth;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-evenly;
        padding-inline: 3em;
    }
`;

export const LeftSection = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;

    @media screen and (min-width: 768px) {
        width: 50%;
        padding-block: 4em;
    }
`;

export const RightSection = styled(LeftSection)`
    width: 40vw;
`;

export const GrayText = styled.p`
    font-size: 1rem;
    color: ${vars.CLEAR_TEXT};

    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
        padding-block: 2em;
    }

    @media screen and (min-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const Subtitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: ${vars.DARK_TEXT};
    letter-spacing: ${vars.SPACCING};

    @media screen and (min-width: 768px) {
        font-size: 2.5rem;
        text-shadow: ${vars.SHADOW};
    }
`;

export const Button = styled.button`
    position: fixed;
    top: 70%;
    left: 5%;
    padding: 1em;
    margin: 1em;
    background: #000000;
    color: #FFFFFF;
    text-shadow: ${vars.SHADOW};
    border: 1px solid #000000;
    border-radius: 1em 0;
    z-index: 10;
    transition: all 400ms ease-in-out;

    :hover {
        border-radius: 0 1em;
        box-shadow: 0 0 2em #222222;
    }
`; 

export const Image = styled.img`
    height: 60vh;
`;