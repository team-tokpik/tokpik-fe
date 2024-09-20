import { FC, SVGProps } from 'react'

export interface NavItemType {
  Icon: FC<SVGProps<SVGSVGElement>>
  text: string
  path: string
}
