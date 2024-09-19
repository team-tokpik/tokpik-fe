import { FC, SVGProps } from 'react'

export interface NavItem {
  Icon: FC<SVGProps<SVGSVGElement>>
  text: string
  path: string
}
