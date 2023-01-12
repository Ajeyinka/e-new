
import React from 'react';
import {BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';


const Gallery = () => {

const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const{current} = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft +=300;
    }
  }

  return (
    <div id='gallery'>
        <div className='gallery-images'>
           <h2>Gallery</h2>
           <div className='gallery-images_container' ref={scrollRef}>
                
                <img src="https://i.postimg.cc/R0q2xK2W/001.jpg" alt='gallery' className='gallery__img'/>
                <img src="https://i.postimg.cc/3wc5kn2j/002.jpg" alt='gallery' className='gallery__img'/>
                <img src="https://i.postimg.cc/NGTq08FT/003.jpg" alt='gallery' className='gallery__img'/>
                <img src="https://i.postimg.cc/qR6fyyGP/004.jpg" alt='gallery' className='gallery__img'/>
                <img src="https://i.postimg.cc/28RYdcM2/005.jpg" alt='gallery' className='gallery__img'/>
                <img src="https://i.postimg.cc/5y8ZkJTp/006.jpg" alt='gallery' className='gallery__img'/>
                <img src="https://i.postimg.cc/XvhmjX0Q/007.jpg" alt='gallery' className='gallery__img'/>
                <img src="https://i.postimg.cc/wjwnr04K/008.jpg" alt='gallery' className='gallery__img'/>
                <img src="https://i.postimg.cc/j59LsH8C/hero-free-DT.jpg" alt='gallery' className='gallery__img'/>
                
           </div>
           <div className='app__gallery-images_arrows'>
            <BsArrowLeftShort className='gallery__arrow-icon' onClick={(() => scroll('left'))}/>
            <BsArrowRightShort className='gallery__arrow-icon' onClick={(() => scroll('right'))}/>
          </div>
        </div>
    </div>

  )
}

export default Gallery;