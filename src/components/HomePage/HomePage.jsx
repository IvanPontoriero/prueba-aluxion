import { ScrollContainer, ScrollPage, Animator, Sticky, Fade, Move, batch } from 'react-scroll-motion'
import { Container, ParallaxContainer, 
    LeftSection, RightSection, GrayText, 
    Subtitle, Button, Image } from './HomePage.elements'
import Silla from '../../assets/images/silla-negra.png'
import Sillon from '../../assets/images/sofa-blanco.png'
import Mesa from '../../assets/images/mesa-negra.png'

const defineHeight = {
    height: '80vh'
}

const MoveInScrollOut = batch(Sticky(), Move(0, 500), Fade(0, 1)) 

const HomePage = () => {

    return (
        <ScrollContainer>
            <Button>Product details</Button>
            <ScrollPage page={0} style={defineHeight}>
                <Animator animation={batch(Sticky(), Move(0, -500), Fade(0, 1))} >
                    <ParallaxContainer id='shell-dining-chair' >
                        <LeftSection>
                            <GrayText>Michael W. Dreeben</GrayText>
                            <Subtitle>Shell Dining Chair</Subtitle>
                            <GrayText>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Cupiditate enim nostrum commodi architecto corporis molestiae, laboriosam ab quo molestias! 
                                Error vel assumenda veniam pariatur eveniet incidunt quod sit, maiores sint.
                            </GrayText>
                        </LeftSection>
                        <RightSection>
                            <Image src={ Silla } alt='silla negra' />
                        </RightSection>  
                    </ParallaxContainer>
                </Animator>                
            </ScrollPage>  
            <ScrollPage page={1} style={defineHeight}>
                <Animator animation={MoveInScrollOut} >
                    <ParallaxContainer id='dunes-anthrazite-black'>
                            <LeftSection>
                                <GrayText>Jeaper K. Thoms</GrayText>
                                <Subtitle>Dunes Anthrazite Black</Subtitle>
                                <GrayText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Cupiditate enim nostrum commodi architecto corporis molestiae, laboriosam ab quo molestias! 
                                    Error vel assumenda veniam pariatur eveniet incidunt quod sit, maiores sint.
                                </GrayText>
                            </LeftSection>
                            <RightSection>
                                <Image src={ Mesa } alt='silla negra' />             
                            </RightSection>                            
                        </ParallaxContainer>
                    </Animator>    
            </ScrollPage>
            <ScrollPage page={2} style={defineHeight}>
                <Animator animation={MoveInScrollOut}>
                    <ParallaxContainer id='deluxe-couch-white'>
                        <LeftSection>
                            <GrayText>André-Charles Boulle</GrayText>
                            <Subtitle>Deluxe Couch White</Subtitle>
                            <GrayText>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Cupiditate enim nostrum commodi architecto corporis molestiae, laboriosam ab quo molestias! 
                                Error vel assumenda veniam pariatur eveniet incidunt quod sit, maiores sint.
                            </GrayText>
                        </LeftSection>
                        <RightSection>
                            <Image src={ Sillon } alt='silla negra' />
                        </RightSection>  
                    </ParallaxContainer>
                </Animator>                
            </ScrollPage>     
        </ScrollContainer>
    )
}

export default HomePage;