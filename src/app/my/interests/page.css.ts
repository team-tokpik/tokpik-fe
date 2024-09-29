import { style } from '@vanilla-extract/css'
import { vars } from '@/app/globals.css'
export const Main = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '55px',
  overflow: 'auto',
  border: `1px solid ${vars.color.gray2}`,
})
export const ListContainer = style({
  width: '100%',
  display: 'flex',
  color: vars.color.white,
  padding: '1.19rem 1.5rem',
  gap: '0.5rem',
})
