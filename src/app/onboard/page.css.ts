import { style } from '@vanilla-extract/css'
import { vars } from '../globals.css'

export const container = style({
  width: '100%',
  minHeight: '100vh',
  paddingBottom: '30px',
})

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
})

export const carouselSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const title = style({
  marginTop: '2rem',
  fontSize: '1.75rem',
  textAlign: 'center',
  fontWeight: 600,
  color: vars.color.white,
  padding: '0 2.8rem',
  wordBreak: 'keep-all',
})

export const subTitle = style({
  marginTop: '1rem',
  marginBottom: '2rem',
  fontSize: '0.9375rem',
  fontWeight: 400,
  color: vars.color.white,
  padding: '0 2.8rem',
})

export const loginWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
})

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
})

export const withNoLogin = style({
  color: vars.color.gray3,
  fontSize: '0.9375rem',
  fontWeight: 400,
  textDecoration: 'underline',
  textAlign: 'center',
})
