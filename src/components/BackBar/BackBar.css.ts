import { vars } from '@/app/globals.css'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '0 24px',
  height: '55px',
  borderBottom: `1px solid ${vars.color.gray4}`,
  color: vars.color.white,
  backgroundColor: vars.color.black,
})
