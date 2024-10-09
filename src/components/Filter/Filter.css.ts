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
    zIndex: 1000,
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
  height:'calc(80px + 34px)',
  display: 'flex',
  gap: '5px',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
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

export const AgeSlider = style({
  width: '100%',
  padding: '0rem 1.5rem',
  marginBottom: '1rem',
  position: 'relative',
})

export const AgeSliderContainer = style({
  position: 'relative',
  width: '100%',
  height: '4px',
  paddingBlock:'1.25rem'
})

export const AgeSliderInput = style({
  position: 'absolute',
  width: '100%',
  appearance: 'none',
  background: 'transparent',
  pointerEvents: 'none',
  zIndex: 2, // 슬라이더 입력을 트랙 위에 배치
  '::-webkit-slider-thumb': {
    appearance: 'none',
    width: '0.85rem',
    height: '0.85rem',
    background: vars.color.white,
    cursor: 'pointer',
    borderRadius: '50%',
    pointerEvents: 'auto',
    transform: 'translateY(-61%)',
    zIndex: 3, // 슬라이더 썸을 가장 위에 배치
  },
})

export const AgeSliderTrack  = recipe({
  base: {
    position: 'absolute',
    height: '0.125rem',
    background: vars.color.primary,
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1, // 트랙을 슬라이더 입력 아래에 배치
  },
  variants: {
    front: {
      true: { zIndex: 1 },
      false: {  width: '100%',
        zIndex: 0,
        backgroundColor: vars.color.gray4, },
    },
  },
})

export const AgeSliderLabels = style({
  display: 'flex',
  justifyContent: 'flex-start',
  marginTop: '1rem',
  color: vars.color.white,
  fontSize: '0.9375rem',
  gap:'0.3rem'
})
export const AgeButtonContainer = style({
  padding: '0rem 1.8rem',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '0.9rem',
})

