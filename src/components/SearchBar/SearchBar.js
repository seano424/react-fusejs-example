import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onChange, placeholder }) => {
  return (
    <div className="Search">
      <span className="SearchSpan"></span>
      <input
        className="SearchInput"
        onChange={onChange}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

export default SearchBar;
