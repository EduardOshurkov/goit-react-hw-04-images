import {Component} from "react";
// // import { ToastContainer } from 'react-toastify';
import { Searchbar } from "./Searchbar/Searchbar";
import * as api from './api/api';
import ImageGallery from "./ImageGallery/ImageGallery";
// // import SearchInfo from "./SearchInfo/SearchInfo";
// // import LoadMoreBtn from "./Button/Button";
// import { FetchImages } from "./api/api";



export class App extends Component {
    state = {
        query: '',
        page: 1,
        images: [],
        isVisible: false,
        isLoading: false,
        isEmpty: false,
    }


    componentDidUpdate(_, prevState) {
        const { query, page } = this.state;
        if (prevState.query !== query || prevState.page !== page) {
            this.getImages(query, page)
        }
    }
    
    getImages = async (query, page) => {
        this.setState({
            isLoading: true,
        })
        try {
            const { hits, totalHits, page: currentPage } = await api.getImages(query, page);
            if (hits.length === 0) {
                this.setState({
                    isEmpty: true,
                })
            }
            this.setState(prevState => ({
                images: [...prevState.images, ...hits],
                isVisible: currentPage < Math.ceil(totalHits/hits.length),
            }))
        } catch (error) {
            console.error(error);
            this.setState({
                error: error.message 
            })
            
        } finally {
            this.setState({
                isLoading: false,
            })
        }

    }

    onHandleSubmit = (value) => {
        if (value === this.state.query) {
            return;
        }
        this.setState({
            query: value,
            page: 1,
            images: [],
            isVisible: false,
            isEmpty: false,
            error: null,
        })
    };

    onLoadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1
        }))
    }

    render() {
        const { images, isVisible, isEmpty } = this.state;
        return (
            <div>
                <Searchbar onSubmit={this.onHandleSubmit} />
                {isEmpty && <h1>Error no images</h1>}
                <ul>{images.length > 0 && images.map(({ id, webformatURL, largeImageURL }) => (<li key={id}><img src={webformatURL} alt='#' width='220px' /></li>))}</ul>
                {isVisible && <button onClick={this.onLoadMore}>Load more</button>}
            </div>
        )
    }
}



