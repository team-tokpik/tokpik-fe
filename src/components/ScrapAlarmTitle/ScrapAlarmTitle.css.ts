import { style } from "@vanilla-extract/css";
import {vars }from '@/app/globals.css'

export const OuterContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection:'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: vars.color.white,
  borderRadius: '0.625rem',
  background: vars.color.gray4,
  padding:'1rem 1.5rem'
})

export const TextContainer = style({
    display:'flex',
    flexDirection:'column',
    gap:'0.55rem',
    width: '80%',
    paddingLeft: '1.3rem'
})

export const TimeText = style({
  fontSize: '0.75rem',
  color: vars.color.gray2,
})

export const SubContainer = style({
    display: 'flex',
    flexDirection: 'row',
    gap: '0.03rem',
    fontFamily: 'Pretendard',
    fontSize: '12px',
    alignItems: 'center',

})

const square = style({
  transform: 'scale(0.7)'
})


export const Square1 = style ([square])
export const Square2 = style([square,{
   transform: 'rotate(45deg) scale(0.6)'
}])

export const Square3 = style ([square])
export const Square4 = style ([square])
