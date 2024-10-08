import { style } from "@vanilla-extract/css";
import { vars } from "@/app/globals.css";
export const Background = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 300
});

export const OuterContainer = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: vars.color.black,
  width: '90%',
  height:'45%',
  borderRadius: '0.625rem',
  display:'flex',
  flexDirection:'column',
  overflowY:'scroll'
});

export const Header = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: vars.color.white,
  backgroundColor:vars.color.black,
  fontSize: '1.125rem',
  borderBottom: `1px solid ${vars.color.gray4}`,
  padding: '1.44rem 1.5rem',
  height:'17%',
  position:'sticky',
  top:0,
  zIndex:3
});

export const Content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

});




