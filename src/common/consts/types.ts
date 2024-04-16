export type TabsStatusType = 'all' | 'landing' | 'react' | 'spa'

export type TabsItemsType = { title: string; status: TabsStatusType }[]

export type WorksDataType = {
  src: string
  title: string
  text: string
  type: string
  id: string
  href: string
  demo: string
}[]

export type SkillsDataType = {
  iconId: string
  title: string
}[]

export type HeaderMenuItemsType = {
  title: string
  href: string
}[]

export type FooterMenuItemsType = {
  iconId: string
  href: string
}[]

export type ItemsSliderType = {
  text: string
  userName: string
}[]

export type FlexWrapperType = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
}
