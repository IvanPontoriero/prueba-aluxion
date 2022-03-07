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
`;

export const DotBlock = styled.div`
    cursor: pointer;
    width: auto;
    height: 100%;
    padding: .8em;
    border: 1px solid ${vars.CLEAR_TEXT};
    opacity: .5;
    transition: all 500ms;
`;


export const Number = styled.span`
    font-size: .7rem;
    color: ${vars.CLEAR_TEXT};

    ::after {

    }
`;

export const Text = styled.p`
    font-size: 1rem;
    color: ${vars.DARK_TEXT};
    letter-spacing: ${vars.SPACCING};
`;