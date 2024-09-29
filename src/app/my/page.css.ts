import { style } from '@vanilla-extract/css'
import { vars } from '../globals.css'
export const Main = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
})
export const EmailOuterBox = style({
  width: '100%',
  height: '20%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
export const EmailInnerBox = style({
  width: '90%',
  height: '45%',
  padding: '1.125rem 0rem 1.125rem 1.5rem',
  borderRadius: '0.625rem',
  background: vars.color.gray4,
  display: 'flex',
  gap: '0.625rem',
  alignItems: 'center',
  color: vars.color.white,
})
