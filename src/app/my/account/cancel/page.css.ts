import { style } from '@vanilla-extract/css'
import { vars } from '@/app/globals.css'

export const Main = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingInline: '1.5rem',
  paddingTop: '1.5rem',
  justifyContent: 'space-between',
})
export const HeadContainer = style({
  width: '100%',
  color: vars.color.white,
  fontSize: '1.9rem',
  marginBlock: '1.5rem',
})

export const InfoContainer = style({
  width: '100%',
  padding: '1.5rem',
  border: `1px solid ${vars.color.gray2}`,
  borderRadius: '0.625rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})
export const InfoHead = style({
  color: vars.color.white,
})
export const InfoSub = style({
  color: vars.color.gray2,
  fontSize: '0.75rem',
})
export const InfoInfo = style({
  color: vars.color.white,
  fontSize: '0.75rem',
})

export const orange = style({
  color: vars.color.primary,
})

export const ButtonContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '4rem',
})
