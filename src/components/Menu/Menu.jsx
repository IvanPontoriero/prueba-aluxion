import { useState } from 'react';
import { MenuContainer, Logo, MenuWrapper, Hamburger, 
        Navbar, NavLogo, List, Item, Link, Footer, FooterList, FooterItem,
        FooterLink } from './Menu.elements'

const Menu = () => {

    const [ click, setClick ] = useState(false);

    const changeClick = () => {
        setClick(!click)
    }

    return (
        <MenuContainer>
            <Logo>mater</Logo>
            <MenuWrapper onClick={() => changeClick()} click={click}>
                    <Hamburger click={click}></Hamburger>
            </MenuWrapper>
            <Navbar click={click}>
            <NavLogo>mater</NavLogo>

                <List>
                    <Item><Link>collection</Link></Item>
                    <Item><Link>design</Link></Item>
                    <Item><Link>craftmanship</Link></Item>
                    <Item><Link>ethics</Link></Item>
                </List>
                <Footer>
                    <FooterList>
                        <FooterItem><FooterLink>about</FooterLink></FooterItem>
                        <FooterItem><FooterLink>contact</FooterLink></FooterItem>
                        <FooterItem><FooterLink>dealers</FooterLink></FooterItem>
                        <FooterItem><FooterLink>news</FooterLink></FooterItem>
                        <FooterItem><FooterLink>care</FooterLink></FooterItem>
                        <FooterItem><FooterLink>press</FooterLink></FooterItem>
                    </FooterList>
                </Footer>
            </Navbar>
        </MenuContainer>
    )
}

export default Menu;