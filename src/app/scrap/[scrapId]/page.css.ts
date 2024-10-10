import { style } from "@vanilla-extract/css";
import { vars } from "@/app/globals.css";
import { recipe } from "@vanilla-extract/recipes";
export const OuterContainer = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const InnerContainer = style({
  width: '100%',
  height: '80%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingInline: '1.5rem',

});

export const Header = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  
  justifyContent: 'flex-start',
  color: vars.color.white,
  marginTop: '6rem',
  marginBottom: '3rem',
  gap: '1rem',
});

export const Head = style({
  fontSize: '1.75rem',
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1.2rem',
  lineHeight: '140%',

});


export const Sub = style({
  fontSize: '0.9375rem',
  color: vars.color.gray2,
});

export const relativeCardWrapper = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  overflowY: 'auto',
})

export const ButtonContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '1.5rem',
  marginBottom: '4rem',
  paddingInline: '1.5rem',
  paddingTop:'1.5rem',
  borderTop:`1px solid ${vars.color.gray4}`,
})


export const ButtonBase = style({
    width:'27%',
    display: 'flex',
    alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  fontSize: '1.125rem',
    cursor: 'pointer',
    border: 'none',
    padding:'0.94rem 2.44rem',
    gap:'0.31rem'
})
export const ExportButton = style([ButtonBase, {
    color: vars.color.white, 
    backgroundColor: vars.color.primary
  }])
  
  export const AlarmButton = style([ButtonBase, {
    color: vars.color.gray2,
    backgroundColor: vars.color.gray4 
  }])

  export const AlarmSubmitButton = recipe({
    base  : ButtonBase,
    variants: {
      on: {
        true: {
          color: vars.color.white,
          backgroundColor: vars.color.primary,
          width:'100%'
        },
        false: {
          color: vars.color.gray2,
          backgroundColor: vars.color.gray4,
          width:'100%'
        },
      },
    },
    defaultVariants: {
      on: false,
    },
  });
