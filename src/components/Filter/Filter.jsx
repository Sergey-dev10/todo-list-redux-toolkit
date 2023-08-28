import { useDispatch, useSelector } from "react-redux";
import { setFilter, selectFilter } from "../../reducers/filterSlice.js";
import { Button, FilterWrapper } from "./Filter.styles.js";
export const Filter = () => {
  const dispatch = useDispatch();
  const isSelected = useSelector(selectFilter);
  const handleFilter = (e) => {
    dispatch(setFilter(e.target.textContent));
  };

  return (
    <FilterWrapper>
      <Button $isSelected={isSelected === "All"} onClick={handleFilter}>
        All
      </Button>
      <Button $isSelected={isSelected === "Active"} onClick={handleFilter}>
        Active
      </Button>
      <Button $isSelected={isSelected === "Completed"} onClick={handleFilter}>
        Completed
      </Button>
    </FilterWrapper>
  );
};
