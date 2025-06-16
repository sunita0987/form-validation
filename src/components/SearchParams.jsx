import { useSearchParams } from "react-router-dom";
import React from "react";
function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page") || 1;
  const nextPage = () => {
    setSearchParams({ query: query || "", page: parseInt(page) + 1 });
  };
  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold  text-teal-700">Search Results</h1>
      <p>Query: {query}</p>
      <p>Page: {page}</p>
      <button
        onClick={nextPage}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
      >
        Next Page
      </button>
    </div>
  );
}
export default SearchPage;

