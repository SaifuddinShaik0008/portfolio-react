
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' ; 
import Header from './Header/Header';
import Routings from './Routings';
import Footer from './FOOTER/Footer';
// import './App.css'


function App() {
  return (
    <div className="App background-image text-white">
      <Header/>
      <Routings/>
      <Footer/>
      
    </div>
  );
}

export default App;
