import { useState, useEffect } from "react";

const SearchInput = ({ onSearch }) => {
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(searchVal); // send value to parent after debounce
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchVal, onSearch]);

  return (
    <div className="inputContainer">
      <input
        type="text"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
