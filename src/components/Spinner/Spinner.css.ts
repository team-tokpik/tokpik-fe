import {style, keyframes} from '@vanilla-extract/css'
import { vars } from '@/app/globals.css'

export const OuterContainer = style({
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.color.black,
  zIndex: 1000,
})

export const SpinnerContainer = style({

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '3.63rem',
  gap:'0.65rem'

})

export const Rectangle = style({
    width: '1.1875rem',
    aspectRatio:'1/1',
    flexShrink: 0,
    borderRadius: '0.21875rem',
    backgroundColor: vars.color.primary,
})

// Rectangle1,3,4 을 위한 애니메이션
const bounceKeyframes = keyframes({
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-20px)' },
})

const bounce = style({
  animation: `${bounceKeyframes} 1s ease-in-out infinite`,
})

export const Rectangle1 = style([
  Rectangle,
  bounce,
  {
    animationDelay: '0s',
  }
])
// Rectangle2 를 위한 애니메이션
const bounceRotateKeyframes = keyframes({
  '0%, 100%': { transform: 'rotate(45deg) translateY(0)' },
  '50%': { transform: 'rotate(45deg) translate(-14.14px, -14.14px)' },
})

const bounceRotate = style({
  animation: `${bounceRotateKeyframes} 1s ease-in-out infinite`,
})

export const Rectangle2 = style([
  Rectangle,
  bounceRotate,
  {
    animationDelay: '0.25s',
    transform: 'rotate(45deg)',
  }
])

export const Rectangle3 = style([
  Rectangle,
  bounce,
  {
    animationDelay: '0.5s',
  }
])

export const Rectangle4 = style([
  Rectangle,
  bounce,
  {
    animationDelay: '0.75s',
  }
])

export const LoadingText = style({
    color: vars.color.gray1,
    fontSize: '1.125rem',
    marginBottom: '1.81rem',
})

export const Text = style({
    color: vars.color.white,
    fontSize: '1.75rem',
    width:'18rem',
    whiteSpace: 'pre-line',
    textAlign: 'center',
    fontWeight: 'bold',
})