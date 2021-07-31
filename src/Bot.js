import React, { useState } from 'react'
import './Bot.css';

// Bot
const botWidth = 100
const botHeight = 160
// Frame
const fromFrame = 10
const frameWidth = botWidth + ( fromFrame * 2 )
const frameHeight = botHeight + ( fromFrame * 2 )
// Face
const faceWidth = botWidth * 0.4
const faceHeight = botHeight * 0.4
const faceX = ( ( botWidth - faceWidth ) / 2 ) + fromFrame
const faceY = ( ( botHeight - faceHeight ) / 2 ) + fromFrame
// Eye 
const eyeWidth = botWidth * 0.035
const eyeHeight = botHeight * 0.1
const leftEyeX = faceX + ( eyeWidth / 2 )
const rightEyeX = faceX + faceWidth - ( eyeWidth / 2 )
const eyeY = faceY + eyeHeight - ( eyeWidth / 2 )

function Bot() {
  const [eyeSize, setEyeSize] = useState([eyeWidth, eyeHeight])

  const handleEye = () => {
    setEyeSize([eyeWidth, eyeWidth])
    setTimeout(() => {
      setEyeSize([eyeHeight/2, eyeWidth])
      setTimeout(() => {
        setEyeSize([eyeWidth, eyeWidth])
        setTimeout(() => {
          setEyeSize([eyeWidth, eyeHeight])
        }, 75)
      }, 100)
    }, 75)
  }

  return (
    <svg width={frameWidth} height={frameHeight} >
      <rect 
      x={fromFrame} y={fromFrame}
      width={botWidth} height={botHeight}
      className='Bot--body'
      />
      <rect
      x={faceX} y={faceY}
      width={faceWidth} height={faceHeight}
      className='Bot--face'
      />
      <rect
      x={leftEyeX-(eyeSize[0]/2)} y={eyeY-eyeSize[1]+(eyeWidth/2)}
      width={eyeSize[0]} height={eyeSize[1]}
      className='Bot--eye'
      onClick={handleEye}
      />
      <rect
      x={rightEyeX-(eyeSize[0]/2)} y={eyeY-eyeSize[1]+(eyeWidth/2)}
      width={eyeSize[0]} height={eyeSize[1]}
      className='Bot--eye'
      onClick={handleEye}
      />
    </svg>
  );
} 

export default Bot;
