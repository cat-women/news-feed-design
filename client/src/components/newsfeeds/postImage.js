import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselComponent = props => {
  return <Carousel>
      {props.images.map(image => <div>
          <img src={image} alt="post image" />
        </div>)}
    </Carousel>
}

export default CarouselComponent
