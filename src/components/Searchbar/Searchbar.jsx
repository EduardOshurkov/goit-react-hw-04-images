import { Component } from "react";


export class Searchbar extends Component {
    state = {
        query: '',
    }
    

    onHandleInput = (event) => {
        const { value } = event.currentTarget
        this.setState({
            query: value.toLowerCase().trim()
        })
    }

    onHandleSubmit = (event) => {
        const { query } = this.state;
        event.preventDefault();
        this.props.onSubmit(query);
        this.setState({
            query: ''
        });
    };
    
    render() {
        const { query } = this.state;
        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.onHandleSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={query}
                        onChange={this.onHandleInput}
                    />
                </form>
            </header>
        );
    }
}




















// import LoadMoreBtn from "components/Button/Button";
// import { Component } from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// export default class Searchbar extends Component {
//     state = {
//         requestValue: '',
//     };

//     handleRequestChange = event => {
//         this.setState({ requestValue: event.currentTarget.value.toLowerCase() });
//     };


//     handleSubmit = event => {
//         event.preventDefault();

//         if (this.state.requestValue.trim() === '') {
//             toast("EROR!");
//             return;
//         };

//         this.props.onSubmit(this.state.requestValue);
//         this.setState({ requestValue: '' });
//     };


//     render() {
//         return (
//             <header className="searchbar">
//                 <form onSubmit={this.handleSubmit}>
//                     <input
//                         type="text"
//                     name="request"
//                     autoComplete="off"
//                     placeholder="Search images and photos"
//                         value={this.state.requestValue}
//                         onChange={this.handleRequestChange}
//                     />
//                         <button type="submit">Search</button>
//                 </form>
//            </header> 
//         )
//     }
// }