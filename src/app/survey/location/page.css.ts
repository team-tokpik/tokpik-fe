import { vars } from '@/app/globals.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.color.black,
  padding: '0 24px',
  height: `100vh`,
  width: '100%',
})

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  marginTop: '74px',
  marginLeft: '4px',
})

export const title = style({
  fontSize: '28px',
  fontWeight: 'normal',
  color: vars.color.white,
})

export const subTitle = style({
  fontSize: '15px',
  fontWeight: '400',
  color: vars.color.gray2,
})

export const buttonWrapper = style({
  position: 'absolute',
  bottom: '56px',
  width: 'calc(100% - 48px)',
})

export const locationBox = style({
  display: 'flex',
  gap: 15,
  marginTop: '41px',
  width: '100%',
  flexWrap: 'wrap',
})

export const locationItem = style({
  width: 'calc(50% - 7.5px)',
  height: '111px',
})
