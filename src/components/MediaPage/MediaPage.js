import { useState } from 'react';

const MediaBanner = ({medias, brands, bannerTitle, highlightDescription, highlightBanner}) => {

    const [mouseOver, setMouseOver] = useState(false);
    const [currentHoveredMedia, setCurrentHoveredMedia] = useState(undefined);
    const [currentHoveredBrand, setCurrentHoveredBrand] = useState(undefined);

    const onMouseOver = (mediaID, brandID, bannerTitle) => {
        setMouseOver(true);

        mediaID !== undefined && setCurrentHoveredMedia(mediaID);
        brandID !== undefined && setCurrentHoveredBrand(brandID);
    }

    const onMouseLeave = () => {
        setMouseOver(false);
        setCurrentHoveredMedia(undefined);
        setCurrentHoveredBrand(undefined);
    }

    return (
        <>
            <div className="mediaPage">
                <div className='highlightContainer'>
                    <img className='hightlightBanner' src={highlightBanner}></img>
                    <div className='highlightInfoContainer'>
                        <div className='hightlightInfoTextWrapper'>
                            <h1 className='bannerTitle'>{bannerTitle}</h1>
                            <p className='highlightInfoText'>{highlightDescription}</p>
                        </div>
                    </div>
                </div>
                <p className='featuredLabel label'>{'FEATURED & POPULAR'}</p>
                <div className="mediaList">
                    {medias.map(media => {
                        return <div className="mediaWrapper">
                            <div className='media' onMouseOver={() => onMouseOver(media.id, undefined)} onMouseLeave={onMouseLeave}>
                                <img className='mediaPosters' src={media.poster} />
                                <div className={`${mouseOver && media.id === currentHoveredMedia ? 'mediaDetails' : 'hideMediaDetails'}`}>
                                    <p className={media.title.length > 25 && media.id === currentHoveredMedia ? 'linebreake' : 'mediaTitle'}>{media.title}</p>
                                    <button className='mediaButton'>{'|>'}</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <p className='brandListLabel label'>OUR PARTNERS</p>
                <div className="brandList">
                    {brands.map(brand => {
                        return <div className="brandWrapper">
                            <div className='brand' onMouseOver={() => onMouseOver(undefined, brand.id)} onMouseLeave={onMouseLeave}>
                                <img className='brandIcon' src={brand.icon} />
                                <div className={`${mouseOver && brand.id === currentHoveredBrand ? 'brandDetails' : 'hideBrandDetails'}`}>
                                    <p className='brandTitle'>{brand.title}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    );
}

export default MediaBanner