import React from 'react'
import { Tabs, Tab } from '@material-ui/core'

interface FooterProps {
  readonly muscles: ReadonlyArray<string>
}

export const Footer: React.FC<FooterProps> = ({ muscles }) => {
  return (
    <Tabs centered value={0} textColor="primary" indicatorColor="primary">
      {muscles.map((muscle, index) => (
        <Tab key={index} label={muscle} />
      ))}
    </Tabs>
  )
}
