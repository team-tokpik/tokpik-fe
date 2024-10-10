import { style, keyframes } from '@vanilla-extract/css'
import { vars } from '@/app/globals.css'
import { Square } from '../Square/Square.css'
import { recipe } from '@vanilla-extract/recipes'

export const OuterContainer = recipe({
  base: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    pointerEvents: 'none',// 이벤트 무시 - 터치,드래그 등 어떤 상호작용도 안되도록
  },
  variants: {
    size: {
      full: {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
      },
      partial: {
        width: '100%',
        height: '100%',
      },
    },
  },
})

const rotateKeyframes = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '25%': { transform: 'rotate(90deg)' },
  '50%': { transform: 'rotate(180deg)' },
  '75%': { transform: 'rotate(270deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const SpinnerContainer = recipe({
  base: {
    marginBottom: '3.63rem',
  },
  variants: {
    type: {
      square: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, auto)',
        gridTemplateRows: 'repeat(2, auto)',
        gap: '0.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '3.63rem',
        animation: `${rotateKeyframes} 4s ease-in-out infinite`,
      },
      line: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.65rem',
      },
    }
  }
})

// type: square 에서 사선으로 움직이는 애니메이션
const bounceDirectionalKeyframes = {
  upLeft: keyframes({
    '0%, 100%': { transform: 'translate(0, 0)' },
    '50%': { transform: 'translate(-3.54px, -3.54px)' },
  }),
  upRight: keyframes({
    '0%, 100%': { transform: 'translate(0, 0) rotate(45deg)' },
    '50%': { transform: 'translate(3.54px, -3.54px) rotate(45deg)' },
  }),
  downLeft: keyframes({
    '0%, 100%': { transform: 'translate(0, 0)' },
    '50%': { transform: 'translate(-3.54px, 3.54px)' },
  }),
  downRight: keyframes({
    '0%, 100%': { transform: 'translate(0, 0)' },
    '50%': { transform: 'translate(3.54px, 3.54px)' },
  }),
}

// type: line 에서 세로로 움직이는 애니메이션
const bounceKeyframes = {
  1: keyframes({
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' },
  }),
  2: keyframes({
    '0%, 100%': { transform: 'rotate(45deg) translateY(0)' },
    '50%': { transform: 'rotate(45deg) translate(-14.14px, -14.14px)' },
  }),
  3: keyframes({
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' },
  }),
  4: keyframes({
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' },
  }),
}

const createSquareRecipe = (direction: keyof typeof bounceDirectionalKeyframes, delay: string, order: 1 | 2 | 3 | 4) => recipe({
  base: [Square({ color: 'primary' })],
  variants: {
    type: {
      square: {
        animation: `${bounceDirectionalKeyframes[direction]} 1s ease-in-out infinite`,
        animationDelay: '0.125s',
      },
      line: {
        animation: `${bounceKeyframes[order]} 1s ease-in-out infinite`,
        animationDelay: delay,
      },
    },
  },
})

export const Square1 = createSquareRecipe('upLeft','0.1s',1)
export const Square2 = createSquareRecipe('upRight','0.25s',2)
export const Square3 = createSquareRecipe('downLeft','0.5s',3)
export const Square4 = createSquareRecipe('downRight','0.75s',4)



export const LoadingText = style({
  color: vars.color.gray1,
  fontSize: '1.125rem',
  marginBottom: '1.81rem',
  whiteSpace: 'pre-line',
  textAlign: 'center',
})

export const Text = style({
  color: vars.color.white,
  fontSize: '1.75rem',
  width: '18rem',
  whiteSpace: 'pre-line',
  textAlign: 'center',
  fontWeight: 'bold',
})
