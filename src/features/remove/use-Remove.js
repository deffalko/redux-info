import { useSelector, useDispatch } from "react-redux";
import { selectRemove, setRemove } from "../controls/controls-slice";

export const useRemove = () => {
  const dispatch = useDispatch();
  const remove = useSelector(selectRemove);

  const handleRemove = (id) => {
    dispatch(setRemove(id));
  };

  return [remove, handleRemove];
};
