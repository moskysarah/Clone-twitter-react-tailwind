
import HomeIcon from '../icons/homeIcon'
import ExploreIcon from '../icons/exploreIcon'
import NotificateIcon from '../icons/notificateIcon'
import MessageIcon from '../icons/messageIcon'
import BookmarkIcon from '../icons/bookmarkIcon'
import ListIcon from '../icons/listIcon'
import ProfileIcon from '../icons/profileIcon'
import MoreIcon from '../icons/moreIcon'
import ButtonMenu from '../button/buttonMenu'


function NavMenu() {

    return (

        <nav className="bg-black text-white  w-64 ">
          
             < img src="public/twitter-icon.png"  
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
                   <ProfileIcon/><span>Profile</span>       
                </li>
                <li className="p-4 flex justify-between w-16 gap-6 items-center">
                  <MoreIcon/><span >More</span> 
                </li>
            </ul>
           <ButtonMenu/>
           
            
             
        </nav>
    );
};

export default NavMenu;


      

