import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourites from './Components/Favourites';

function App() {
  return (
    <>
      <Navbar />
      {/* {<Banner/>
      <Movies/>} */}
      <Favourites/>
    </>
  );
}

export default App;
