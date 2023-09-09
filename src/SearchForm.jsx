import React from "react";

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;

//L-2eo4UWu4nzwGYq6Zhi0xsOlzoD9Os8Ajz8HqlBOiQ
//https://api.unsplash.com/search/photos?client_id=L-2eo4UWu4nzwGYq6Zhi0xsOlzoD9Os8Ajz8HqlBOiQ&query=
