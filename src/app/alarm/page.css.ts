import { style } from '@vanilla-extract/css'
import { vars } from '../globals.css'

export const container = style({
  display: 'flex',
  width: '100%',
  height: '100vh',
})

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'calc(55px + 2.81rem)',
  gap: '3rem',
  color: vars.color.white,
  padding: '0 24px',
  fontSize: '1.375rem',
  fontWeight: 700,
})

export const timeWrapper = style({
  display: 'flex',
  gap: '0.94rem',
})

export const inputWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.63rem',
  height: '1.4rem',
})
