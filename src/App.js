
import './App.css';
import TitleBar from './titlebar.js';
import NewApi from './NewApi';
import Footer from './footer';

function App() {
  return (
    <div>
      <TitleBar id="TitleBar"/>
      <NewApi id="NewApi"/>
      <Footer id="Footer"/>
    </div>
  );
}

export default App;
