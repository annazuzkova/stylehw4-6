import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column:
//   alight-item: center
// `;

const Container = styled.div`
  background: #ffffff;
  border-radius: 28px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  border: 5px dashed;
  border-color: ${({ active }) => (active ? "#ff6b6b" : "transparent")};
`;

const ImageBox = styled.div`
  border-radius: 24px;
  height: 230px;
  width: 300px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-top: 6px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  font-size: 13px;
  color: #666;
`;

const InfoItem = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  background: #f7f7f7;
  padding: 6px 10px;
  border-radius: 999px;
`;

const DifficultyBox = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 12px;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const DifficultyLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const DifficultyList = styled.div`
  display: flex;
  gap: 8px;
`;

const Difficulty = styled.span`
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  background: ${({ active }) => (active ? "#ff6b6b" : "#f3f3f3")};
  color: ${({ active }) => (active ? "#fff" : "#888")};
`;

export const Card = ({ object }) => {
  return (
    <Container active={object.level === 3}>
      <ImageBox>
        {" "}
        <img src={object.img} alt={object.text} />
      </ImageBox>

      <Title>{object.text}</Title>

      <InfoRow>
        <InfoItem>⏱{object.time} min</InfoItem>
        <InfoItem>🍽 {object.servings} servings</InfoItem>
        <InfoItem>🔥{object.kcal} kcal</InfoItem>
      </InfoRow>

      <DifficultyBox>
        <DifficultyLabel>Difficulty</DifficultyLabel>
        <DifficultyList>
          <Difficulty active={object.level === 1}>Easy</Difficulty>
          <Difficulty active={object.level === 2}>Medium</Difficulty>
          <Difficulty active={object.level === 3}>Hard</Difficulty>
        </DifficultyList>
      </DifficultyBox>
    </Container>
  );
};
