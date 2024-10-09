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
  height: '85%',
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
});


export const Sub = style({
  fontSize: '0.9375rem',
  color: vars.color.gray2,
});

export const relativeCardWrapper = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start', 
  gap: '0rem',
  overflowY: 'auto',
})
  
export const Node = recipe({
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
    paddingBlock: '0.5rem',
    paddingLeft: '2rem',
    position: 'relative',
  },
  variants: {// 선
    position: {
      start: {
        ':before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0.48rem',
          width: '1px',
          height: '90%',
          transform: 'translateY(25px)',
          backgroundColor: vars.color.gray2,
          zIndex: '5',
        }
      },
      middle: {
        ':before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0.48rem',
          width: '1px',
          height: '100%',
          transform: 'translateY(25px)',
          backgroundColor: vars.color.gray2,
          zIndex: '5',
        }
      },
      end: {
        ':before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0.48rem',
          width: '1px',
          height: '36%',
          backgroundColor: vars.color.gray2,
          zIndex: '5',
        }
      },
    },
  },
});

export const NodeTitle = recipe({
  base: {
  fontSize: '1.125rem',
  fontWeight: 'bold',
  color: vars.color.primary,
  ':before':{ //공
    content: 'var(--before-content, "")',
    position:'absolute',
    top:'0.65rem',
    left:'0',
    width: '1rem',
    height: '1rem',
    borderRadius: '50%',
    backgroundColor: vars.color.primary,
    zIndex:'10',
  }
},
variants: {
  position: {
    start: {
      ':before':{
        backgroundColor: vars.color.primary,
      }
    },
    middle: {
      ':before':{
        backgroundColor: vars.color.white,
        transform: 'translateY(0.5rem)',
        color: vars.color.black,
        textAlign: 'center',
        fontSize: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }    },
    end: {
      ':before':{
        backgroundColor: vars.color.primary,
      }    }
  }
}
})

export const NodeContent = style({
  fontSize: '0.9375rem',
  color: vars.color.gray1,
})
export const NodeMiddle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  gap: '1rem',
  color: vars.color.white,
  width: '100%',
})



export const ButtonContainer = style({
  width: '100%',
  height: '30%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
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
