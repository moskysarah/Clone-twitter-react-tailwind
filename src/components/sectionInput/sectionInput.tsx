
import TweetBody from '../tweetBody/tweetBody'
import TimeLineIcon from '../icons/timelineIcon'
import Header from '../header/pageTitle'
import TwitterImg from '../twitterImg/twitterImg'
import ProfileImg from '../icons/profileImg'
import ButtonSelect from '../button/buttonSelect'
import ProfileRed from '../icons/profileRed'
import Input from "../input/input"
import MediaIcon from '../icons/mediaIcon'
import EmojiIcon from '../icons/emojiIcon'
import ScheduleIcon from '../icons/scheduleIcon'
import GifIcon from '../icons/gifIcon'
import PollIcon from '../icons/pollIcon'

function Main() {

    return (

        <div className='border border-gray-900 border border-t-0 items-center  h-full '>
            <div className='flex  justify-between  border border-gray-900 border border-t-0'>
                 < Header/>
                 < TimeLineIcon/>
            </div>
          <div className=' flex justify-start'>
               <div className='p-2'>
                  < ProfileImg/>
               </div>
                <Input />
          </div>
          <div className='border border-t-0 border-l-0 border-r-0   border-gray-800   flex  justify-between h-16'>
                  <div className=' mt-6 ml-16 gap-2 flex px-6 py-2'>
                       <MediaIcon />
                       <GifIcon/>
                       <PollIcon />
                       <EmojiIcon />
                       <ScheduleIcon/>
                   </div>
                   <div className=' justify-between'>
                      <ButtonSelect />
                   </div>
            </div>
                   

                  <ProfileRed />
                  
                  < TweetBody />

                  < TwitterImg />
                  
                  
          </div>


       
    );
};

export default Main;
