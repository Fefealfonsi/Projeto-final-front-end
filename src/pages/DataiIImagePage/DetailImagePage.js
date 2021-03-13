import React from "react";
import { useRequestData } from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import DetailCard from "../../componests/DetailsCard/DetailCard";
import { ImageContainer, DetailContainer } from "./styled";
import { useParams } from "react-router-dom";

function DetailImagePage() {
  const { id } = useParams();

  useProtectedPage();

  const BASE_URL = "https://pinterpets.herokuapp.com";

  const [data] = useRequestData(`${BASE_URL}/image/getImage/${id}`, undefined);

  console.log("DataDetail", data);

  console.log("ID", id);

  const image = data && data.result;

  console.log("Image", image);

  return (
    <DetailContainer>
      <ImageContainer>
        <div>
          <h2>Detalhes da imagem de {image && image.result.nickname} </h2>
        </div>
        {image && 
        <DetailCard
          subtitle={image.result.subtitle}
          file={image.result.file}
          date={image.result.date}
          collection={image.result.collection}
          tags={image.result.tags}
        />}
      </ImageContainer>
    </DetailContainer>
  );
}

export default DetailImagePage;
