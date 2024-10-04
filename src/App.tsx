
import NavMenu from './components/nav/navMenu';
import SectionInput from './components/sectionInput/sectionInput'
import TrendingLists from './components/trends/trendingLists';                                         
function App() {

  return (
   <div className='flex'>
      <NavMenu />
      <SectionInput/>
      <TrendingLists/>
      
   </div>
    
    
  )
}

export default App;