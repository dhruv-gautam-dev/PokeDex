// CSS imports
import useDebounce from "../../hooks/useDebounce";
import "./Search.css";

function Search({ updateSearchTerm }) {
  const debounceUpdatedSearch = useDebounce((e) =>
    updateSearchTerm(e.target.value)
  );
  return (
    <input
      id="search-pokemon"
      type="text"
      placeholder="WHICH POKEMON YOU ARE LOOKING FOR !"
      onChange={debounceUpdatedSearch}
    />
  );
}

export default Search;
