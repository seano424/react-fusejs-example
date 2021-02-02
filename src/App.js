import React, { useState } from "react";
import Fuse from 'fuse.js'
import "./App.css";
import books from "./books.json";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [data, setData] = useState(books);

  const searchData = (pattern) => {
    if (!pattern) {
      setData(books);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["title", "author"],
    });

    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
      setData(matches);
    }
  };


  return (
    <div>
      <h1 className="Title">My Favorite Books</h1>
      <SearchBar
        placeholder="Search"
        onChange={e => searchData(e.target.value)}
      />
      <div className="Container">
        {data.map((item) => (
          <Card {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
