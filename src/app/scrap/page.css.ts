import { style } from '@vanilla-extract/css'
import { vars } from '../globals.css'
import { recipe } from '@vanilla-extract/recipes'
export const Main = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  paddingInline: '1.5rem',
  justifyContent:'flex-start'
})

export const Header = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: vars.color.white,
  marginTop: '4rem',
  marginBottom:'1rem'
})

export const Head = style({
  fontSize: '1.75rem',
  fontWeight: 'bold',
  fontFamily: 'Mustica Pro',
})

export const Orange = style({
  color: vars.color.primary,
})

export const TabBox = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const FuncButtonContainer = style({
  width:'100%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  paddingBlock:'1.45rem'

})

export const ButtonBox = recipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
    gap:'0.4rem',
    alignItems:'center',
    justifyContent:'space-between'
  },
  variants: {
    type: {
      plus: {
        color: vars.color.white,
      },
      minus: {
        color: vars.color.gray2,
      },
    },
  },
})
export const ScrapTitleContainer = style({
  width:'100%',
  display:'flex',
  flexDirection:'column',
  gap:'0.94rem',
  overflowY:'auto',
  paddingBottom:'70px',
  borderRadius:'0.625rem'
})