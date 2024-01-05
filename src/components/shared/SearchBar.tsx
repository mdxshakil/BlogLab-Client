import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    if (searchText.length < 3) {
      setErrorMessage("Search text must be at least 3 characters long.");
    } else {
      setErrorMessage(""); // Clear any previous error message
      navigate(`/search-result/${searchText}`);
      setSearchText("");
    }
  };

  return (
    <div className="mt-8">
      <form className="w-full mx-auto" onSubmit={(e) => handleSearch(e)}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <AiOutlineSearch />
          </div>
          <input
            type="search"
            id="default-search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="block w-full p-4 pl-10 text-sm rounded-full bg-base-300 outline-none shadow-lg"
            placeholder="How to setup a react project...."
            required
          />
          <button
            type="submit"
            className="btn-primary absolute right-2.5 bottom-2.5  font-medium rounded-full text-xs md:text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
        {errorMessage && (
          <p className="text-error text-xs mt-2">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
