import { style } from '@vanilla-extract/css'
import { vars } from '../../app/globals.css'

export const OuterContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.9rem',
  color: vars.color.gray2,
  padding: '1.12rem 0rem 1.12rem 1.5rem',
  ':hover': {
    cursor: 'pointer',
  },
})
