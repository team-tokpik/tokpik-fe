import { style } from '@vanilla-extract/css'
import { vars } from '@/app/globals.css'
export const OuterContainer = style({
  width: '100%',
  padding: '1rem 1.5rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  ':hover': {
    cursor: 'pointer',
  },
})
export const InnerContainer = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'flex-start',
  gap: '0.4rem',
})
export const Text1 = style({
  color: vars.color.white,
  fontSize: '1rem',
})
export const Text2 = style({
  color: vars.color.gray2,
  fontSize: '0.7rem',
})
