import styled from 'styled-components';

export const Logo = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 80px;
    position: sticky;
    top: 0;
    padding-top: 1em;
    background-color: #FFFFFF;
`;

export const MenuWrapper = styled.div`
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    margin: 2em;
    width: 2em;
    height: 2em;
    border: 1px solid #222222;
    display: flex;
    align-items: center;
    z-index: 9999;
`;


export const Hamburger = styled.span`
    display: flex;
    background: ${({click}) => (click ? '#FFFFFF' : '#222222')};
    height: 2px;
    width: ${({click}) => (click ? '0px' : '.6em')};
    border-radius: 2px;
    position: relative;
    justify-items: center;
    left: 6px;
    transform: ${({click}) => (click ? 'rotate(45deg)' : 'rotate(0)')};
    transition: all 500ms ease-in;
    &:before {
        content: '';
        display: block;
        background: ${({click}) => (click ? '#FFFFFF' : '#222222')};
        height: 2px;
        border-radius: 2px;
        position: relative;
        width: ${({click}) => (click ? '1.8em' : '1em')};
        position: absolute;
        bottom: 7px;
        left: ${({click}) => (click ? '-7px' : '0px')};
        transform: ${({click}) => (click ? 'rotate(-90deg)' : 'rotate(0)')};
    }
    &:after {
        content: '';
        display: block;
        background:${({click}) => (click ? '#FFFFFF' : '#222222')};
        height: 2px;
        border-radius: 2px;
        position: relative;
        width: ${({click}) => (click ? '1.8em' : '.4em')};
        position: absolute;
        top: ${({click}) => (click ? '-7px' : '7px')};
        left: ${({click}) => (click ? '-7px' : '.6em')};
    }
`;

export const Navbar = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    justify-content: center;
    align-items: center;
    right: ${({click}) => (click ? 0 : "-100%")};
    background-color: #000000;
    transition: all 500ms ease-out;
`; 

export const NavLogo = styled.h1`
    padding-block: 1em;
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    color: #FFFFFF;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const Item = styled.li`
    // height: 100%;
    padding: 1rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 2rem;
    font-weight: 400;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #FFFFFF;
`;

export const Footer = styled.div`
    width: 100%;
    height: 25vh;
`;

export const FooterList = styled.ul`
    display: flex;
    height: 100%;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
`;

export const FooterItem = styled.li`
    padding-inline: 1.8rem;
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    height: 2vh;
`;

export const FooterLink = styled.a`
    text-decoration: none;
    color: #FFFFFF;
`;