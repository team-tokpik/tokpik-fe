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

export const title = style({
  marginTop: '74px',
  marginLeft: '4px',
  fontSize: '28px',
  fontWeight: 'normal',
  color: vars.color.white,
})

export const inputWrapper = style({
  marginTop: '50px',
})

export const buttonWrapper = style({
  position: 'absolute',
  bottom: '56px',
  width: 'calc(100% - 48px)',
})

export const checkBoxWrapper = style({
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

export const label = style({
  fontSize: '16px',
  fontWeight: '400',
  color: vars.color.gray1,
  marginLeft: '4px',
})

export const genderWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '15px',
})

export const genderBox = style({
  width: 'calc(50% - 15px)',
  height: '111px',
})
