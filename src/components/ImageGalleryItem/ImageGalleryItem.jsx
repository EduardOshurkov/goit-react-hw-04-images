


const ImageGalleryItem = ( {item, onClickModal} ) => {
    const { id, webformatURL, largeImageURL } = item;
    return (
        <div>
            <li key={id} onClickModal={() => onClickModal(largeImageURL)}>
                <img src={webformatURL} alt="#" width='220px'/></li>
       </div>
    )
}

export default ImageGalleryItem;

