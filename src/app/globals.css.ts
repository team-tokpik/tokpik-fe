import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'

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
  scrollbarWidth: 'none', // Firefox에서 스크롤바 숨기기
})

globalStyle('::-webkit-scrollbar', {
  display: 'none', // Chrome, Safari에서 스크롤바 숨기기
})
globalStyle('html', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.color.gray1,
  fontSize: '16px', // rem 기준
})

globalStyle('body', {
  width: '100%',
  maxWidth: '467px',
  minHeight: '100%',
  padding: '0',
  margin: '0',
  position: 'relative',
  backgroundColor: vars.color.black,
})

globalStyle('h1, h2, h3, h4, h5, h6, p', {
  margin: '0',
  padding: '0',
})

globalStyle('button', {
  all: 'unset',
})
