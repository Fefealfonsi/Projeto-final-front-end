import React from "react";
import { useRequestData } from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import ImageCard from "../../componests/ImageCard/ImageCard";
import {
  ImageContainer,
  FeedContainer,
  CreateButton,
  ImageCreate,
  Loading,
} from "./styled";
import fotografia from "../../img/fotografia.png";
import { goToCreate } from "../../router/cordinator";
import { useHistory } from "react-router-dom";

function FeedPage() {
  useProtectedPage();

  const history = useHistory();

  const BASE_URL = "https://pinterpets.herokuapp.com";

  const [data] = useRequestData(`${BASE_URL}/image/getImage`, undefined);

  console.log("Data",data)
  // const users = data &&
  //   data.result.map((user) => {
  //     return user.name;
  //   });

  // const userName = (users && users[0]);
  //   console.log("userName:",userName)
  return (
    <FeedContainer>
      <CreateButton>
        <h2>Bem vindo !</h2>
        <ImageCreate
          src={fotografia}
          alt={"criar imagem"}
          onClick={() => goToCreate(history)}
        />
      </CreateButton>

      <ImageContainer>
        {data?
          data.result.map((image) => {
            return (
              <ImageCard
                key={image.id}
                id={image.id}
                subtitle={image.subtitle}
                file={image.file}
              />
            );
          }):<Loading>
            <div></div>
            
          </Loading>}
      </ImageContainer>
    </FeedContainer>
  );
}

export default FeedPage;
