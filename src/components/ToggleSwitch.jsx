import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleItem } from "../features/toggle/toggle-slice";

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const SwitchTrack = styled.div`
  width: 50px;
  height: 30px;
  background-color: #ccc;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;
  ${(props) =>
    props.isActive &&
    `
    background-color: #4caf50;
  `}
`;

const Knob = styled.div`
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${(props) => (props.isActive ? "23px" : "3px")};
  transition: all 0.3s;
`;

const ToggleSwitch = ({ id }) => {
  const dispatch = useDispatch();

  // Получаем состояние элемента по id
  const item = useSelector((state) =>
    state.toggle.items.find((it) => it.id === id)
  );

  const handleClick = () => {
    dispatch(toggleItem(id));
  };

  if (!item) return null; // или отображать ошибку

  return (
    <SwitchContainer>
      <SwitchTrack isActive={item.isActive} onClick={handleClick}>
        <Knob isActive={item.isActive} />
      </SwitchTrack>
    </SwitchContainer>
  );
};

export default ToggleSwitch;
