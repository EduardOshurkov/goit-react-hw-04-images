import Gallery from "./ImageGallery.styled";

import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";



 const ImageGallery = ({ images, onImgClick }) => {

  return (<>
    <Gallery className="ImageGallery">
          {images?.map(item => (<ImageGalleryItem key={item.id} item={item} onClickModal={onImgClick}/>)
      )}
</Gallery></>
  )
 }

export default ImageGallery;


