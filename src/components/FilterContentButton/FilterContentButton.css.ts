import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../../app/globals.css'

export const OuterContainer = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.9rem',
    color: vars.color.gray2,
    padding: '1.12rem 0rem 1.12rem 1.5rem',
    ':hover': {
      cursor: 'pointer',
    },
  },
  variants: {
    size: { 50: { width: '50%' }, 100: { width: '100%' } },
    isOn: {
      true: { backgroundColor: '#2C2321', color: vars.color.white },
      false: {},
    },
  },
})
