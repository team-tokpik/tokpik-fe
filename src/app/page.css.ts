import { style } from '@vanilla-extract/css'
import { vars } from './globals.css'
export const Main = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
})

export const Header = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  padding: '1.88rem 1.5rem 1.56rem',
})

export const HeaderText = style({
  color: vars.color.white,
  fontSize: '1.75rem',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '140%' /* 2.45rem */,
  letterSpacing: '-0.0175rem',
})
export const HeaderText2 = style({
  color: vars.color.primary,
  fontSize: '1.75rem',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '140%' /* 2.45rem */,
  letterSpacing: '-0.0175rem',
})
export const FilterBox = style({ display: 'flex' })

export const FilterButton = style({
  width: '1.9375rem',
  aspectRatio: '1',
  border: `0.5px ${vars.color.gray2} solid`,
  backgroundColor: vars.color.gray4,
  borderRadius: '25px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  ':hover': {
    cursor: 'pointer', // 커서를 포인터로 변경
  },
})
export const CardBox = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})
