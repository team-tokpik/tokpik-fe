import { style } from '@vanilla-extract/css'
import { vars } from '../../globals.css'

export const OuterContainer = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // 검정색 배경에 50% 투명도
  zIndex: '2',
  position: 'absolute',
  top: 0,
  left: 0,
})

export const innerContainer = style({
  width: '100%',
  height: '83.5%',
  display: 'flex',
  flexDirection: 'column',
  zIndex: '3',
  backgroundColor: vars.color.black, // 불투명한 배경
})
