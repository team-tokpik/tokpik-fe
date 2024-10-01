import { style } from "@vanilla-extract/css";
import {vars} from '@/app/globals.css'
export const Square = style({
    width: '1.1875rem',
    height: '1.1875rem',
    aspectRatio: '1/1',
    flexShrink: 0,
    borderRadius: '0.21875rem',
    backgroundColor: vars.color.gray2,
  })