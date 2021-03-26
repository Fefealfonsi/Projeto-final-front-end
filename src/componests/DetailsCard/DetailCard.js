import React from "react";
import { useHistory } from "react-router-dom";
import { ImageContainer, DetailContainer, Image, DeleteButton } from "./styled";
import { deleteImage } from "../../services/image";
import { goToFeed } from "../../router/cordinator";


function DetailCard(props) {
  const history = useHistory();

  const deleteThisImage = (id) => {
    deleteImage(id, props.getData, () => goToFeed(history));
  };

  return (
    <DetailContainer>
      <ImageContainer>
        <Image src={props.file} alt={"logotipo"} />
      </ImageContainer>
      <div>
        <p>{props.subtitle}</p>
        <p>{props.date}</p>
        <p>{props.tags}</p>
        <p>{props.collection}</p>
      </div>

      <DeleteButton onClick={() => deleteThisImage(props.id)}>X</DeleteButton>
    </DetailContainer>
  );
}
export default DetailCard;
