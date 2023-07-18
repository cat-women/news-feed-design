import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselComponent = props => {
  const carouselContainerStyle = {
    width: '75%',
    height: '400px',
    margin: '0 auto',
    
  }
  const imageStyle = {
    maxWidth: '400px',
    maxHeight: '300px',
    display: 'block',
    margin: '0 auto '
  }
  return (
    <div>
      <Carousel width ="900px">
        {props.images.map(image =>
          <div key={image}>
            <img src={image} alt="post image" style={imageStyle} />
          </div>
        )}
      </Carousel>
    </div>
  )
}

export default CarouselComponent
