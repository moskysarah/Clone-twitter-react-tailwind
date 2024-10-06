import React from 'react';

import HomeIcon from './icons/homeIcon';
import ExploreIcon from './icons/exploreIcon';
import NotificateIcon from './icons/notificateIcon';
import MessageIcon from './icons/messageIcon';
import BookmarkIcon from './icons/bookmarkIcon';
import ListIcon from './icons/listIcon';
import ProfileIcons from './icons/profileIcon';
import MoreIcon from './icons/moreIcon';
import MySideBarButton from './Button/MySideBarButton';


const Sidebar: React.FC = () => {
    return (
        <div className="bg-black  text-white p-4 w-1/5  border border-t-0 border-l-0   border-gray-800 ">
            
            <nav className="text-white w-64  min-h-screen ">
          
               < img src="/twitter-icon.png"  
                    alt="Logo" />
         
              <ul className="flex flex-col">
                  <li className="p-4 flex justify-between w-16 gap-6">
                     <HomeIcon/><span className='font-bold '>
                       Home</span>
                    </li>
                   <li className="p-4 flex justify-between w-16 gap-6 items-center ">
                      <ExploreIcon/><span>Explore</span>
                    </li>
                    <li className="p-4 flex justify-between w-16 gap-6 items-center">
                      <NotificateIcon/><span>Notifications</span> 
                    </li>
                <li className="p-4 flex justify-between w-16 gap-6 items-center ">
                    <MessageIcon/><span>Messages</span>
                </li>
                <li className="p-4 flex justify-between w-16 gap-6 items-center ">
                     <BookmarkIcon/><span>Bookmarks</span>
                </li>
                
                <li className="p-4 flex justify-between w-16 gap-6 items-center ">
                    <ListIcon/><span>Lists</span>
                </li>
                <li className="p-4 flex justify-between w-16 gap-6 items-center">
                   <ProfileIcons/><span>Profile</span>       
                </li>
                <li className="p-4 flex justify-between w-16 gap-6 items-center">
                  <MoreIcon/><span >More</span> 
                </li>
            </ul>
            
                 <MySideBarButton bg="blue">Tweet</MySideBarButton>
            
            
              
        </nav>

        </div>
    );
};

export default Sidebar;