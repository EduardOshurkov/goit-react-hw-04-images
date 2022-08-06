import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import LoadMoreBtn from "components/Button/Button";

export default function ImageGallery({request, ClickToNextPage}) {
    return (
        <div>
        <ul className="gallery">
            <ImageGalleryItem request={request}/>
            </ul>
            <LoadMoreBtn ClickToNextPage={ClickToNextPage} />
            </div>
    )
}