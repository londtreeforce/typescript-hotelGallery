import { Photo } from "../types";
import { useState } from "react";
import style from "./main.module.scss";

 
interface HotelGalleryProps {
    photos: Photo[];
}



export const HotelGallery: React.FC<HotelGalleryProps> = ({
    photos, 
}) => {
    if(!photos.length) {
        return null;
    }

    
    const [indexActivePhoto,  setIndexAcrivePhoto ] = useState(0);
    const activePhoto = photos[indexActivePhoto];
    const prevPhoto = photos[indexActivePhoto - 1];
    const nextPhoto = photos[indexActivePhoto + 1];

    return(
        <div className={style.hotelGallery}>
            <div className={style.hotelGalleryContainer}>
                <MainPhoto 
                    className={style.hotelGalleryContainer}
                    prevPhoto={prevPhoto}
                    currentPhoto={activePhoto}
                    nextPhoto={nextPhoto}
                />
                <Navigation 
                    className={style.hotelNavigarion}
                    disabledPrev={!prevPhoto}
                    disabledNext={!nextPhoto}
                    onPrevClick ={() => {
                        setIndexAcrivePhoto(indexActivePhoto - 1);

                    }}
                    onNextClick={() =>{
                        setIndexActivePhoto(indexActivePhoto + 1);
                    }}
                />

            </div>
            <PreviewGallary 
                activePhotoIndex = {indexActivePhoto}
                photos={photos}
                className={style.hotelPreviewList}
            />
        </div>
    )
}