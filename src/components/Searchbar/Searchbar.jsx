import { useState } from "react";
import { Input, ButtonLabel, Button, Form, Header } from "./Searchbar.styled";



export function Searchbar({onSubmit}) {
    const [query, setQuery] = useState('');
  
    const onHandleInput = (event) => {
        const { value } = event.currentTarget
        setQuery(value.toLowerCase().trim())
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        onSubmit(query);
        setQuery('');
    };
    
    
        return (
            <Header className="Header">
                <Form className="form" onSubmit={onHandleSubmit}>
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
                        onChange={onHandleInput}
                    />
                </Form>
            </Header>
        );
}














