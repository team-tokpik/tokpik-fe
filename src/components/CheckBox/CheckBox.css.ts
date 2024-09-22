import { vars } from '@/app/globals.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const checkBoxBase = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  width: '100%',
  height: '100%',
  minHeight: '75px',
  borderRadius: '10px',
})

export const checkBoxRecipe = recipe({
  base: checkBoxBase,
  variants: {
    checked: {
      true: {
        backgroundColor: '#2c2321',
        border: `1px solid ${vars.color.primary}`,
      },
      false: {
        backgroundColor: vars.color.black,
        border: `1px solid ${vars.color.gray4}`,
      },
    },
  },
})

export const emoji = style({
  fontSize: '28px',
})

export const label = style({
  fontSize: '18px',
  fontWeight: '500',
  textAlign: 'center',
})

export const labelRecipe = recipe({
  base: label,
  variants: {
    checked: {
      true: {
        color: vars.color.white,
      },
      false: {
        color: vars.color.gray2,
      },
    },
  },
})
