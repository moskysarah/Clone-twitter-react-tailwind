
import TwitterTitle from '../tweetTitle/twitterTitle'
import RetweetIcon from '../icons/retweetIcon'
import ShareIcon from '../icons/shareIcon'
import ReplyIcon from '../icons/replyIcon'
import ReactIcon from '../icons/reactIcon'

function  TwitterImg  () {
              
    return (
        <div className=' mt-6  flex  '>
            <div className="px-2 py-2    border border-t-0 border-l-0 border-r-0   border-gray-800 ">
              <img src="public/profile-twitter.png"
                   alt="profile logo twitter" 
              />
                    
            </div>
            
            <div className="text-white  w-full  border border-t-0 border-l-0 border-r-0   border-gray-800  " >
                <TwitterTitle/>
                <p>BIG NEW lol jk still twitter</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
              <div className='mt-6 flex justify-start gap-16 '>
                 <ReplyIcon/><span className='text-gray-500'>6.8 K</span> 
                 <RetweetIcon/><span className='text-gray-500'>36.6K</span> 
                 <ReactIcon/> <span className='text-gray-500'>267.1K</span>  
                 <ShareIcon/> 
                 
                 
              </div>
            </div>
           
             
        </div>
      
  )
  }
  
  export default TwitterImg 


