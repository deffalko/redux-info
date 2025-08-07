import styled from "styled-components";
import ToggleSwitch from "./ToggleSwitch";

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  object-fit: cover;
  object-position: center;
  max-height: 50px;
  // box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 0px 10px 0px 10px;
  height: 85px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 5px 0 0;
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const CardInfo = styled.div`
  display: flex;
  padding: 14px 14px 0px 14px;
`;

const CardBtn = styled.button`
  background-color: #cccccc; /* серый цвет */
  border: none; /* убираем рамку */
  padding: 8px 16px; /* внутренние отступы */
  border-radius: 15px; /* чуть закруглённые углы */
  cursor: pointer; /* курсор при наведении */
  font-size: 14px; /* размер шрифта */
  background-color: var(--colors-ui-base);
  border: 0.1px solid white;
  color: white;
  margin: 10px 0px 10px 14px;
`;
const CardGot = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Card = ({ logo, name, id, info = [] }) => {
  return (
    <Wrapper>
      <CardInfo>
        <CardImage src={logo} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardList>
            {info.map((el) => (
              <CardListItem key={el.name}>
                <b>{el.description}</b>
              </CardListItem>
            ))}
          </CardList>
        </CardBody>
      </CardInfo>
      <CardGot>
        <CardBtn>Remove</CardBtn>
        <ToggleSwitch id={id} />
      </CardGot>
    </Wrapper>
  );
};
