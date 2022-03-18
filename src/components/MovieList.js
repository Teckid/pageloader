const MovieList = (props) => {
    // THE MOVIELIST RETURNS A LIST BASED ON THE SEARCH RESULTS GETTING FROM THE API 
    return (
        <>
            <p style={{position:'absolute', color:'white', fontSize: '2.5rem', zIndex: '100', top: '20rem', left: '10rem'}}>SEARCH RESULTS</p>
            <button onClick={() => props.setSearchValue('')} style={{position:'absolute', backgroundColor:'transparent', color: 'white', fontSize: '2rem', zIndex: '100', width: '7rem', height: '7rem', top: '5rem', right: '20rem', borderRadius: '50%', border: '.2rem solid red'}}>X</button>
            <div className="mediaList mediaListOptimizedForSearch">
                {props.movies.map(media => {
                    return <div className="mediaWrapper">
                        <div className='media'>
                            {media.Poster !== 'N/A' && <img className='mediaPosters' src={media.Poster} alt='mediaPoster'/>}
                        </div>
                    </div>
                })}
            </div>
        </>
    );
}

export default MovieList;