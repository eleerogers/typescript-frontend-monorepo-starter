import React, { JSX, useState } from 'react'
import { Star } from './Star'

export const Stars = (): JSX.Element => {
  const [rating, setRating] = useState<null | number>(null)
  const [hoverRating, setHoverRating] = useState<null | number>(null)

  const starArr = []

  for (let i = 1; i <= 5; i++) {
    starArr.push(
      <Star
        index={i}
        rating={rating}
        setRating={setRating}
        hoverRating={hoverRating}
        setHoverRating={setHoverRating}
        key={i}
      />
    )
  }

  return <div className="m-8 text-4xl font-bold text-center">{starArr}</div>
}
