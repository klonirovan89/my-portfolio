import {
  FooterMenuItemsType,
  HeaderMenuItemsType,
  ItemsSliderType,
  SkillsDataType,
  TabsItemsType,
  WorksDataType,
} from './types'
import socialImg from '../../assets/images/proj-1.png'
import timerImg from '../../assets/images/proj-2.png'

export const itemsSlider: ItemsSliderType = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    userName: '@Ivan Ivanow',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    userName: '@Ivan Ivanow',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    userName: '@Ivan Ivanow',
  },
]

export const footerMenuItems: FooterMenuItemsType = [
  {
    iconId: 'instagram',
    href: 'https://www.instagram.com/pasha.shcherbachenko/?igsh=MXNlYTd1eXkyd2hsbw%3D%3D',
  },
  {
    iconId: 'telegram',
    href: 'https://t.me/klonirovan89',
  },
  {
    iconId: 'vk',
    href: 'https://vk.com/id12689079',
  },
  {
    iconId: 'linkedin',
    href: 'https://www.linkedin.com/in/%D0%BF%D0%B0%D0%B2%D0%B5%D0%BB-%D1%89%D0%B5%D1%80%D0%B1%D0%B0%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-b11413273/',
  },
]

export const headerMenuItems: HeaderMenuItemsType = [
  { title: 'Home', href: 'home' },
  { title: 'Skills', href: 'skills' },
  { title: 'Works', href: 'works' },
  { title: 'Testimony', href: 'testimony' },
  { title: 'Contact', href: 'contact' },
]

export const skillsData: SkillsDataType = [
  {
    iconId: 'code',
    title: 'html5',
    href: 'https://html.com/html5/',
  },
  {
    iconId: 'css',
    title: 'css3',
    href: 'https://css3.com/',
  },
  {
    iconId: 'react',
    title: 'React',
    href: 'https://react.dev/',
  },
  {
    iconId: 'redux',
    title: 'Redux',
    href: 'https://redux.js.org/',
  },
  {
    iconId: 'javascript',
    title: 'JavaScript',
    href: 'https://www.javascript.com/',
  },
  {
    iconId: 'typescript',
    title: 'typescript',
    href: 'https://www.typescriptlang.org/',
  },
  {
    iconId: 'styledComponents',
    title: 'styled components',
    href: 'https://styled-components.com/',
  },
  {
    iconId: 'rest',
    title: 'Rest API',
    href: '',
  },
  {
    iconId: 'axios',
    title: 'Axios',
    href: 'https://axios-http.com/',
  },
  {
    iconId: 'sass',
    title: 'SCSS/SASS',
    href: 'https://sass-lang.com/',
  },
  {
    iconId: 'vite',
    title: 'Vite',
    href: 'https://vitejs.dev/',
  },
  {
    iconId: 'storybook',
    title: 'Storybook',
    href: 'https://storybook.js.org/',
  },
  {
    iconId: 'figma',
    title: 'WEB DESIGN',
    href: 'https://www.figma.com/',
  },
  {
    iconId: 'materialUI',
    title: 'Material UI',
    href: 'https://mui.com/',
  },
  {
    iconId: 'git',
    title: 'GIT',
    href: 'https://git-scm.com/',
  },
]

export const tabsItems: TabsItemsType = [
  {
    title: 'All',
    status: 'all',
  },
  {
    title: 'landing page',
    status: 'landing',
  },
  {
    title: 'React',
    status: 'react',
  },
  {
    title: 'spa',
    status: 'spa',
  },
]

export const worksData: WorksDataType = [
  {
    src: socialImg, //TODO
    title: 'Cards',
    text: 'In this application you can create a set of cards on absolutely any topic and use them for memorization. You can also look at decks of other users. The main page contains filtering, navigation and sorting elements, while the decks themselves are presented in table form. The application implements authorization, registration and password recovery.',
    type: 'react',
    id: 'React',
    href: 'https://github.com/klonirovan89/flashcards',
    demo: 'https://cards-production.vercel.app/',
  },
  {
    src: timerImg, //TODO
    title: 'Portfolio ',
    text: "This portfolio project is designed to provide a visually appealing and user-friendly way to display my professional work and achievements. It includes information about me, my skills, projects I've worked on, and how to contact me.",
    type: 'spa',
    id: 'spa',
    href: 'https://github.com/klonirovan89/my-portfolio',
    demo: 'https://cards-production.vercel.app/', //TODO
  },
]
