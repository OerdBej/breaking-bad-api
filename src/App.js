import "./App.css";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterGrid from "./components/CharacterGrid";
import Search from "./components/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems(); // 🔴 call the item into the fetch

    // whenever the query state is changed the useEffect is going to, since it changes a lot it 🔥 the use effect hook again from the user input typing.
  }, [query]);

  return (
    <div className='container'>
      <Header />

      {/* Here comes the props from the function of getting input user. Dont forget to pass the query as a props to the Search 🎈. Remember that this function is in fact our STATE*/}
      <Search getQuery={(q) => setQuery(q)} />
      {/* 🟢 Passing as props the state in which we store the api data */}
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
