import LoadMoreBtn from "components/Button/Button";
import { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class Searchbar extends Component {
    state = {
    requestValue: '',
        
    };

    handleRequestChange = event => {
        this.setState({ requestValue: event.currentTarget.value.toLowerCase() });
    };


    handleSubmit = event => {
        event.preventDefault();

        if (this.state.requestValue.trim() === '') {
            toast("EROR!");
            return;
        };

        this.props.onSubmit(this.state.requestValue);
        this.setState({ requestValue: '' });
    };


    render() {
        return (
            <header className="searchbar">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                    name="request"
                    autoComplete="off"
                    placeholder="Search images and photos"
                        value={this.state.requestValue}
                        onChange={this.handleRequestChange}
                    />
                        <button type="submit">Search</button>
                </form>
           </header> 
        )
    }
}