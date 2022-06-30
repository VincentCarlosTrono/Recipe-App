import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  const [detailData, setDetailData] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  useEffect(() => {
    fetchDetails(params.name);
  }, [params.name]);

  const fetchDetails = async () => {
    const data =
      await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}
        `);
    const detailData = await data.json();
    setDetailData(detailData);
  };

  return (
    <DetailWrapper>
      <div>
        <h2>{detailData.title}</h2>
        <img src={detailData.image} alt={detailData.id} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => {
            setActiveTab("instructions");
          }}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => {
            setActiveTab("ingredients");
          }}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: detailData.summary }}></h3>
            <h3
              dangerouslySetInnerHTML={{ __html: detailData.instructions }}
            ></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {detailData.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5;
  display: flex;
  .active {
    background: linear-gradient(35deg, gray, black);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: black;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600px;
`;
const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
