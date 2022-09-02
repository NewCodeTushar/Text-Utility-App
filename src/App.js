//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomeForm from './components/HomeForm';

function App() {
  return (
    <>
    <Navbar title="My App" about="About" />
    {/* <Navbar /> */}
    <div className="container">
    <HomeForm heading="Enter Your Text" label="Enter your Text" />
    </div>
    </>
  );
}

export default App;
