import {useState, useEffect} from "react";
import Container from "./App.styled";
import { Searchbar } from "./Searchbar/Searchbar";
import * as api from './api/api';
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";



export default function App () {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [isEmpty, setEmpty] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);


    // const onClickCard = (event) => {
    // modalContent: event.target.dataset.id
    // }

    useEffect(() => {
        if (!query || !page) {
            return;
        }
        getImages(query, page);
    }, [query, page]);

    
    const getImages = async (query, page) => {
        setLoading(true);
        try {
            const { hits } = await api.imagesService(query, page);
            if (hits.length === 0) {
                setEmpty({
                    isEmpty: true,
                })
            }
            setImages([...images, ...hits]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }

    };

    const onHandleSubmit = value => {
        if (value === query) {
            return;
        }
            setQuery (value);
            setPage (1);
            setImages ([]);
            setEmpty(false);
     
    };

    const onLoadMore = () => {
        setPage(prevPage => prevPage + 1)
    };

    const togleModal = (image) => {
        setShowModal(!showModal);
        setModalContent(image)
    };

  
        const isNotLastPage = images.length / page === 12;
    const btnEnable = images.length > 0 && !isLoading && isNotLastPage;
    
        return (
            <Container>
                <Searchbar onSubmit={onHandleSubmit} />
                {isEmpty && <h1>Sory no images, try again</h1>}
                <ImageGallery images={images} onImgClick={togleModal}/>
                {btnEnable && <LoadMoreBtn onLoadMore={onLoadMore} />}
                {isLoading && <Loader />}
                {showModal && (<Modal onClose={togleModal}><img src={modalContent} alt={images} /></Modal>)}
            </Container>
        )
}




