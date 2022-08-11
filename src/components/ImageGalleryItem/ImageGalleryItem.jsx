import { Li, Img } from "./ImageGalleryItem.styled";


const ImageGalleryItem = ( {item, onClickModal, } ) => {
    const { id, webformatURL, largeImageURL } = item;
    return (
        <div>
            <Li key={id}>
                <Img src={webformatURL} data-image={largeImageURL} onClick={() => onClickModal(largeImageURL)} loading="lazy" alt={item.tags} /></Li>
       </div>
    )
}

export default ImageGalleryItem;

