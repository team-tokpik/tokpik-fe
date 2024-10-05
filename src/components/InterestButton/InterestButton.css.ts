import { vars } from '@/app/globals.css'
import { recipe } from '@vanilla-extract/recipes'
export const OuterContainer = recipe({
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.625rem',
    gap: '0.5rem',
    fontSize: '1.125rem',
    cursor: 'pointer',
  },
  variants: {
    size: {
      small: { height: '6rem' },
      large: { height: '8rem' },
    },
    isOn: {
      true: {
        border: `1.8px solid ${vars.color.primary}`,
        backgroundColor: '#2C2321',
        color: vars.color.white,
      },
      false: {
        border: `1.8px solid ${vars.color.gray4}`,
        color: vars.color.gray2,
      },
    },
  },
})
