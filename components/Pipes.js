import React from 'react';
import { View } from 'react-native';

const Pipes = (pipesPosX, pipeWidth, pipeHeight, gap) => {
    // const pipeWith = 60
    // const pipeHeight = 300
    // const gap = 50
    return(
        <>
            <View style={{
                position: 'absolute',
                backgroundColor: 'green',
                width: pipeWidth,
                height: pipeHeight,
                left : pipesPosX,
                bottom: 0 + pipeHeight + gap,
            }}/>
            <View style={{
                position: 'absolute',
                backgroundColor: 'green',
                width: pipeWidth,
                height: pipeHeight,
                left : pipesPosX,
                bottom: 0 + pipeHeight + gap,
            }}/>
        </>

    )

}

export default Pipes