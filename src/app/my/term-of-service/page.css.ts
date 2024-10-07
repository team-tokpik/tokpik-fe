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
  borderBottom: '1px solid #e0e0e0',
})

export const TermTitle = style({
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
})

export const TermContent = style({
  fontSize: '14px',
  lineHeight: '1.5',
  whiteSpace: 'pre-wrap',
})

export const SectionContainer = style({
  marginBottom: '20px',
})

export const ContentTitle = style({
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '10px',
})

export const Content = style({
  fontSize: '14px',
  lineHeight: '1.5',
  whiteSpace: 'pre-wrap',
})

