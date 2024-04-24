import { useCallback } from "react"
import {loadFull} from 'tsparticles'
import {Particles} from 'react-tsparticles'
import particlesConfig from "./config/particlesConfig"

const ParticlesBackground = () =>{

    const particlesInit = useCallback((engine) =>{
        loadFull(engine)
    },[]) 

    return(
        <div>
            <Particles
            id="tsparticles"
            options={particlesConfig}
            init={particlesInit}
/>
        </div>
    )
}

export default ParticlesBackground