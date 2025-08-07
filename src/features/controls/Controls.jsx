import styled from "styled-components";

import { Search } from "./Search";
import { CustomSelect } from "./CustomSelect";
// import { useRegion } from "./useRegion";
import { useDispatch, useSelector } from "react-redux";
import { selectFilterStatus, setFilterStatus } from "./controls-slice";

const optionsMap = {
  Active: { value: "true", label: "Active" },
  InActive: { value: "false", label: "InActive" },
  All: { value: "", label: "All" },
};
const options = Object.values(optionsMap);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
  // const [region, handleSelect] = useRegion();

  const dispatch = useDispatch();
  const filterStatus = useSelector(selectFilterStatus);

  const handleChange = (option) => {
    dispatch(setFilterStatus(option?.value || ""));
  };

  return (
    <Wrapper>
      <Search />
      {/* <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={optionsMap[region]}
        onChange={handleSelect}
      /> */}
      <CustomSelect
        options={options}
        placeholder="Filter by Status"
        isClearable
        isSearchable={false}
        value={options.find((opt) => opt.value === filterStatus)}
        onChange={handleChange}
      />
    </Wrapper>
  );
};
