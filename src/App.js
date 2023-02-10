import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Livepolls from './Components/Livepolls/Livepolls';
import Createpoll from './Components/Createpoll/Createpoll';
import Pollquestion from './Components/Pollquestion/Pollquestion';
import Success from './Components/Createpoll/Success';
import PNF from './Components/Errors/PNF';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className='scroll-smooth'>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/livepolls" element={<Livepolls/>} />
          <Route path="/createpolls" element={<Createpoll />} />
          <Route path="/pollquestion" element={<Pollquestion />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<PNF />} />
          <Route path="/" element={<PNF />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
