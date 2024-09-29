import { style } from '@vanilla-extract/css'
import { vars } from '@/app/globals.css'
import { recipe } from '@vanilla-extract/recipes'
export const Main = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '55px',
})
export const Button = style({
  width: '100%',
  height: '2%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: vars.color.white,
  padding: '1.5rem',
  ':hover': {
    cursor: 'pointer',
  },
})

export const ModalOuterContainer = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
export const ModalInnerContainer = style({
  width: '21.5625rem',
  height: '10.875rem',
  backgroundColor: vars.color.black,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '8px',
  padding: '1rem',
  '@media': {
    'screen and (min-width: 375px)': {
      width: '18em',
      height: '9rem',
    },
  },
})
export const ModalPContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})
export const ModalHead = style({
  color: vars.color.white,
  fontSize: '1.125rem',
  marginTop: '0.3rem',
  marginBottom: '0.57rem',
})
export const ModalSub = style({
  color: vars.color.gray2,
  fontSize: '0.8375rem',
})
export const ModalButtonBox = style({
  width: '100%',
  // height: '20%',
  display: 'flex',
  justifyContent: 'space-between',
})
export const ModalButton = recipe({
  base: {
    width: ' 48%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    color: vars.color.white,
    fontSize: '0.8375rem',

    padding: '0.625rem 0rem',
    ':hover': {
      cursor: 'pointer',
    },
  },
  variants: {
    isOk: {
      true: { backgroundColor: vars.color.primary },
      false: { backgroundColor: vars.color.gray4 },
    },
  },
})
