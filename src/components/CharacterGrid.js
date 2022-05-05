import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "./Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        // 🔴 we are passing into the component the props, we have to make sure to pass also the hole shallow copy of from the api. Fetching the data, store it into the state, passing the state as a props, maping through the props, and pass it into another component as a props.
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
