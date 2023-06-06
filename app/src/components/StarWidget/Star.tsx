import React, { JSX } from 'react'

interface Props {
  index: number
  rating: null | number
  setRating: React.Dispatch<React.SetStateAction<null | number>>
  hoverRating: null | number
  setHoverRating: React.Dispatch<React.SetStateAction<number | null>>
}

export const Star = ({
  index,
  rating,
  setRating,
  hoverRating,
  setHoverRating,
}: Props): JSX.Element => {
  const currRating = hoverRating ? hoverRating : rating
  const starOn = currRating && index <= currRating
  const clickCurrRating = index === rating
  const setClickTo = clickCurrRating ? null : index

  return (
    <div className="inline-block m-3 text-4xl font-bold text-center star">
      <button
        onMouseEnter={() => {
          setHoverRating(index)
        }}
        onMouseLeave={() => {
          setHoverRating(null)
        }}
        onClick={() => {
          setRating(setClickTo)
          if (clickCurrRating) {
            setHoverRating(null)
          }
        }}
      >
        {starOn ? '⭐️' : '☆'}
      </button>
    </div>
  )
}
