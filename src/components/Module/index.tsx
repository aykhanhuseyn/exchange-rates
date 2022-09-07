import React from 'react'
import { EnterValue } from '../EnterValue'
import { SelectExchange } from '../SelectExchange'
import { Card } from '../shared/Card'
import { Typography } from '../shared/Typography'
import './style.scss'

export const Module = () => {
  return (
    <div className='container'>
        <SelectExchange/>
        <Card  >
          <Typography>Amount</Typography>
          <EnterValue/>
        </Card>
    </div>
  )
}
