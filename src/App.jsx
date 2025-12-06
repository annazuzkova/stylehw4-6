import { Card } from "./components/Card";
import "./App.css";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyles";

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
`;

function App() {
  const menuArray = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCRuiY5SdxVF4SE_yTWLh3VO5RXUFTizDSA&s",
      text: "burger",
      time: "20 min",
      servings: 6,
      kcal: "210",
      level: 2,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5Ccqr_5QEA6T-DE_meX2LnjieEwsLNGxpw&s",
      text: "salat",
      time: "5 min",
      servings: 7,
      kcal: "100",
      level: 1,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76P-KvTTQrRiM8vmb7p76hYXUsd40LscejQ&s",
      text: "cake",
      time: "3 hours",
      servings: 8,
      kcal: "300",
      level: 3,
    },
  ];

  return (
    <>
      {" "}
      <GlobalStyle></GlobalStyle>
      <Wrapper>
        {menuArray.map((dish) => {
          return <Card object={dish}></Card>;
        })}
      </Wrapper>
    </>
  );
}

export default App;
