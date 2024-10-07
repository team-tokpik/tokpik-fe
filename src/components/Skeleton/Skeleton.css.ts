import { keyframes, style } from "@vanilla-extract/css";
import { vars } from '@/app/globals.css'
import { recipe } from '@vanilla-extract/recipes'

const skeletonBgAnimation = keyframes({
  '0%': {
    backgroundColor: vars.color.gray4,
  },
  '50%': {
    backgroundColor: vars.color.gray2,
  },
  '100%': {
    backgroundColor: vars.color.gray4,
  },
})

export const Skeleton = recipe({
  base: {
    backgroundColor: vars.color.gray3,
    animation: `${skeletonBgAnimation} 1.5s ease-in-out infinite`,
  },
  variants: {
    radius: {
      full: {
        borderRadius: '9999px',
      },
      half: {
        borderRadius: '10px',
      },
    },
  },
})