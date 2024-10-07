import { vars } from '@/app/globals.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  width: '80%',
  maxWidth: '22rem',
  display: 'flex',
  flexDirection: 'column',
})

export const table = style({
  color: vars.color.white,
  width: '100%',
  border: `1px solid ${vars.color.gray2}`,
  borderRadius: '0.5rem',
})

export const thead = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  borderBottom: `1px solid ${vars.color.gray2}`,
})

export const title = style({
  fontSize: '1.375rem',
  fontWeight: 700,
})

export const description = style({
  display: 'flex',
  flexDirection: 'column',
  color: vars.color.gray1,
  textAlign: 'right',
  fontSize: '0.75rem',
  gap: '0.3rem',
  fontWeight: 400,
})

export const percentage = style({
  fontSize: '0.75rem',
  color: vars.color.primary,
  fontWeight: 400,
})

export const content = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  borderBottom: `1px solid ${vars.color.gray3}`,
  fontSize: '0.75rem',
  fontWeight: 400,
})

export const topicType = style({
  color: vars.color.gray2,
})
