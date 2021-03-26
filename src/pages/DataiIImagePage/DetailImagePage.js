import React from "react";
import { useRequestData } from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import DetailCard from "../../componests/DetailsCard/DetailCard";
import { ImageContainer, DetailContainer } from "./styled";
import { useParams } from "react-router-dom";

function DetailImagePage() {
  useProtectedPage();

  const { id } = useParams();

  const BASE_URL = "https://pinterpets.herokuapp.com";

  const [data, getData] = useRequestData(
    `${BASE_URL}/image/getImage/${id}`,
    undefined
  );

  const image = data && data.result;

  return (
    <DetailContainer>
      <ImageContainer>
        <div>
          <h2>Detalhes da imagem de {image && image.result.nickname} </h2>
        </div>
        {image && (
          <DetailCard
            subtitle={image.result.subtitle}
            file={image.result.file}
            date={image.result.date}
            collection={image.result.collection}
            tags={image.result.tags}
            id={id}
            getData={getData}
          />
        )}
      </ImageContainer>
    </DetailContainer>
  );
}

export default DetailImagePage;
