

import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";



 const ImageGallery = ({ images, onClickModal }) => {

  return (<>
    <ul className="ImageGallery">
          {images?.map(item => (<ImageGalleryItem key={item.id} item={item} onClickModal={onClickModal}/>)
      )}
</ul></>
  )
 }

export default ImageGallery;