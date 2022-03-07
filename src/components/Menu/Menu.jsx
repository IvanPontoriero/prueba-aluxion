import { useState } from 'react';
import { MenuContainer, Logo, MenuWrapper, Hamburger, 
        Navbar, NavLogo, List, Dropdown, DropdownItem, DropdownImage, Item, Link, Footer, FooterList, FooterItem,
        FooterLink } from './Menu.elements'
import Silla from '../../assets/images/silla-negra.png'
import Sillon from '../../assets/images/sofa-blanco.png'
import Mesa from '../../assets/images/mesa-negra.png'

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
                    <Item>
                        <Link>collection</Link>
                        <Dropdown>
                            <DropdownItem id='1'>
                                furniture
                                <DropdownImage src={ Sillon }/>
                            </DropdownItem>
                            <DropdownItem id='2'>
                                lighting
                                <DropdownImage src={ Mesa }/>
                            </DropdownItem>
                            <DropdownItem id='3'>
                                accesories
                                <DropdownImage src={ Silla }/>
                            </DropdownItem>
                        </Dropdown>
                    </Item>
                    <Item>
                        <Link>design</Link>
                        <Dropdown>
                            <DropdownItem id='1'>
                                furniture
                                <DropdownImage src={ Sillon }/>
                            </DropdownItem>
                            <DropdownItem id='2'>
                                lighting
                                <DropdownImage src={ Mesa }/>
                            </DropdownItem>
                            <DropdownItem id='3'>
                                accesories
                                <DropdownImage src={ Silla }/>
                            </DropdownItem>
                        </Dropdown>
                    </Item>
                    <Item>
                        <Link>craftmanship</Link>
                        <Dropdown>
                            <DropdownItem>furniture</DropdownItem>
                            <DropdownItem>lighting</DropdownItem>
                            <DropdownItem>accesories</DropdownItem>
                        </Dropdown>
                    </Item>
                    <Item>
                        <Link>ethics</Link>
                        <Dropdown>
                            <DropdownItem>furniture</DropdownItem>
                            <DropdownItem>lighting</DropdownItem>
                            <DropdownItem>accesories</DropdownItem>
                        </Dropdown> 
                    </Item>
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