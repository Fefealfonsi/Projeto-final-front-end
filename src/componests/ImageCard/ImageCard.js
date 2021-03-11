import React from 'react';
import {goToDetail} from "../../router/cordinator";
import { useHistory } from 'react-router-dom';
import { ImageContainer, CardContainer,Image } from './styled'

function ImageCard(props) {

    const history = useHistory()

    return (
        <CardContainer >
            <ImageContainer>

                <Image src={props.file} alt={'logotipo'} onClick={() => goToDetail(history, props.id)} />
              

            </ImageContainer>
            <p>{props.subtitle}</p>
            
        </CardContainer>


    );
}

export default ImageCard;
