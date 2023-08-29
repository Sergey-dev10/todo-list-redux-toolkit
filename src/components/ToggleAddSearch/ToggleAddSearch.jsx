import { useDispatch, useSelector } from "react-redux";
import {
  selectAction,
  toggleButtons,
} from "../../reducers/toggleButtonsSlice.js";
import { search } from "../../reducers/searchSlice.js";
import { FaSearch, FaPlus } from "react-icons/fa";
import { ButtonWrapper, Button } from "./ToggleAddSearch.styles.js";

export const ToggleAddSearch = () => {
  const dispatch = useDispatch();
  const action = useSelector(selectAction);
  const handleToggleAction = (e) => {
    const action = e.currentTarget.value;
    dispatch(toggleButtons(action));
    if (action === "add") {
      dispatch(search(""));
    }
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
