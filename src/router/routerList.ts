export interface RouterObj {
  path: string;
  src: string;
  name?: string;
  children?: RouterObj[];
}

const list: RouterObj[] = [
  {
    path: '/',
    src: 'home'
  },
  {
    path: '/about',
    src: 'about'
  },
  {
    path: '/*',
    src: 'about'
  }
]



export default list;