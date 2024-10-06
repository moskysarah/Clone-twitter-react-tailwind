import TimeLineIcon from "./icons/timelineIcon";

function Header() {
    return (
        <>

           <div className='flex bg-red-500 gap-6 font-bold px-6 text-white w-full mb-6'>
                <div className="flex justify-center bg-red-400 ml-20">
                   <h1>Home</h1>
                </div>
                <div className="flex justify-end bg-red-400">
                   < TimeLineIcon/>
                </div>
                
            </div>
                
            
        </>
    )
}

export default Header;

