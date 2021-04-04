//External Libraries
import styled from 'styled-components';
import PropTypes from 'prop-types';

//Internal Utilities
import breakpoints from '../../variables/breakpoints';

const Wrapper = styled.div`
    position: relative;
    background-color: red;
    margin-bottom: 24px;
    @media ${breakpoints.laptop} {
        width: 400px;
        height: 550px;
        display: flex;
        flex-direction: column;
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 35.5%;
    @media ${breakpoints.tablet} {    
        padding-top: 29.3%;
    }
    @media ${breakpoints.laptop} {
        padding-top: 0;
        height: 340px;
        flex-shrink: 0;
    }
`;

const Portrait = styled.div`
    position: absolute;
    z-index: 1;
    width: 125px;
    height: 125px;
    object-fit: contain;
    bottom: 0;
    left: 30px;
    @media ${breakpoints.tablet} {
        width: 180px;
        height: 180px;
    }
    @media ${breakpoints.laptop} {
        width: 270px;
        height: 270px;
        left: 50%;
        transform: translateX(-50%);
    }
    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

const Background = styled.div`
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    object-fit: cover;
    overflow: hidden;
    img {
        min-width: 100%;
        min-height: 100%;
        width: 100%;
        height: auto;
    }
`;

const ContentWrapper = styled.div`
    position: relative;
    width: calc(100% - 24px);
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 12px;
    @media ${breakpoints.laptop} {
        flex-grow: 1;
        text-align: center;
        justify-content: center;
        padding-bottom: 60px;
    }
`;

const Name = styled.h2`
    font-size: 21px;
    margin-bottom: 6px;
    @media ${breakpoints.tablet} {    
        font-size: 26px;
    }
`;

const Subtitle = styled.span`
    font-size: 14px;
`;

const ButtonWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 12px;
    transform: translateY(-50%);
    display: flex;
    @media ${breakpoints.laptop} {
        top: initial;
        bottom: 30px;
        right: 50%;
        transform: translate(50%, -50%);
    }
    button {
        margin-right: 8px;
        &:last-of-type {
            margin-right: 0;
        }
    }
`;

const NPCListItem = (props:any) => {
    return (
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
                </ButtonWrapper>
            </ContentWrapper>
        </Wrapper>
    )
};

NPCListItem.propTypes = {
    portrait: PropTypes.string,
    background: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.string,
    species: PropTypes.string
};

export default NPCListItem;