import { style } from '@vanilla-extract/css'
import { vars } from '../../app/globals.css'

export const OuterContainer = style({
  padding: '1.19rem 1.8rem',
  color: vars.color.gray2,
  lineHeight: '1rem',
  fontSize: '1rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    cursor: 'pointer',
  },
})

export const Selected = style({
  color: vars.color.white,
  borderBottom: `1px ${vars.color.white} solid`,
})
