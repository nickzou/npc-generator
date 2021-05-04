import React from 'react';

import {
    Wrapper, 
    Inner
} from './styles'



const Dropshadow = ( props: any)=>{

    return(
        <Wrapper>
            <Inner>
                {props.children}
            </Inner>
        </Wrapper>
    )
}

export default Dropshadow