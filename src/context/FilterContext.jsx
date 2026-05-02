import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [filter, setFilter] = useState("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

function useFilter() {
  return useContext(FilterContext);
}

export { FilterProvider, useFilter };