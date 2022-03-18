// GENERAL NEEDED IMPORTS
import { useEffect, useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import "./sass/main.scss";
import { useInView, InView } from "react-intersection-observer";
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';

// COMPONENTS
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import ShortProfile from "./components/ShortProfile";
import MovieList from "./components/MovieList";
import MediaSearchbar from "./components/MediaSearchbar";
import HubScene from './components/three/SpaceHub/HubScene';
import ThreeOverlay from "./components/LandingPage/ThreeOverlay";
import MediaPage from "./components/MediaPage/index";
import About from "./components/About";
import Profile from "./components/Profile";

// MOVIE POSTER
import HarryPotter from './assets/image/HarryPotter.jpg';
import StarWars from './assets/image/Starwars.jpg';
import ReadyPlayerOne from './assets/image/ReadyPlayerOne.jpg';
import Hobbit from './assets/image/Hobbit.jpg';
import Matrix from './assets/image/MatrixResurrections.jpg';
import SpiderMan from './assets/image/SpiderManNoWayHome.jpg';
import Deadpool from './assets/image/Deadpool.jpg';
import Batman from './assets/image/Batman.jpeg';
import NightmareOnElmStreet from './assets/image/ANightmareOnElmStreet.jpg';

// MOVIE BRANDS
import Pixar from './assets/image/PixarIcon.png';
import Marvel from './assets/image/MarvelIcon.png';
import WarnerBros from './assets/image/WarnerBrosIcon.png';
import Disney from './assets/image/DisneyIcon.png';
import Netflix from './assets/image/NetflixIcon.png';
import Universal from './assets/image/UniversalIcon.png';
import DC from './assets/image/DCIcon.png';
import Paramount from './assets/image/ParamountIcon.png';

// GAMING BRANDS
import Playstation from './assets/image/PlaystationStudiosIcon.png';
import Xbox from './assets/image/XboxGameStudiosIcon.png';
import EA from './assets/image/EAIcon.png';
import Ubisoft from './assets/image/UbisoftIcon.png';
import Blizzard from './assets/image/BlizzardIcon.png';
import GuerillaGames from './assets/image/GuerillaGamesIcon.png';
import Nintendo from './assets/image/NintendoIcon.png';
import Rockstar from './assets/image/RockstarIcon.png';

// GAMING POSTER
import Fifa from './assets/image/Fifa22.jpg';
import AssassinsCreed from './assets/image/AssassinsCreedValhalla.jpg';
import GTA from './assets/image/GTAV.png';
import Eldenring from './assets/image/EldenRing.jpg';
import Horizon from './assets/image/HorizonForbiddenWest.webp';
import AOE from './assets/image/AOE4.jpg';
import Zelda from './assets/image/ZeldaBOTW.jpg';
import Mariokart from './assets/image/MarioKart.jpg';

// HIGHLIGHTED BANNER POSTER
import highlightMovieBanner from './assets/image/HighlightMovieBanner.png';
import highlightGamingBanner from './assets/image/HighlightGamingBanner.jpg';

function App() {
  const [loading, setLoading] = useState(true);
  const [profileBtn, setProfileBtn] = useState(0);
  const [movies, setMovies] = useState([null]);
  const [searchValue, setSearchValue] = useState('');
  const [mousePosition, setMousePosition] = useState([0, 0])
  const [enableOrbitControl, setEnableOrbitControl] = useState(false);
  const [animateThreeOverlay, setAnimateThreeOverlay] = useState(false);

  const [mainImageRef, mainImageIntersecting] = useInView({
    threshold: .5
  });

  const getMediaRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ac16de59`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  }

  useEffect(() => {
    getMediaRequest(searchValue);
  }, [searchValue])

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  const getProfileButton = () => {
    let btn = document.getElementById('profile-button');
    let rect = btn.getBoundingClientRect();
    setProfileBtn(rect);
  }

  const onProfileHover = () => {
    getProfileButton();
    document.getElementById('quickLog-wrapper').classList.add('expand');
    document.getElementById('cursor').classList.add('profile-cursor');
  }

  const onProfileLeave = () => {
    document.getElementById('quickLog-wrapper').classList.remove('expand');
    document.getElementById('cursor').classList.remove('profile-cursor');
  }

  // TITLES AND DESCRIPTIONS FOR HIGHLIGHTED MOVIE AND GAME BANNERS
  const movieBannerTitle = 'StarWars: The Mandalorian';
  const gamingBannerTitle = 'Elden Ring';
  const highlightedMovieDescription = 'Din Djarin, a lone warrior and bounty hunter, embarks on a journey to the outer limits of the galaxy in hopes of escaping the clutches of the New Republic authorities. On his journey, he accepts a shady job';
  const highlightedGamingDescription = 'The Golden Order has been destroyed. Arise, Tainted One, and let grace guide you to command the power of the Elden Ring and become the Elden Lord of the Between Lands. In the Between Lands, ruled by Queen Marika the Eternal, the Elden Ring was broken, the source of the Earth Tree. Marikas children, all demigods, seized the fragments of the Elden ring, henceforth known as Greater Runes. The insane depravity of their new power sparked a war: the Shattering. A war that meant detachment from the Higher Will. Now the guiding hand of mercy shall be bestowed upon the tainted, spurned by golden mercy and banished from the land between. Dead, yet alive, you are far from mercy. Follow the path into the Between Lands beyond the Sea of ​​Mist and submit to the Elden Ring';

  const featuredMovies = [
    {
      id: 0,
      title: 'Harry Potter und der Feuerkelch',
      poster: HarryPotter
    },
    {
      id: 1,
      title: 'StarWars Episode 7',
      poster: StarWars
    },
    {
      id: 2,
      title: 'Ready Player One',
      poster: ReadyPlayerOne
    },
    {
      id: 3,
      title: 'Hobbit',
      poster: Hobbit
    },
    {
      id: 4,
      title: 'Matrix Resurrections',
      poster: Matrix
    },
    {
      id: 5,
      title: 'Spider-Man No Way Home',
      poster: SpiderMan
    },
    {
      id: 6,
      title: 'Deadpool',
      poster: Deadpool
    },
    {
      id: 7,
      title: 'Batman',
      poster: Batman
    },
    {
      id: 8,
      title: 'A Nightmare on Elm-Street',
      poster: NightmareOnElmStreet
    }
  ];

  const movieBrands = [
    {
      id: 0,
      title: 'Pixar',
      icon: Pixar
    },
    {
      id: 1,
      title: 'Warner Bros',
      icon: WarnerBros
    },
    {
      id: 2,
      title: 'Disney',
      icon: Disney
    },
    {
      id: 3,
      title: 'Marvel',
      icon: Marvel
    },
    {
      id: 4,
      title: 'Netflix',
      icon: Netflix
    },
    {
      id: 5,
      title: 'Universal',
      icon: Universal
    }, {
      id: 6,
      title: 'Paramount',
      icon: Paramount
    },
    {
      id: 7,
      title: 'DC Universe',
      icon: DC
    },
  ];

  const featuredGames = [
    {
      id: 0,
      title: 'Fifa 22',
      poster: Fifa
    },
    {
      id: 1,
      title: 'Assassins Creed Valhalla',
      poster: AssassinsCreed
    },
    {
      id: 2,
      title: 'Elden Ring',
      poster: Eldenring
    },
    {
      id: 3,
      title: 'Mario Kart 8 Deluxe',
      poster: Mariokart
    },
    {
      id: 4,
      title: 'Zelda: Breath Of The Wild',
      poster: Zelda
    },
    {
      id: 5,
      title: 'Age Of Empires 4',
      poster: AOE
    },
    {
      id: 6,
      title: 'Horizon: Forbidden West',
      poster: Horizon
    },
    {
      id: 7,
      title: 'Grand Theft Auto V',
      poster: GTA
    },
  ];

  const gamingBrands = [
    {
      id: 0,
      title: 'Playstation Studios',
      icon: Playstation
    },
    {
      id: 1,
      title: 'Xbox Game Studios',
      icon: Xbox
    },
    {
      id: 2,
      title: 'Electronic Arts',
      icon: EA
    },
    {
      id: 3,
      title: 'Ubisoft',
      icon: Ubisoft
    },
    {
      id: 4,
      title: 'Activison Blizzard',
      icon: Blizzard
    },
    {
      id: 5,
      title: 'Guerilla Games',
      icon: GuerillaGames
    },
    {
      id: 6,
      title: 'Nintendo',
      icon: Nintendo
    },
    {
      id: 7,
      title: 'Rockstar Games',
      icon: Rockstar
    },
  ];

  return (
    <Router>
      <Cursor mousePosition={mousePosition} setMousePosition={setMousePosition} />
      <Switch>
        <Route path='/'>
          <AnimateSharedLayout type='crossfade'>
            <AnimatePresence>
              {loading ? (
                <motion.div key='loader'>
                  <Loader setLoading={setLoading} />
                </motion.div>
              ) : (
                <div className="container">
                  <section className="special">
                    <>
                      <Header
                        onMouseOver={onProfileHover}
                        onMouseLeave={onProfileLeave}
                      />
                      <ShortProfile profileButton={profileBtn} />
                      <Banner />
                      {!loading && (
                        <div ref={mainImageRef} className={`transition-image final ${mainImageIntersecting && 'sizeReset'}`}>
                          <motion.img
                            src={process.env.PUBLIC_URL + '/images/login-img.jpg'}
                            layoutId='main-image-1'
                            transition={{ ease: [.6, .01, -.05, .96], duration: 1.5 }}
                          />
                        </div>
                      )}
                    </>
                  </section>
                  <section className='section two'>
                    <ThreeOverlay animateThreeOverlay={animateThreeOverlay} setAnimateThreeOverlay={setAnimateThreeOverlay} enableOrbitControl={enableOrbitControl} />
                    <HubScene mousePosition={mousePosition} animateThreeOverlay={animateThreeOverlay} setMousePosition={setMousePosition} enableOrbitControl={true} />
                    <div className={movies.length > 1 && searchValue !== '' ? 'media-wrapper' : ''}>
                      {movies.length > 1 && searchValue !== '' ? <MovieList movies={movies} setSearchValue={setSearchValue} /> : <div />}
                    </div>
                    <div className='searchbar-wrapper'>
                      <MediaSearchbar animateThreeOverlay={animateThreeOverlay} searchValue={searchValue} setSearchValue={setSearchValue} />
                    </div>
                  </section>
                  <section className='section three'>
                    <MediaPage medias={featuredMovies} brands={movieBrands} bannerTitle={movieBannerTitle} highlightDescription={highlightedMovieDescription} highlightBanner={highlightMovieBanner} />
                  </section>
                  <section className='section four'>
                    <MediaPage medias={featuredGames} brands={gamingBrands} bannerTitle={gamingBannerTitle} highlightDescription={highlightedGamingDescription} highlightBanner={highlightGamingBanner} />
                  </section>
                  <section className='section five'>
                    <About />
                  </section>
                </div>
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </Route>
      </Switch>
      <Switch>
        <Route path='/movies'>
          <section className='section three'>
            <MediaPage medias={featuredMovies} brands={movieBrands} bannerTitle={movieBannerTitle} highlightDescription={highlightedMovieDescription} highlightBanner={highlightMovieBanner} />
          </section>
        </Route>
      </Switch>
      <Switch>
        <Route path='/games'>
          <section className='section four'>
            <MediaPage medias={featuredGames} brands={gamingBrands} bannerTitle={gamingBannerTitle} highlightDescription={highlightedGamingDescription} highlightBanner={highlightGamingBanner} />
          </section>
        </Route>
      </Switch>
      <Switch>
        <Route path='/about'>
          <section className='section five'>
            <About />
          </section>
        </Route>
      </Switch>
      <Switch>
        <Route path='/profile'>
          <section className='section five'>
            <ShortProfile profileButton={profileBtn} />
            <Profile />
          </section>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
