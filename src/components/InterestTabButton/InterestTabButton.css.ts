import { style } from '@vanilla-extract/css'
import { vars } from '@/app/globals.css'

export const subHeaderContainer = style({
  width: '100%',
  display: 'flex',
  height: '9%',
  borderTop: `1px solid ${vars.color.gray2}`,

})
export const subHeader = style({
  flex: 4,
  padding: '1.12rem 1.5rem',
  height: '100%',
})
export const subHeaderHead = style({
  color: vars.color.white,
  fontSize: '1.125rem',
  marginBottom: '0.3rem',
})
export const subHeaderSub = style({
  color: vars.color.gray2,
  fontSize: '0.75rem',
})

export const modifyButton = style({
  color: vars.color.gray2,
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  ':hover': {
    cursor: 'pointer',
  },
})
