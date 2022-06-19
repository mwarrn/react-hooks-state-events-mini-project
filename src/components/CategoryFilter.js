import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  function handleCategory(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => {
        return (
          <button
          key={category}
          value={category}
          onClick={handleCategory}
          className={category === selectedCategory ? "selected" : ""}>
            {category}
          </button>
        )}
      )}
    </div>
  );
}

export default CategoryFilter;
