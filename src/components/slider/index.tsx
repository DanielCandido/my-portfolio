import { Slide, Button } from './styled'
import React from 'react';

const Slider: React.FC = () => {
    return (
        <Slide>
            <div>
                <p>Hello</p>
                <h1>I'm Daniel</h1>
                <Button>Let's Go</Button>
            </div>
        </Slide>
    )
}

export default Slider;