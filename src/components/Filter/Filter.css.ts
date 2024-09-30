import { style } from '@vanilla-extract/css'
import { vars } from '../../app/globals.css'
import { recipe } from '@vanilla-extract/recipes'
// export const OuterContainer = recipe({
//   base: {
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-end',
//     // backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     zIndex: '2',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     transition: 'backgroundColor 0.3s ease-in-out',
//   },
//   variants: {
//     isOn: {
//       true: { backgroundColor: 'rgba(0, 0, 0, 0)' },
//       false: { backgroundColor: 'rgba(0, 0, 0, 0)', zIndex: '-1' },
//     },
//   },
// })
export const MiddleContainer = recipe({
  base: {
    position: 'absolute',
    left: 0,
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: '100',
    backgroundColor: vars.color.black,
    borderRadius: '0.9375rem 0.9375rem 0rem 0rem',
    transition: 'height 0.3s ease-in-out',
  },
  variants: {
    isOn: {
      true: {
        height: '83.5%',
        bottom: '0',
      },
      false: {
        height: '0%',
        bottom: '0%',
      },
    },
  },
})

export const InnerContainer = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  zIndex: '3',
  alignItems: 'center',
})

export const HandleBox = style({
  width: '100%',
  height: '1.9375rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
export const Handle = style({
  width: '3.625rem',
  height: '0.3125rem',
  flexShrink: 0,
  borderRadius: '6.25rem',
  background: '#555',
})
export const TabBox = style({
  width: '90%',
  height: '3.76rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
export const SelectedBox = style({
  width: '100%',
  height: '4rem',
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  padding: '1.5rem 1.69rem',
  color: vars.color.gray3,
  overflowY: 'hidden',
  overflowX: 'scroll',
  gap: '0.625rem',
})

export const ContentBox = style({
  width: '100%',
  flexWrap: 'wrap',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
})
export const ButtonBox = style({
  width: '100%',
  display: 'flex',
  gap: '5px',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '0.94rem 1rem',
  borderTop: `1px solid ${vars.color.gray4}`,
})
export const RefleshButton = style({
  width: '25%',
  display: 'inline-flex',
  gap: '0.3rem',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.94rem 0rem',
  color: vars.color.gray3,
  ':hover': {
    cursor: 'pointer',
  },
})
export const SubmitButton = style({
  width: '70%',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.94rem 0rem',
  color: vars.color.white,
  backgroundColor: vars.color.primary,
  borderRadius: '9px',
  ':hover': {
    cursor: 'pointer',
  },
})
export const SubHead = style({
  width: '100%',
  padding: '0.62rem 1.5rem',
  color: vars.color.gray2,
})
export const SubBody = style({
  width: '100%',

  padding: '0rem 0rem',
  color: vars.color.gray1,
  display: 'flex',
  flexWrap: 'wrap',
})
