import React from "react";
import { useRef } from "react";
function Search(props) {
  const searchInput = useRef();
  return (
    <div className="flex shadow-xl">
      <input
        value={props.searchData}
        onChange={() => props.eventHandler(searchInput.current.value)}
        ref={searchInput}
        className="border border-black w-full p-3 text-2xl"
        type="search"
      />
      <button
        onClick={props.searchWeather}
        className="text-white bg-slate-600 p-3"
      >
        Search
      </button>
    </div>
  );
}
export default Search;
