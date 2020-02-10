import React from 'react'
import { Tabs, Tab } from '@material-ui/core'

interface FooterProps {
  readonly muscles: ReadonlyArray<string>
  readonly value: number
  onTabChange(categoryIndex: number): void
}

export const Footer: React.FC<FooterProps> = ({
  muscles,
  value,
  onTabChange,
}) => {
  return (
    <Tabs
      centered
      value={value}
      textColor="primary"
      indicatorColor="primary"
      onChange={(evt, value) => onTabChange(value)}
    >
      {muscles.map((muscle, index) => (
        <Tab key={index} label={muscle} />
      ))}
    </Tabs>
  )
}
