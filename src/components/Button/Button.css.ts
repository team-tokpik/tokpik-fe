import { vars } from '@/app/globals.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const buttonBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  fontSize: '18px',
  height: '55px',
  cursor: 'pointer',
  border: 'none',
  maxWidth: '345px',
})

export const buttonRecipe = recipe({
  base: buttonBase,
  variants: {
    size: {
      small: {
        width: '100px',
      },
      medium: {
        width: '200px',
      },
      large: {
        width: '100%',
      },
    },
    active: {
      true: {
        backgroundColor: vars.color.primary,
        color: vars.color.white,
      },
      false: {
        backgroundColor: vars.color.gray4,
        color: vars.color.gray2,
      },
    },
    color: {
      primary: {
        backgroundColor: vars.color.primary,
        color: vars.color.white,
      },
      secondary: {
        backgroundColor: vars.color.gray4,
        color: vars.color.gray1,
      },
    },
  },
  defaultVariants: {
    size: 'large',
    active: false,
  },
})
