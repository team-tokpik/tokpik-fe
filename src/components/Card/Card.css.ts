import { vars } from '@/app/globals.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const cardBase = style({
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  overflow: 'hidden',
})

export const cardRecipe = recipe({
  base: cardBase,
  variants: {
    size: {
      large: {
        width: '100%',
        // height: '140%',
        aspectRatio: 343/483,
        
        // padding: '0 24px',
        position: 'absolute',
        transition: 'transform 0.1s ease-in-out',
      },
      medium: {
        width: '100%',
        padding: '0.88rem 1rem',
      },
      small: {
        width: '100%',
        height: '106px',
        padding: '0.88rem 1rem',
      },
    },
    type: {
      relation: { background: vars.color.egg, color: vars.color.eggFont },
      issue: { background: vars.color.tomato, color: vars.color.tomatoFont },
      love: { background: vars.color.sweet, color: vars.color.sweetFont },
      business: { background: vars.color.ham, color: vars.color.hamFont },
      hobby: { background: vars.color.cheese, color: vars.color.cheeseFont },
      humor: { background: vars.color.lettuce, color: vars.color.lettuceFont },
      'ice-breaker': { background: vars.color.avocado, color: vars.color.avocadoFont },
      'self-development': { background: vars.color.pimento, color: vars.color.pimentoFont },
    },
    relativePosition: {
      '0': {zIndex: 1,
        // transform: 'scale(1.1)'
      },
      '1': {
        opacity: 0.3,
        transform: 'scale(0.9) translateY(13%)',
      },
      '-1': {
        opacity: 0.3,
        transform: 'scale(0.9) translateY(-13%)',
      },
      'more': {
        opacity: 0, // 투명하게
      },
    },
  },
});
export const title = style({
  fontSize: 28,
  fontWeight: 'bold',
  color: vars.color.black,
  wordBreak: 'break-all',
  // lineHeight: '140%',
  lineHeight: '150%', // 행간을 늘리기 위해 160%로 설정
})

export const description = style({
  fontSize: 16,
  color: vars.color.gray3,
})

export const subtitle = style({
  fontSize: 16,
})

export const smallTitle = style([
  title,
  {
    fontSize: 18,
  },
])

export const largeContentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: 16,
  padding: '0 24px',
})

export const mediumContentWrapper = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '0.5rem',
})

export const smallContentWrapper = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '0.5rem',
})

export const smallTitleWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
})


export const cardImage = style({
  width: '100%',
  aspectRatio: '345 / 190',
  // margin: '0 0 0 24px',
  // transform: 'scale(1.1)',
})
export const alarmNumber = recipe({
  base: {
    fontSize: '0.75rem',
    width: '1.25rem',
    height: '1.25rem',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: vars.color.primary,
    color: vars.color.white,
  },
  variants: {
    alarmNumber: {
      0: {
        backgroundColor: vars.color.gray1,
        color: vars.color.gray1,
      },
    },
  },

})

