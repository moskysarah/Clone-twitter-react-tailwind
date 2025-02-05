import UserProfiles from "../components/Profiles/userProfiles"
import BarTrending from "../components/BarTrending/barTrending"
import Sidebar from "../components/sideBar/sidebar"


function Profile() {
  return (
    <div className='flex sm:justify-center'>
    <Sidebar />
    <UserProfiles />
    <BarTrending />
  </div>
  )
}

export default Profile