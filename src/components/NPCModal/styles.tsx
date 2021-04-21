//External Libraries
import styled from 'styled-components';

//Internal Utilities
import breakpoints from '../../variables/breakpoints';

export const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    padding: 1rem;
    background: rgb(200,200,200);
    z-index: 100;
    top: 0;
    transform: translateY(-100%);
    transition: transform 250ms;
    display: flex;
    justify-content: center;
    &.active{
        transform: translateY(0%); 
    }
    section{
        margin-bottom: 40px;
    }
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    z-index: 1;
    button {
        margin-right: 8px;
        &:last-of-type {
            margin-right: 0;
        }
    }
`

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 340px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const Portrait = styled.div`
    position: absolute;
    z-index: 1;
    width: auto;
    height: 80%;
    object-fit: contain;
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

export const Pocession = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 1px solid #dedede;
    margin-bottom: 1rem;
`;

export const Description = styled.div`
    margin-bottom: 1rem;
    ul{
        padding-left: 1rem;
    }
`

