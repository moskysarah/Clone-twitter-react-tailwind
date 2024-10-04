
import NewYorkTime from "../accountFollow/newYorkTime"
import ButtonShowMore from "../button/buttonShowMore"
import SearchBar from "../searchBox/searchBar"
import Squid from "./squid"
import TrendForYou from "./trendForYou"
import Trending from "./trending"
import CnnTitle from "./trendsFollow/cnnTitle"
import TitleFollow from "./trendsFollow/titleFollow"



function TrendingLists() {
    return (
        <>
        <div className=" bg-black">
            <SearchBar/>
          <div className="bg-gray-900   px-20 rounded-md  mt-4 ml-5 ">
                <div className=" mr-20 ">
                  <TrendForYou/>
                  <Trending/>
                  <Squid/>
                  <Trending/>
                  <Squid/>
                  <Trending/>
                  <Squid/>
                  <Trending/>
                  <Squid/>
                  <ButtonShowMore/>
                </div>    
           </div>
           <div className="bg-gray-900   px-20 rounded-md  mt-4 ml-5 ">
                <div className="mr-20 ">
                    <TitleFollow/>
                   <NewYorkTime/>
                  <CnnTitle/>
                </div>    
                <ButtonShowMore/>   
           </div>
        </div> 
        </>
    )
}

export default TrendingLists