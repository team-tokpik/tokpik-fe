import { vars } from '@/app/globals.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const subtitle = style({
  fontSize: 16,
  fontWeight: '400',
})

export const subtitleRecipe = recipe({
  base: subtitle,
  variants: {
    type: {
      relation: {},
      issue: {},
      love: {},
      business: {},
      hobby: {},
      humor: {},
      'ice-breaker': {},
      'self-development': {},
    },
    isCard: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { type: 'relation', isCard: true },
      style: { color: vars.color.eggFont },
    },
    {
      variants: { type: 'issue', isCard: true },
      style: { color: vars.color.tomatoFont },
    },
    {
      variants: { type: 'love', isCard: true },
      style: { color: vars.color.sweetFont },
    },
    {
      variants: { type: 'business', isCard: true },
      style: { color: vars.color.hamFont },
    },
    {
      variants: { type: 'hobby', isCard: true },
      style: { color: vars.color.cheeseFont },
    },
    {
      variants: { type: 'humor', isCard: true },
      style: { color: vars.color.lettuceFont },
    },
    {
      variants: { type: 'ice-breaker', isCard: true },
      style: { color: vars.color.avocadoFont },
    },
    {
      variants: { type: 'self-development', isCard: true },
      style: { color: vars.color.pimentoFont },
    },
    {
      variants: { type: 'relation', isCard: false },
      style: { color: vars.color.egg },
    },
    {
      variants: { type: 'issue', isCard: false },
      style: { color: vars.color.tomato },
    },
    {
      variants: { type: 'love', isCard: false },
      style: { color: vars.color.sweet },
    },
    {
      variants: { type: 'business', isCard: false },
      style: { color: vars.color.ham },
    },
    {
      variants: { type: 'hobby', isCard: false },
      style: { color: vars.color.cheese },
    },
    {
      variants: { type: 'humor', isCard: false },
      style: { color: vars.color.lettuce },
    },
    {
      variants: { type: 'ice-breaker', isCard: false },
      style: { color: vars.color.avocado },
    },
    {
      variants: { type: 'self-development', isCard: false },
      style: { color: vars.color.pimento },
    },
  ],
})
