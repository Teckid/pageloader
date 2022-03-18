import Hub from './Hub';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const HubScene = ({ mousePosition, setMousePosition, enableOrbitControl, animateThreeOverlay }) => {
        
    return (
        <div className={`hubCanvas ${animateThreeOverlay ? 'showHubCanvas' : 'hideHubCanvas'}`}>
            <Canvas
                colorManagement
                shadowMap
                camera={{ position: [-45, 25, 45], fov: 14 }}>
                <Suspense fallback={null}>
                    <Hub mousePosition={mousePosition} setMousePosition={setMousePosition} />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={enableOrbitControl} />
            </Canvas>
            <div className={`borderDiv ${animateThreeOverlay ? 'showBorderDiv' : 'hideBorderDiv'}`}></div>
        </div>
    );
}

export default HubScene;
