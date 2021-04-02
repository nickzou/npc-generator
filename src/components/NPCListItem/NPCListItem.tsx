//External Libraries
import styled from 'styled-components';
import PropTypes from 'prop-types';

//Internal Utilities
import breakpoints from '../../variables/breakpoints';

const Wrapper = styled.div`
    position: relative;
    background-color: red;
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
            <ImageWrapper></ImageWrapper>
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
    name: PropTypes.string,
    age: PropTypes.string,
    species: PropTypes.string
};

export default NPCListItem;