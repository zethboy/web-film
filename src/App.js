
import './App.css'
import Navigationbar from './components/navbar'
import Intro from './components/intro'
import Top from './components/top'
import Anime from './components/anime'
import './style/landing.css'


function App() {
  return (
    <div>
      {/*intro section  */}
      <div className='myBG border'>
      <Navigationbar />
      <Intro />
      
      </div>
      {/* end intro section */}
      {/* Trending Section */}
      <div className='top'>
      <Top />
      </div>
      {/* End Trending Section */}
      {/* Anime section */}
      <div className='anime'>
        <Anime />
      </div>
      {/* End Anime section */}
    </div>
  );
}

export default App;
