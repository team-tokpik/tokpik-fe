import { style } from '@vanilla-extract/css'
import { vars } from '@/app/globals.css'
export const Main = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  paddingInline: '1.5rem',
  paddingTop: '55px',
  justifyContent: 'space-between',
})
export const HeadContainer = style({
  width: '100%',
  color: vars.color.white,
  fontSize: '1.9rem',
  marginBlock: '1.5rem',
  marginTop:'4.5rem'

})

export const InterestContainer = style({


    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
  
})

export const HeadSub = style({
  fontSize: '0.9375rem',
  
  color: vars.color.gray2,
  marginTop: '0.5rem',
})
export const SubmitButton = style({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  fontSize: '18px',
  height: '55px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: vars.color.primary,
    color: vars.color.white,
    marginBottom: '4.5rem',
  })
