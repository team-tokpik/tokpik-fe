import { vars } from '@/app/globals.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
})

export const label = style({
  marginLeft: '4px',
  fontSize: '16px',
  fontWeight: '400',
  color: vars.color.gray1,
})

export const input = style({
  width: '100%',
  padding: '10px 20px',
  border: `1px solid ${vars.color.gray4}`,
  backgroundColor: 'inherit',
  borderRadius: '10px',
  outline: 'none',
  color: vars.color.gray2,
  ':focus': {
    border: `1px solid ${vars.color.primary}`,
    backgroundColor: '#2C2321',
    color: vars.color.white,
  },
})
