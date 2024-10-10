import { style } from "@vanilla-extract/css";
import { vars } from "@/app/globals.css";

export const OuterContainer = style({
  width: '4rem',
  height: '4rem',
  color: vars.color.white,
  display: 'grid', 
  gridTemplateRows: '1fr 1fr', 
  gridTemplateColumns: '1fr 1fr',
  fontSize: '1.75rem',
  fontFamily: 'Mustica Pro',
  fontWeight: '700',
  lineHeight: '2rem',   
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '0rem',
  
})