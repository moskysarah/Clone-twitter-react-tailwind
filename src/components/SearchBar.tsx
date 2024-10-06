function SearchBar() {

    return (
      <div className="ml-3 ">
          <input
              type="text"
              placeholder="Rechercher..."
              className="w-full  py-2  px-7  border border-gray-800 bg-gray-800 item-center text-white rounded-full focus:outline-none "
          />
          
      </div>
  );
};

export default SearchBar;