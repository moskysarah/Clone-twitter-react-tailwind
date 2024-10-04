import ButtonFollow from "../button/buttonFollow"
import ButtonShowMore from "../button/buttonShowMore"
import CnnPage from "../accountFollow/cnnPage"
import NewYorkTime from "../accountFollow/newYorkTime"
import TwitterPage from "../accountFollow/twitterPage"



function FollowList() {
    return (
        <>
     
         <div className="bg-gray-300  flex-col px-10  ">

            <div className="bg-gray-900   rounded-md  mt-6">
                
               <CnnPage/>
               <NewYorkTime/>
               <TwitterPage/>
                <ButtonShowMore/>
                <ButtonFollow/>
            </div>
         </div>
      
        </>
    )
}

export default FollowList