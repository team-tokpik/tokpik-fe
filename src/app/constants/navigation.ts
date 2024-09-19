import Home from '/public/images/Home.svg'
import Scrap from '/public/images/Scrap.svg'
import My from '/public/images/My.svg'
import { NavItem } from '@/types/navigation'

export const NAV_ITEMS: NavItem[] = [
  { Icon: Home, text: 'Home', path: '/' },
  { Icon: Scrap, text: 'Scrap', path: '/scrap' },
  { Icon: My, text: 'My', path: '/my' },
]
