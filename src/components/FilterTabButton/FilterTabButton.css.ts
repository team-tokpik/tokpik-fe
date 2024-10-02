import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../app/globals.css'

export const OuterContainer = recipe({
  base: {
    flex: '1',
    padding: '1.19rem 0rem',
    lineHeight: '1rem',
    fontSize: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ':hover': {
      cursor: 'pointer',
    },
  },
  variants: {
    isSelected: {
      true: {
        color: vars.color.white,
        borderBottom: `1.5px ${vars.color.white} solid`,
      },
      false: {
        color: vars.color.gray2,
      },
    },
  },
})
