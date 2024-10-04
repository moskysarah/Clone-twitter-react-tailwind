

import TweetText from '../tweetTitle/tweetText'
import RetweetIcon from '../icons/retweetIcon'
import ShareIcon from '../icons/shareIcon'
import HandPlainIcon from '../icons/handPlainIcon'
import TwitterLikeButton from '../button/twitterLikeButton'
import TwitterReplyButton from '../button/twitterReplyButton'


function TweetBody() {
    return (
        <div className=' mt-6  flex  '>
            <div className="px-2 py-2    border border-t-0 border-l-0 border-r-0   border-gray-800 ">
              <img src="/Tweet-Profile-Photo.png"
                   alt="profile logo" 
              />
                    
            </div>
            
            <div className="text-white  w-full  border border-t-0 border-l-0 border-r-0   border-gray-800  " >
                <TweetText/>
                <p>Gardening boomed during the pandemic. Six Black writers share how it </p>
                <p>has helped them re-establish, and reimagine, a connection to</p>
                <p>cultivation and the land</p>
                <HandPlainIcon/>
               <div className='mt-4 flex justify-start gap-10 '>
                 <TwitterReplyButton/>
                 <RetweetIcon/>
                 <TwitterLikeButton/>
                 <ShareIcon/> 
               </div>
            </div>
           
             
        </div>
      
  )
  }
  
  export default TweetBody
