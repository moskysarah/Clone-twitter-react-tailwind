import ButtonShowMore from "../button/buttonShowMore"
import SearchBar from "../searchBox/searchBar"
import TrendList from "./trendList"
import TrendsList from "./trendsList"
function TrendingLists() {
    return (
        <>
        <div className="bg-gray-900 w-18 flex flex-col h-screen rounded-md ml-1">
            <SearchBar/>
            
              <div className=" h-screen">
                
              <TrendList/>
              </div>
               <div className=" h-screen">
                
               <TrendsList/>

                </div>
                
                <div className=" h-screen">
                
                  <TrendsList/>
                </div>

                <div className=" h-screen">
                
                   <TrendsList/>
                </div> 

                <div className="h-screen">
                  
                   <TrendsList/>
            
                </div> 

                <div className=" h-screen">
                <TrendsList/>
            
                </div>
                <ButtonShowMore/>
        </div>
        </>
    )
}

export default TrendingLists