
import TweetTitle from '../tweetTitle/tweetTitle'
import RetweetIcon from '../icons/retweetIcon'
import ShareIcon from '../icons/shareIcon'
import TwitterLikeButton from '../Button/twitterLikeButton'



function TweetProfile() {
    return (
        <div className=' mt-6  flex  '>
            <div className="px-2 py-2    border border-t-0 border-l-0 border-r-0   border-gray-800 ">
              <img src="/profile-red.png"
                   alt="profile red" 
              />
                    
            </div>
            
            <div className="text-white  w-full  border border-t-0 border-l-0 border-r-0   border-gray-800  " >
                <TweetTitle/>
                <p>Joe Biden touted a new agreement reached with the</p>
                <p>European Union to ease Trump-era tariffs on aluminum and steel as a</p>
                <p>"major breakthrough" that would serve to both strengthen the US steel </p> 
                <p>industry and combat the global climate crisis.</p> 
              <div className='mt-6 flex justify-start gap-16 '>
                 
                 <RetweetIcon/>
                 <TwitterLikeButton/>  
                 <ShareIcon/> 
                 
                 
              </div>
            </div>
           
             
        </div>
      
  )
  }
  
  export default TweetProfile



