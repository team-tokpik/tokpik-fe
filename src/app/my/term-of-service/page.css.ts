import { style } from '@vanilla-extract/css'
import { vars } from '@/app/globals.css'
export const Main = style({
  width: '100%',
  height: '100vh',
  paddingTop:'55px',
  color: vars.color.white,
  overflowY: 'auto',
})
export const TermContainer = style({
  padding: '20px',
  marginBottom: '20px',
})

export const TermTitle = style({
  fontSize: '0.9375rem',
  marginBottom: '10px',
  borderBottom: `0.5px solid ${vars.color.gray1}`,
  paddingBlock: '1.1rem',

})

export const TermContent = style({
  fontSize: '0.75rem',
  lineHeight: '140%',
  whiteSpace: 'pre-wrap',
  color: vars.color.gray1,
})

export const SectionContainer = style({
  marginBottom: '20px',
})

export const ContentTitle = style({
  fontSize: '16px',
})

export const Content = style({
  fontSize: '14px',
  lineHeight: '1.5',
  whiteSpace: 'normal' 
})

