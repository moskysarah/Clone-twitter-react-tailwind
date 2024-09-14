

  function SearchBar() {

          return (
            <div className="relative w-80">
                <input
                    type="text"
                    placeholder="Rechercher..."
                    className="w-18 py-2 pl-10 pr-4 border border-gray-700 bg-gray-700 ml-10 mt-2 text-white rounded-full focus:outline-none "
                />
                
            </div>
        );
    };
    
    export default SearchBar;