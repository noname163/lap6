//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props); 
//     this.state = {
//       dishes: DISHES
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//         <Menu dishes={this.state.dishes} />
//       </div>
//     );
//   }
// } 

class App extends Component {

  render() {
    return (

        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>   
    );
  }
}

export default App;
