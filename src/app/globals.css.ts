import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'
import { style } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    primary: '#fb5531',
    white: '#fafafa',
    black: '#212121',
    gray1: '#d9d9d9',
    gray2: '#777777',
    gray3: '#555555',
    gray4: '#333333',
    egg: '#ffd877',
    eggFont: '#d88200',
    tomato: '#ff8651',
    tomatoFont: '#cd3e00',
    sweet: '#ffc794',
    sweetFont: '#f1493e',
    ham: '#ffc6b5',
    hamFont: '#973600',
    cheese: '#ffefc5',
    cheeseFont: '#d88200',
    lettuce: '#d6ffbd',
    lettuceFont: '#3d6e4a',
    avocado: '#e3ff93',
    avocadoFont: '#6E3B00',
    pimento: '#42a121',
    pimentoFont: '#0F3A00',
  },
})
globalStyle('*', {
  textDecoration: 'none',
  boxSizing: 'border-box',
})
globalStyle('html', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  backgroundColor: vars.color.gray1,
})

globalStyle('body', {
  width: '100%',
  maxWidth: '467px',
  height: '100%',
  padding: '0 24px',
  margin: '0',
  position: 'relative',
  backgroundColor: 'white',
})

globalStyle('.navigation-container', {
  margin: '0 -24px',
})

globalStyle('h1, h2, h3, h4, h5, h6, p', {
  margin: '0',
  padding: '0',
})
