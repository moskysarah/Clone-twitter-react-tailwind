
import BarTrending from "../components/BarTrending/barTrending";
import Main from "../components/Tweet/mainPage";
import Sidebar from "../components/Sidebar/sidebar";
import HomeTweets from "../components/Tweet/tweets";


function Home() {
  return (
        <div className='flex sm:justify-center'>
        <Sidebar />
        <Main />
        <BarTrending />
        <HomeTweets />
      </div>
  )
}

export default Home