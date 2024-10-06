import React from 'react';
import SeetingIcon from './icons/SeetingIcon';
import VectorIcon from './icons/vectorIcon';
import CnnIcon from './icons/cnnIcon';
import TwitterLogo from './icons/twitterLogo';
import MyFollowButton from './Button/MyFollowButton';
import TwitterProfileIcon from './icons/tweetProfileIcon';
import SearchBar from './SearchBar';



const TrendLists: React.FC = () => {
    const trends = [
        { trending: "Trending in Turkey", },
        { squid: "SQUID", },
        { tweets: "2,066 Tweets" },
        { trending: "Trending in Turkey", },
        { squid: "SQUID", },
        { tweets: "2,066 Tweets" },
        { trending: "Trending in Turkey", },
        { squid: "SQUID", },
        { tweets: "2,066 Tweets" },
        { trending: "Trending in Turkey", },
        { squid: "SQUID", },
        { tweets: "2,066 Tweets" },
        { trending: "Trending in Turkey", },
        { squid: "SQUID", },
        { tweets: "2,066 Tweets" },
        
    ];
   
    return (
        <div className="flex flex-col  bg-black border-l-2 border-gray-800 text-white p-2 w-1/3  ">
              <SearchBar/>
            <div className="flex flex-col  bg-gray-800 text-gray-400 p-4 w-1/1 mt-6 h-screen rounded-3xl">
                <h2 className="text-xl font-bold text-white flex ">Trends for you <SeetingIcon/></h2>
                <ul className=" text-lg pl-3 mt-6 ">
                    {trends.map((trends, index) => (
                        <React.Fragment key={index}>
                            <li className="text-gray-400">{trends.trending}</li>
                            <li className="font-bold text-white">{trends.squid}</li>
                            <li className="text-gray-400">{trends.tweets}</li>
                        </React.Fragment>
                    ))}
                     
                </ul>
            </div>
            
            <div className="bg-gray-800 text-white  text-lg p-4 w-1/1 h-82 mt-6 rounded-3xl " >
               <h2 className="text-xl font-bold text-white flex ">Who to follow</h2>
               <ul className=" text-sm pl-3 mt-6  ">
                  <div className=' flex gap-3 '>
                     <TwitterProfileIcon/><li className="text-white font-bold-sm">The New York Times</li>
                      <VectorIcon/>
                      <MyFollowButton bg="white">Follow</MyFollowButton> 
                    
                    </div>
                     <li className="text-gray-400 text-1xl  ml-16">@nytimes</li>
                    
                    <div className='flex  mt-4 justify-around'>
                         <CnnIcon/><li className="text-white font-bold-sm mr-6">CNN</li>
                         <VectorIcon/>
                         <MyFollowButton bg="white">Follow</MyFollowButton> 
                    </div>
                     <li className="text-gray-400 text-1xl  ml-16">@CNN</li>
                    <div className='flex  justify-around'>
                          <TwitterLogo/><li className="text-white font-bold mt-4">Twitter</li>
                          <VectorIcon/>
                          <MyFollowButton bg="white">Follow</MyFollowButton> 
                    </div>
                    
                     <li className="text-gray-400 mt-4 text-1xl  ml-28">Twitter</li>
                      
                   
                </ul>
            </div>
        </div>
    );
};

export default TrendLists;