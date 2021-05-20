import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { Button } from "@material-ui/core";
/* eslint-disable */
function Search() {
  const [{}, dispatch] = useStateValue();
  const [inputSearch, setInputSearch] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: inputSearch,
    });

    history.push(`/search/${inputSearch}`);
  };
  return (
    <form className="search">
      <input
        onChange={(e) => setInputSearch(e.target.value)}
        value={inputSearch}
        type="text"
        placeholder="Search"
      />
      <Button
        type="submit"
        className="header__inputButton"
        onClick={search}
        variant="outlined"
      >
        Google
      </Button>
      <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header__inputButton" />
      </Link>
    </form>
  );
}

export default Search;
