import styled from 'styled-components'
import * as vars from '../../styleVars/style.variables';

export const DotsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 10vh;
    position: fixed;
    bottom: 0;
    background: #FFFFFF;
    border-top: 1px solid ${vars.CLEAR_TEXT};
    padding-left: 3em;
    z-index: 5;

    @media screen and (min-width: 768px) {
        height: 10vh;
    }
`;

export const DotBlock = styled.div`
    cursor: pointer;
    width: auto;
    // height: 100%;
    padding: .8em;
    padding-top: 0;
    border: 1px solid ${vars.CLEAR_TEXT};
    opacity: .8;
    transition: all 1000ms;

    &:hover {
        transform-origin: top-left;
        opacity: 1;
        border-top: 1px solid #000000;
    }
`;


export const Number = styled.span`
    font-size: .5rem;
    color: ${vars.CLEAR_TEXT};

    @media screen and (min-width: 768px) {
        font-size: .7rem;
    }
`;

export const Text = styled.p`
    font-size: .8rem;
    color: ${vars.DARK_TEXT};
    letter-spacing: ${vars.SPACCING};

    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }
`;