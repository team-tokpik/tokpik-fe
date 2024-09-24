import { vars } from '@/app/globals.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  color: vars.color.white,
  height: 'none',
  paddingBottom: '60px',
})

export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '17px',
  padding: '24px',
  borderBottom: `1px solid ${vars.color.gray4}`,
})

export const subtitleSection = style({
  display: 'flex',
  justifyContent: 'space-between',
})

export const title = style({
  fontSize: '28px',
  fontWeight: '700',
  fontStyle: 'normal',
  lineHeight: '140%',
})

export const contentSection = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
  gap: '20px',
  borderBottom: `1px solid ${vars.color.gray4}`,
})

export const contentList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  margin: '0',
  padding: '0 18px',
  listStyleImage: 'url(/images/list_style.svg)',
})

export const contentTitle = style({
  fontSize: '16px',
  fontWeight: '400',
  marginBottom: '10px',
})

export const contentContent = style({
  color: vars.color.gray1,
  fontSize: '15px',
  fontWeight: '400',
})

export const relativeCardSection = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
  gap: '14px',
})

export const relativeCardWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '12px',
})

export const relativeCard = style({})
