import React from 'react';
import {goToDetail} from "../../router/cordinator";
import { useHistory } from 'react-router-dom';
import { ImageContainer, DetailContainer,Image } from './styled'

function DetailCard(props) {

   

    return (
        <DetailContainer >
            <ImageContainer>
                <Image src={props.file} alt={'logotipo'} />
            </ImageContainer>
            <div>
                <p>{props.subtitle}</p>
                <p>{props.date}</p>
                <p>{props.tags}</p>
                <p>{props.collection}</p>
            </div>
        </DetailContainer>
    );
}
export default DetailCard;