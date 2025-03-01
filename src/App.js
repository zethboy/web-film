
import './App.css'
import Navigationbar from './components/navbar'
import Intro from './components/intro'
import Top from './components/top'
import './style/landing.css'


function App() {
  return (
    <div>
      {/*intro section  */}
      <div className='myBG border'>
      <Navigationbar />
      <Intro />
      <Top />
      
      </div>
      {/* end intro section */}
      {/* Trending Section */}
      <div className='Top'>

      </div>
      {/* End Trending Section */}
    </div>
  );
}

export default App;
