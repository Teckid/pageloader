import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// IMPLEMENTING A FONT AWESOME ICON
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MediaSearchbar = (props) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <>
            <div className={`expansionButtonWrapper searchInputWrapper ${props.animateThreeOverlay && 'animateSearchButton'}`}>
                <input className='searchInput' onMouseLeave={() => setIsHovering(!isHovering)} onMouseOver={() => setIsHovering(!isHovering)} value={props.searchValue} onChange={(event) => props.setSearchValue(event.target.value)}/>
                {props.searchValue === '' && <FontAwesomeIcon className="searchIcon" icon={faSearch} />}
            </div>
        </>
    );
}

export default MediaSearchbar;