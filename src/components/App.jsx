import React from "react";
import { ToastContainer } from 'react-toastify';
import Searchbar from "./Searchbar/Searchbar";
import SearchInfo from "./SearchInfo/SearchInfo";




export class App extends React.Component {
  state = {
    requestValue: '',
  }
  
  handleFormSubmit = requestValue => {
    this.setState({ requestValue })
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <SearchInfo requestValue={this.state.requestValue}/>




        <ToastContainer autoClose={3000}/>
     </div>
   )
  }
}


