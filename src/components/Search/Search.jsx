import { useDispatch } from "react-redux";
import { search } from "../../reducers/searchSlice.js";
import { FormWrapper, InputWrapper } from "./Search.styles.js";
export const Search = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(search(e.target.value));
  };
  return (
    <FormWrapper>
      <InputWrapper type="text" placeholder="Search" onChange={handleSearch} />
    </FormWrapper>
  );
};
