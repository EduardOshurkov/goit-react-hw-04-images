import Gallery from "./ImageGallery.styled";

import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";



 const ImageGallery = ({ images, onImgClick }) => {

  return (<>
    <Gallery className="ImageGallery">
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (<ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} onClickModal={onImgClick}/>)
      )}
</Gallery></>
  )
 }

export default ImageGallery;


