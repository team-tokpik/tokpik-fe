import Home from '/public/images/Home.svg'
import MyTokpik from '/public/images/MyTokpik.svg'
import System from '/public/images/System.svg'
import { NavItemType } from '../types/navigation'

export const NAV_ITEMS: NavItemType[] = [
  { Icon: Home, text: 'Home', path: '/' },
  { Icon: MyTokpik, text: 'My Tokpik', path: '/scrap' },
  { Icon: System, text: 'System', path: '/my' },
]
