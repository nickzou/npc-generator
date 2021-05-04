//External Libraries
import styled from 'styled-components';

//Internal Utilities
import breakpoints from '../../variables/breakpoints';

import tile from './cream-pixels.png'

export const Wrapper = styled.div`
    width: auto;
    height: auto;
    background-image: url("${tile}");
    /* background-image: url("https://www.transparenttextures.com/patterns/simple-dashed.png"); */
    /* background-image: url("https://www.transparenttextures.com/patterns/soft-wallpaper.png"); */
    box-shadow: 0 0 8px 8px white inset;

`;

export const Inner = styled.div`
    padding-bottom: 5px;
    padding-right: 15px;
    /* transform: scale(0.98); */
`;
