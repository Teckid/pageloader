import "../../sass/components/_animatedCircles.scss";

const AnimatedCircle = (props) => {
    let circleArray = [];

    for (let i = 0; i < props.amount; i++) {
        let abc = `${100 + [i]*110}px`;

        circleArray.push(
            <div key={[i]} className="animatedCircles" style={{left: abc}}></div>
            );
        }

    return (
        <>
            {circleArray.map(circle => {
                return(circle);
            })}
        </>
    );
}

export default AnimatedCircle;