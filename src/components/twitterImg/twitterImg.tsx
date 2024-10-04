
import TwitterTitle from '../tweetTitle/twitterTitle'
import ShareIcon from '../icons/shareIcon'
import ReplyImg from './replyImg'
import ReactImg from './reactImg'
import RetweetImg from './retweetImg'

function  TwitterImg  () {
              
    return (
        <div className=' mt-6  flex  '>
            <div className="px-2 py-2    border border-t-0 border-l-0 border-r-0   border-gray-800 ">
              <img src="/profile-twitter.png"
                   alt="profile logo twitter" 
              />
                    
            </div>
            
            <div className="text-white  w-full  border border-t-0 border-l-0 border-r-0   border-gray-800  " >
                <TwitterTitle/>
                <p>BIG NEW lol jk still twitter</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
              <div className='mt-6 flex justify-start gap-16 '>
                 <ReplyImg/> 
                 <RetweetImg/>
                 <ReactImg/> 
                 <ShareIcon/>    
              </div>
            </div>
           
             
        </div>
      
  )
  }
  
  export default TwitterImg 


