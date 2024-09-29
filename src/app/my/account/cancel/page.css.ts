import { style } from '@vanilla-extract/css'
import { vars } from '@/app/globals.css'
import { recipe } from '@vanilla-extract/recipes'
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
})

export const InfoContainer = style({
  width: '100%',
  padding: '1.5rem',
  border: `1px solid ${vars.color.gray2}`,
  borderRadius: '0.625rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})
export const InfoHead = style({
  color: vars.color.white,
})
export const InfoSub = style({
  color: vars.color.gray2,
  fontSize: '0.75rem',
})
export const InfoInfo = style({
  color: vars.color.white,
  fontSize: '0.75rem',
})

export const orange = style({
  color: vars.color.primary,
})

export const ButtonContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '4rem',
})

export const FilterContentButton = recipe({
  base: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.9rem',
    color: vars.color.gray2,
    padding: ' 1.12rem 1.5rem',
    ':hover': {
      cursor: 'pointer',
    },
  },
  variants: {
    isReady: {
      true: { color: vars.color.white },
      false: {},
    },
  },
})

export const SubmitButton = recipe({
  base: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  fontSize: '18px',
  height: '55px',
    cursor: 'pointer',
    border: 'none',
  },
  variants: {
    isReady: {
      true: { color: vars.color.white, backgroundColor: vars.color.primary },
      false: { color: vars.color.gray2, backgroundColor: vars.color.gray4 },
    },
  },
})
