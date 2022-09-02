//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
let name="Tushar";
function App() {
  return (
    <>
    {/* <Navbar title="My App" about="About" /> */}
    <Navbar />
     <div classNameName="blank">
        <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Veniam modi vel alias earum ipsa! Eos, eaque. Molestias officiis impedit exercitationem.
         Pariatur repellat soluta fugit praesentium. Maiores, reiciendis asperiores vel soluta vero ea non magnam?</p>
     </div>
    </>
  );
}

export default App;
