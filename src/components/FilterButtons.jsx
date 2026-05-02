import { useFilter } from "../context/FilterContext";

function FilterButtons() {
  const { filter, setFilter } = useFilter();

  return (
    <div className="filter-row">
      <button
        className={filter === "all" ? "active-filter" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>

      <button
        className={filter === "active" ? "active-filter" : ""}
        onClick={() => setFilter("active")}
      >
        Active
      </button>

      <button
        className={filter === "completed" ? "active-filter" : ""}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;