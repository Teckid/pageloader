import './def.css';
const BubbleButton = () => {
    // THE BUBBLE BUTTON IS AN ANIMATED BUTTON THAT USES DIFFERENT FILTERS TO CREATE A BUBBLE EFFECT. THIS LEADS THE USERS ATTENTION ON THE BUTTON
    return (
        <>
            <svg className="filter" xmlns="http://w3.org/200/svg" version="1.1">
                <defs>
                    <filter id="gooey">
                        <feGaussianBlur in={'SourceGraphic'} stdDeviation={'5'} result="blur" />
                        <feColorMatrix in={'blur'} type="matrix" values="
                            1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 19 -9"
                            result="highContrastGraphic" />
                        <feComposite in={'SourceGraphic'} in2={'highContrastGraphic'} operator={'atop'} />
                    </filter>
                </defs>
            </svg>
            <div className='bubbleButtonWrapper'>
                <div className="gooey-button" id="bubbleButton">
                    <span className='bubbles'>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                    </span>
                </div>
                <button className='overlayButton'>Subscribe Now</button>
            </div>
        </>
    );
}

export default BubbleButton;