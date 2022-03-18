import { useRef, useEffect } from 'react';


// THIS CURSORS PURPOUSE IS TO REPLACE THE STANDART ONE
const Cursor = (props) => {
    const cursorRef = useRef(null);
    useEffect(() => {
        document.addEventListener('mousemove', (e) => {

            // FIGURING OUT THE CURRENT MOUSE POSITION
            const { clientX, clientY } = e;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

            //setting values of MousePosition
            props.setMousePosition([mouseX, mouseY]);
        });
    }, []);

    return (
        <div id='cursor' className='cursor' ref={cursorRef}></div>
    );
}

export default Cursor;