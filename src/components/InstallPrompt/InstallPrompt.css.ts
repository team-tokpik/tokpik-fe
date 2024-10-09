import { vars } from '@/app/globals.css'
import { style } from '@vanilla-extract/css'

export const modalBanner = style({
  position: 'fixed',
  top: '1rem',
  left: 0,
  right: 0,
  padding: '1.25rem 1.7rem',
  borderRadius: '0.625rem',
  backgroundColor: vars.color.gray4,
  width: '90%',
  margin: '0 auto',
})

export const modalContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.56rem',
  alignItems: 'center',
})

export const modalTitleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
})

export const modalTitle = style({
  fontSize: '1.125rem',
  fontWeight: 700,
  color: vars.color.white,
})

export const IOSdescriptionContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.56rem',
})

export const AndroiddescriptionContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.94rem',
})

export const modalDescription = style({
  fontSize: '0.9375rem',
  color: vars.color.white,
  fontWeight: 400,
})

export const emphasis = style({
  color: vars.color.primary,
  fontWeight: 700,
})

export const buttonWrapper = style({
  width: '100%',
})
