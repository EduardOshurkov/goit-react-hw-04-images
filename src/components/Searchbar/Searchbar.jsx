import { Component } from "react";
import { Input, ButtonLabel, Button, Form, Header } from "./Searchbar.styled";



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
            <Header className="Header">
                <Form className="form" onSubmit={this.onHandleSubmit}>
                    <Button type="submit" className="button">
                        <ButtonLabel className="button-label">Search</ButtonLabel>Search
                    </Button>

                    <Input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={query}
                        onChange={this.onHandleInput}
                    />
                </Form>
            </Header>
        );
    }
}














