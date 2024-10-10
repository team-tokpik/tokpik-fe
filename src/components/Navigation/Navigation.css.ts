import { style } from '@vanilla-extract/css'

export const Container = style({
  position: 'fixed',
  bottom: '0',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#333333',
  height: '94px',
  borderRadius: '15px 15px 0 0',
  zIndex: '998',
  paddingBottom: '34px',
  fontFamily: 'Mustica Pro',
})

export const ButtonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0px',
  lineHeight: '100%',
})

export const ButtonText = style({
  fontSize: '12px',
})
