import { vars } from '@/app/globals.css'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  position: 'fixed',
  maxWidth: '467px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0 24px',
  height: '55px',
  borderBottom: `1px solid ${vars.color.gray4}`,
  color: vars.color.white,
  backgroundColor: vars.color.black,
})
