import { useDispatch, useSelector } from "react-redux";
import { FaSearch, FaPlus } from "react-icons/fa";
import { ButtonWrapper, Button } from "./ToggleAddSearch.styles.js";
import {
  selectAction,
  toggleButtons,
} from "../../reducers/toggleButtonsSlice.js";

export const ToggleAddSearch = () => {
  const dispatch = useDispatch();
  const action = useSelector(selectAction);
  const handleToggleAction = (e) => {
    dispatch(toggleButtons(e.currentTarget.value));
  };

  return (
    <ButtonWrapper>
      <Button
        $isActive={action === "add"}
        value="add"
        onClick={handleToggleAction}
      >
        <FaPlus />
      </Button>
      <Button
        $isActive={action === "search"}
        value="search"
        onClick={handleToggleAction}
      >
        <FaSearch />
      </Button>
    </ButtonWrapper>
  );
};
