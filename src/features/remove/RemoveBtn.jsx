import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setRemove } from "../controls/controls-slice";

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

const RemoveBtn = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(setRemove(id));
  };

  return (
    <CardBtn onClick={handleRemove} id={id}>
      Remove
    </CardBtn>
  );
};

export default RemoveBtn;
