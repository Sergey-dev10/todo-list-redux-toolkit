import { FormWrapper, InputWrapper } from "./Search.styles.js";
export const Search = ({ onHandleSearch }) => {
  const handleSearch = (e) => {
    console.log(e.target.value);
    onHandleSearch(e.target.value);
  };
  return (
    <FormWrapper>
      <InputWrapper type="text" placeholder="Search" onChange={handleSearch} />
    </FormWrapper>
  );
};
