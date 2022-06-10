// import logo from './logo.svg';
// import './App.css';
// import Header from './Header'

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;

// import { Router } from 'react-router';
import './App.css';
import Header from './Header'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Contact from './Contact';
// import Checkout from './Checkout';
// import Navlinks from './Navlinks';


// import Login from './Login'
import Home from './Home'
// import Footer from './Footer'

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" caseSensitive={false} element={<><Header/><Home/></>}/>
      </Routes>
    </Router>
  );
}

export default App;