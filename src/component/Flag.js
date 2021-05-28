import React from 'react';
import { Carousel } from 'react-bootstrap';
const Flag=({images,countries})=>{
    return (

        <Carousel fade={true} pause={false}>

        {images.map((image,index)=>{
            return(
                <Carousel.Item interval={3000}>
        <img 
          className="d-block w-100 h-100"
          src={image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'yellow'}}>{countries[index]}</h3>
        </Carousel.Caption>
      </Carousel.Item>
            )
        })}
      
      </Carousel>
    )

}

export default Flag