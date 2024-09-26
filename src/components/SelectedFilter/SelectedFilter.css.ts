import { style } from '@vanilla-extract/css'
import { vars } from '@/app/globals.css'
export const Tag = style({
  borderRadius: '3.125rem',
  border: `1px solid ${vars.color.primary}`,
  backgroundColor: ' #2C2321',
  padding: '0.25rem 0.625rem 0.25rem 0.9375rem',
  display: 'flex',
  gap: '0.3125rem',
  alignItems: 'center',
  color: 'white',
  // height: '1.5rem',
  flexShrink: 0 /* 요소가 너무 작아지지 않도록 방지 */,
})
