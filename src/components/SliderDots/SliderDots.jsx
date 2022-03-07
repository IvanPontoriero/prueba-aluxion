import { DotsContainer, DotBlock, Number, Text} from './SliderDots.elements'
import { Link } from 'react-scroll'

const SliderDots = () => {
    return (
        <DotsContainer>
            <Link activeClass="active" to="shell-dining-chair" containerId="shell-dining-chair" spy={true} 
                    smooth={true} offset={100} duration={500}>
                <DotBlock>
                    <Number>01</Number>
                    <Text>Shell Dining Chair</Text>
                </DotBlock>
            </Link>                
            <Link activeClass="active" to="dunes-anthrazite-black" spy={true} 
                    smooth={true} offset={100} duration={500}>
                <DotBlock>
                    <Number>02</Number>
                    <Text>Dunes Anthrazite Black</Text>   
                </DotBlock>
            </Link>                
            <Link activeClass="active" to="deluxe-couch-white" spy={true} 
                    smooth={true} offset={100} duration={500}>
                <DotBlock>
                    <Number>03</Number>
                    <Text>Deluxe Armchair Bone</Text>        
                </DotBlock>
            </Link>
        </DotsContainer>
    )
}

export default SliderDots;