import { style } from '@vanilla-extract/css'

export const Container = style({
  position: 'absolute',
  top: 'calc(100% - 60px)',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#333333',
  height: '60px',
  borderRadius: '15px 15px 0 0',
})

export const ButtonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
})

export const ButtonText = style({
  fontSize: '12px',
})
