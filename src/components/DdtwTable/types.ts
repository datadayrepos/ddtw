export type ComponentCell = {
  type: 'component'
  component: object
  slot?: { // for passing ina dditional components, ie icons
    component: object
    location?: 'prefix' | 'suffix' // for buttons specifically, can be expanded
  }
  props: Record<string, any>
}

export type ImageCell = {
  type: 'image'
  src: string
  alt: string
}

export type ImageTextCell = {
  type: 'imagetext'
  src: string
  alt: string
  text: string
}

export type TextCell = {
  type: 'text'
  text: string
  extratext?: string // extra etxt that can recieve formatting for color
  extrastyle?: string
}

export type IconTextCell = {
  type: 'iconText'
  component: any // The Vue component for the icon
  text: string
}

export type TableCellType = ComponentCell | ImageCell | ImageTextCell | TextCell | IconTextCell | string
export type TableRowType = TableCellType[]
