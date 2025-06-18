import { useSearchParams } from "react-router-dom";
import React from "react";
function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page") ?? 1;
  const nextPage = () => {
    setSearchParams({ query: query ?? "", page: parseInt(page) + 1 });
  };
  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold  text-teal-700">Search Results</h1>
      <p>Query: {query}</p>
      <p>Page: {page}</p>
      <button
        onClick={() => setSearchParams({ query: query ?? "", page: 1 })}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-500 "
      >
        Reset
      </button>
      <p className="mt-4 text-lg text-gray-700">
        This page displays search results based on the query and page number.
      </p>
      <p className="mt-2 text-lg text-gray-700">
        You can reset the search or search for "React" to see different results.
      </p>
      <button
        onClick={nextPage}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-500"
      >
        Next Page
      </button>
      <p className="mt-2 text-lg text-gray-700">
        Click the button to go to the next page of results.
      </p>
      <p className="mt-2 text-lg text-gray-700">
        This is a simple demonstration of using search parameters in React
        Router.
      </p>
      <p className="mt-2 text-lg text-gray-700">
        You can modify the query and page number in the URL to see different
        results.
      </p>
    </div>
  );
}
export default SearchPage;
