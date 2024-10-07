import { vars } from '@/app/globals.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  width: '100%',
  marginTop: 55,
  minHeight: 'calc(100vh + 200px)',
})

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
})

export const captureArea = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  width: '100%',
  backgroundColor: vars.color.black,
})

export const imageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.63rem',
})

export const title = style({
  marginTop: '1.88rem',
  color: vars.color.white,
  fontSize: '1.75rem',
  fontWeight: 600,
  textAlign: 'center',
})

export const fixedContainer = style({
  height: '11rem',
})

export const buttonContainer = style({
  position: 'fixed',
  bottom: '0',
  display: 'flex',
  color: vars.color.white,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '40px',
  gap: '0.94rem',
  width: '80%',
})
