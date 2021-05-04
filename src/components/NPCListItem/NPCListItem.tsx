import Dropshadow from '../Dropshadow/Dropshadow'

//Components Styles
import {
    Wrapper, 
    ImageWrapper, 
    Portrait, 
    Background,  
    Name, 
    Subtitle, 
    ButtonWrapper,
    ContentWrapper
} from './styles'


interface props {
    portrait: string,
    background: string,
    name: string,
    age: string,
    species: string,
    npcRawData: any,
    setModalToggle: any,
    setActiveNPC: any
}

const NPCListItem = (props : props) => {
    return (
        <Dropshadow>
            <Wrapper className="dropshadow">
                <ImageWrapper>
                    <Portrait>
                        <img src={props.portrait} />
                    </Portrait>
                    <Background>
                        <img src={props.background} />
                    </Background>
                </ImageWrapper>
                <ContentWrapper>
                    <Name className="almendra">{props.name}</Name>
                    <Subtitle className="pt-serif">{props.age}/{props.species}</Subtitle>
                    <ButtonWrapper>
                        <button>Save</button>
                        <button>Stats</button>
                        <button onClick={()=>{props.setModalToggle(true); props.setActiveNPC({
                            portraitFace: props.portrait,
                            portraitBg: props.background,
                            name: props.name,
                            age: props.age,
                            species: props.species,
                            description: props.npcRawData.description,
                            possessions: props.npcRawData.possessions
                        })}}>open</button>
                    </ButtonWrapper>
                </ContentWrapper>
            </Wrapper>

        </Dropshadow>
        
    )
};





export default NPCListItem;