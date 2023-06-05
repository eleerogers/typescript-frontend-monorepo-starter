import React, { JSX } from 'react'
import { Stars } from './Stars'

export const StarWidget = (): JSX.Element => {
  return (<div className="m-8 text-4xl font-bold text-center">
      5-Star Rating Widget
      <Stars />
    </div>
  )
}
