import React from 'react'
import MovieCard from '@/components/movie-card/card';
import Image from 'next/image';
import { ARROW_ICON } from '@/lib/assets';

const GalleryView = ({ section, sectionData, mappingIndex }) => {
  const sliderRef = React.useRef(null);
  const arrowLeft = React.useRef(null);
  const arrowRight = React.useRef(null);

  const handleScrollListener = () => {
    if (sliderRef.current?.scrollLeft === 0 && arrowLeft.current) arrowLeft.current.style.display = 'none';
    else {
      if (arrowLeft.current) arrowLeft.current.style.display = 'block';
    };

    if (sliderRef.current && ((sliderRef.current.scrollLeft + sliderRef.current.clientWidth) >= sliderRef.current.scrollWidth)) arrowRight.current.style.display = 'none';
    else {
      if (arrowRight.current) arrowRight.current.style.display = 'block';
    }
  };

  React.useEffect(() => {
    handleScrollListener();
    if (sliderRef.current) sliderRef.current.addEventListener('scroll', handleScrollListener);
    return () => {
      if (sliderRef.current) sliderRef.current.removeEventListener('scroll', handleScrollListener);
    }
  }, []);

  const handleScrollLeft = () => {
    const leftPosition = sliderRef.current.scrollLeft;
    sliderRef.current.scrollTo({
      left: leftPosition - 275,
      behavior: 'smooth'
    });
  };

  const handleScrollRight = () => {
    const leftPosition = sliderRef.current.scrollLeft;
    sliderRef.current.scrollTo({
      left: leftPosition + 275,
      behavior: 'smooth'
    });
  };
  


  if (!sectionData || !sectionData?.playlist?.length) return null;

  return (
    <div className="section__layout my-3 container position-relative">
      {section.enableText && <h2 className="section__title">
        {section.title}
      </h2>}
      <Image ref={arrowLeft} onClick={handleScrollLeft} src={ARROW_ICON} unoptimized width={30} height={30} alt="Previous" className="previous__icon center__y__absolute p-1 bg-white rounded-circle" />
      <div ref={sliderRef} className="d-flex w-100 section__gallery scroll__bar__hide gap__flex">
        {sectionData?.playlist?.map((movie, cardIndex) => (
          <MovieCard mappingIndex={mappingIndex} cardIndex={cardIndex} key={movie.mediaid} data={movie} />
        ))}
      </div>
      <Image ref={arrowRight} onClick={handleScrollRight} src={ARROW_ICON} unoptimized width={30} height={30} alt="Previous" className="next__icon center__y__absolute p-1 bg-white rounded-circle" />
    </div>
  )
}

export default GalleryView;