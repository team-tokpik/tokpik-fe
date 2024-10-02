import { style } from "@vanilla-extract/css";
import {vars} from '@/app/globals.css'
import { recipe } from "@vanilla-extract/recipes";
export const Square = recipe({
    base: {
        width: '1.1875rem',
    height: '1.1875rem',
    aspectRatio: '1/1',
    flexShrink: 0,
    borderRadius: '0.21875rem',
    backgroundColor: vars.color.gray2,
    },
  variants: {
    color: {
      'ice-breaker': {
        backgroundColor: vars.color.avocado,
      },
      'love': {
        backgroundColor: vars.color.sweet,
      },
      'business': {
        backgroundColor: vars.color.ham,
      },
      'humor': {
        backgroundColor: vars.color.lettuce,
      },
      'issue': {
        backgroundColor: vars.color.tomato,
      },
      'hobby': {
        backgroundColor: vars.color.cheese,
      },
      'self-development': {
        backgroundColor: vars.color.pimento,
      },
      'relation': {
        backgroundColor: vars.color.egg,
      },
      'primary': {
        backgroundColor: vars.color.primary,
      },
    }
  }
})