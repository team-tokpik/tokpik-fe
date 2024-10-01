import { vars } from '@/app/globals.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '6.25rem',
  fontSize: '1.375rem',
  fontWeight: 700,
  height: '29px',
})

export const nativeInput = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  cursor: 'pointer',
})

export const customInput = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  height: '100%',
  borderBottom: `1px solid ${vars.color.gray3}`,
  color: vars.color.white,
  backgroundColor: 'inherit',
  transition: 'border-color 0.3s ease',
})

export const focused = style({
  borderColor: vars.color.primary,
})

export const hasValue = style({
  borderColor: vars.color.white,
})

export const empty = style({
  borderColor: vars.color.gray3,
})

export const input = style({
  width: '6.25rem',
  appearance: 'none',
  textAlign: 'center',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  borderWidth: '0 0 1px 0',
  borderColor: vars.color.gray3,
  outline: 'none',
  color: vars.color.white,
  fontSize: '1.375rem',
  fontWeight: 700,
  backgroundColor: 'inherit',
  ':focus': {
    borderColor: vars.color.primary,
  },
})

export const valuedInput = style([
  input,
  {
    borderColor: vars.color.white,
  },
])
