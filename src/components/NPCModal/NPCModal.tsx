
//Components Styles
import {
    Wrapper, 
    ImageWrapper, 
    Portrait, 
    Background,  
    Name, 
    Subtitle, 
    ButtonWrapper,
    Pocession,
    Description
} from './styles'


interface npcDesc {
    character: string[],
    asthetics: string[],
    story: string[],
    drives: string[]
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
    description: npcDesc,
    possessions: npcItem[]
}

interface props {
    npcData: npcData,
    modalToggle: boolean
}

const NPCModal = ( props : props ) => {
    const npc = props.npcData
    return (
        <Wrapper className={`${props.modalToggle ? 'active': ''} dropshadow`}>
            <article className="container-md">
                <ButtonWrapper>
                    <button>save</button>
                    <button>X</button>
                </ButtonWrapper>
                <div className="row align-items-center no-gutters">
                    <section className="col-md">
                        <ImageWrapper>
                            <Portrait>
                                <img src={npc.portraitFace} alt={npc.name}/>
                            </Portrait>
                            <Background>
                                <img src={npc.portraitBg} alt={`portrait background`} />
                            </Background>
                        </ImageWrapper>
                    </section>
                    <section className="col-md">
                        <Name className="almendra">{npc.name}</Name>
                        <Subtitle className="pt-serif">{npc.age}/{npc.species}</Subtitle>
                    </section>
                </div>
                <section className="row">
                    <div className="col-md">
                        <Description>
                            <Name className="pt-serif">Character</Name>
                            <ul>
                                {npc.description.character.map((trait)=><li>{trait}</li>)}
                            </ul>
                        </Description>
                        
                        <Description>
                            <Name className="pt-serif">Asthetics</Name>
                            <ul>
                                {npc.description.asthetics.map((trait)=><li>{trait}</li>)}
                            </ul>

                        </Description>
                        

                    </div>
                    <div className="col-md">
                        <Description>
                            <Name className="pt-serif">Drives</Name>
                            <ul>
                                {npc.description.drives.map((trait)=><li>{trait}</li>)}
                            </ul>
                        </Description>
                        <Description>
                            <Name className="pt-serif">Story</Name>
                            <ul>
                                {npc.description.story.map((trait)=><li>{trait}</li>)}
                            </ul>
                        </Description>
                        
                    </div>
                </section>
                

                <section className="row">
                    <Name className="pt-serif">Pocessions</Name>
                    <div className="row">
                        <div className="col-md">
                            {npc.possessions.map((item, index)=>index >= Math.round(npc.possessions.length/2) && (<Pocession>{item.display}</Pocession>) )}
                        </div>
                        <div className="col-md">
                            {npc.possessions.map((item, index)=>index < Math.round(npc.possessions.length/2) && (<Pocession>{item.display}</Pocession>) )}
                        </div>
                    </div>
                </section>

            </article>
        </Wrapper>
    )
};



export default NPCModal;