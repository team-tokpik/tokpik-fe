import { vars } from '../../app/globals.css'
import { recipe } from '@vanilla-extract/recipes'
export const OuterContainer = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.9rem',
    color: vars.color.gray2,
    padding: '1.12rem 1.5rem',
    ':hover': {
      cursor: 'pointer',
    },
  },
  variants: {
    size: {
      50: { width: '50%' },
      100: { width: '100%' },
    },
  },
})
export const Input = recipe({
  base: {
    backgroundColor: 'rgba(0,0,0,0)',
    border: 'none',
    outline: 'none',
    padding: 0,
    margin: 0,
    color: vars.color.white,
    caretColor: vars.color.white /* 커서 색깔은 원하는 대로 설정 */,
  },
  variants: {
    size: {
      50: { width: '5.8rem' },
      100: { width: '20rem' },
    },
  },
})
