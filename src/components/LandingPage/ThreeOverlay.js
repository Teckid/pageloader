import "../../sass/components/abc.css";
import BubbleButton from "./BubbleButton";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const ThreeOverlay = ({ enableOrbitControl, animateThreeOverlay, setAnimateThreeOverlay}) => {

    let animateInOrOut = animateThreeOverlay ? 'animateIn' : 'animateOut';

    const [expandSceneRef, expandSceneIntersecting] = useInView({
        threshold: .8
    });

    useEffect(() => {
        setAnimateThreeOverlay(expandSceneIntersecting);
    }, [expandSceneIntersecting]);

    return (
        <>
            <div className={`outterWrapper ${enableOrbitControl ? 'blendOutOverlay' : 'blendInOverlay'} ${animateInOrOut}`}>
                <div className={`contentContainer ${animateInOrOut}`}>
                    <p className='threeOverlayLogo'>Hub</p>
                    <div className='textContainer'>
                        <p className='headline'>The ultimate gaming and movie experience</p>
                        <div className='subtextWrapper'>
                            <p className='subtext'>Have you ever dreamed of a place full of magical moments, diverse worlds and stories that really matter?</p>
                            <br />
                            <br />
                            <br />
                            <p className='subtext'>Well, we did and created it!</p>
                            <p className='subtext'> Get every movie, game and series out there right after release.</p>
                            <br />
                            <p className='subtext'>What are you waiting for? Get comfy, take a sip of your fav drink and dive into your most beloved universe with HUB!</p>
                        </div>
                    </div>
                    <BubbleButton />
                </div>
            </div>
            <div className={`blurDivider ${expandSceneIntersecting ? 'animateDividerIn' : 'animateDividerOut'}`} ref={expandSceneRef} ></div>
        </>
    );
};

export default ThreeOverlay;