import { Li, Img } from "./ImageGalleryItem.styled";


const ImageGalleryItem = ( {webformatURL, largeImageURL, onClickModal, tags } ) => {
    
    return (
        <div>
            <Li>
                <Img src={webformatURL} data-image={largeImageURL} onClick={() => onClickModal(largeImageURL)} loading="lazy" alt={tags} /></Li>
       </div>
    )
}

export default ImageGalleryItem;

