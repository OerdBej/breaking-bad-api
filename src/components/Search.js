import React, { useState, useEffect } from "react";

// 🔴the autofocus ?! -> go import this component

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    // 🔴 updating the state
    setText(q);

    // 🔴 we are adding as a props to the SEARCH component into the App.js
    getQuery(q);
  };

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
