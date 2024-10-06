import { style } from "@vanilla-extract/css";
import { vars } from "@/app/globals.css";
export const Container = style({
    width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '1.44rem 1.5rem',
  fontSize: '1.125rem',
  gap: '0.25rem'
});

export const SquareContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  gap: '0.25rem',
  justifyItems: 'center',
  alignItems: 'center',
  transform: 'scale(0.65)',
  placeItems: 'center',
  width: '15%'
});

export const Square2 = style({
  transform: 'rotate(45deg)'
});
export const PlusWrapper = style({
  gridRow: '1 / span 2', 
  gridColumn: '1 / span 2', 
  height: '100%', 
  justifySelf: 'center',
  alignSelf: 'center',
  transform: 'scale(1.8)'
});