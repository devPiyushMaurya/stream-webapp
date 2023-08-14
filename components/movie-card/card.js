import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MovieCard = ({ data, cardIndex, mappingIndex }) => {
    const { title = '', images = [], mediaid, description } = data;
  return (
    <Link href={`/m/${mediaid}/${title.replace(/ /g, '-')}`} className="movie__card__layout d-block text-dark text-decoration-none position-relative">
        <Image priority={mappingIndex === 0 && (cardIndex <= 3)} alt={title} className="movie__card__image" src={images[0]?.src} width={275} height={150} />
        <h3 className="movie__card__title mt-2">{title}</h3>
    </Link>
  )
}

export default MovieCard;