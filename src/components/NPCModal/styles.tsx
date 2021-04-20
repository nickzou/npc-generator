//External Libraries
import styled from 'styled-components';

//Internal Utilities
import breakpoints from '../../variables/breakpoints';

export const Wrapper = styled.div`
    width: 100%;
    padding: 1rem;
    background: rgb(200,200,200);
`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    @media ${breakpoints.tablet} {    
        padding-top: 29.3%;
    }
    @media ${breakpoints.laptop} {
        padding-top: 0;
        height: 340px;
        flex-shrink: 0;
    }
`;

export const Portrait = styled.div`
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

export const Background = styled.div`
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

export const ContentWrapper = styled.div`
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

export const Name = styled.h2`
    font-size: 21px;
    margin-bottom: 6px;
    @media ${breakpoints.tablet} {    
        font-size: 26px;
    }
`;

export const Subtitle = styled.span`
    font-size: 14px;
`;

export const ButtonWrapper = styled.div`
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
