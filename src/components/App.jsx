import {Component} from "react";
// // import { ToastContainer } from 'react-toastify';
import { Searchbar } from "./Searchbar/Searchbar";
import * as api from './api/api';
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./Button/Button";
import Loader from "./Loader/Loader";



export class App extends Component {
    state = {
        query: '',
        page: 1,
        images: [],
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
            const { hits } = await api.getImages(query, page);
            if (hits.length === 0) {
                this.setState({
                    isEmpty: true,
                })
            }
            this.setState(prevState => ({
                images: [...prevState.images, ...hits],
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
        const { images, isEmpty, isLoading, page } = this.state;

        const isNotLastPage = images.length / page === 12;
        const btnEnable = images.length > 0 && !isLoading && isNotLastPage;
        return (
            <div>
                <Searchbar onSubmit={this.onHandleSubmit} />
                {isEmpty && <h1>Error no images</h1>}
                <ImageGallery images={images} />
                {btnEnable && <LoadMoreBtn onLoadMore={this.onLoadMore} />}
                {isLoading && <Loader/>}
            </div>
        )
    }
}



