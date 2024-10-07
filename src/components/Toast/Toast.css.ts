import { style } from "@vanilla-extract/css";

export const Toast = style({
  width:'90%',
  position: 'fixed',
  top: '80%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor:'#2C2321',
  color: 'white',
  borderRadius: '0.625rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap:'0.625rem',
  fontSize: '1.125rem',
  paddingBlock:'1.125rem',
  zIndex: 1000,
  animation: 'fadeIn 0.5s ease-in-out',
});