//External Libraries
// import styled from 'styled-components';

//Internal Utilities
// import breakpoints from '../../variables/breakpoints';

//Components Styles
import {Wrapper, ImageWrapper, Portrait, Background, ContentWrapper, Name, Subtitle, ButtonWrapper} from './styles'


interface npcTrait {
    description: string,
    type: string
}
interface npcItem {
    display: string,
    type: string
}

interface npcData {
    portraitFace: string,
    portraitBg: string,
    name: string,
    age: string,
    species: string[],
    story: string[],
    voice: string,
    traits: npcTrait[],
    possessions: npcItem[]
}

interface props {
    npcData: npcData,
    modalToggle: boolean
}

const NPCModal = ( props : props ) => {
    const npc = props.npcData
    return (
        <Wrapper className="dropshadow">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    One of three columns
                    </div>
                    <div className="col-sm">
                    One of three columns
                    </div>
                    <div className="col-sm">
                    One of three columns
                    </div>
                </div>
            </div>
            <ImageWrapper>
                <Portrait>
                    <img src={npc.portraitFace} alt={npc.name}/>
                </Portrait>
                <Background>
                    <img src={npc.portraitBg} alt={`portrait background`} />
                </Background>
            </ImageWrapper>
            <ContentWrapper>
                <Name className="almendra">{npc.name}</Name>
                <Subtitle className="pt-serif">{npc.age}/{npc.species}</Subtitle>
                <ButtonWrapper>
                    <button>Save</button>
                    <button>Stats</button>
                </ButtonWrapper>
            </ContentWrapper>
        </Wrapper>
    )
};



export default NPCModal;