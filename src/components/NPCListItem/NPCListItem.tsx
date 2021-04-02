//External Libraries
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    position: relative;
    background-color: red;
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 35.5%;
`;

const ContentWrapper = styled.div`
    width: 100%;
    background-color: white;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 6px;
    padding: 12px;
`;

const Name = styled.h2`
    font-size: 21px;
`;

const Subtitle = styled.span`
    font-size: 14px;
`;

const NPCListItem = (props:any) => {
    return (
        <Wrapper className="dropshadow">
            <ImageWrapper></ImageWrapper>
            <ContentWrapper>
                <Name className="almendra">{props.name}</Name>
                <Subtitle className="pt-serif">{props.age}/{props.species}</Subtitle>
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