import { HomeOutlined, ReadOutlined } from '@ant-design/icons'

import Home from '../pages/home'
import Login from '../pages/login'
import Posts from '../pages/posts'
import CreatePost from '../pages/posts/create'
import EditPost from '../pages/posts/edit'

import { LAYOUT_NAME } from '../configs'

export enum ROUTER_NAME {
  LOGIN = '/login',
  HOME = '/',
  POSTS = '/posts',
  POSTS_CREATE = '/posts/create',
  POSTS_EDIT = '/posts/edit',
}

export const ROUTER_BY_PATH: any = {
  [ROUTER_NAME.LOGIN]: {
    path: ROUTER_NAME.LOGIN,
    title: 'Đăng nhập',
    component: Login,
  },
  [ROUTER_NAME.HOME]: {
    exact: true,
    path: ROUTER_NAME.HOME,
    title: 'Trang chủ',
    component: Home,
    menuIcon: HomeOutlined,
  },
  [ROUTER_NAME.POSTS]: {
    exact: true,
    path: ROUTER_NAME.POSTS,
    title: 'Danh sách bài học',
    component: Posts,
    menuIcon: ReadOutlined,
  },
  [ROUTER_NAME.POSTS_CREATE]: {
    path: ROUTER_NAME.POSTS_CREATE,
    title: 'Thêm bài học',
    component: CreatePost,
  },
  [ROUTER_NAME.POSTS_EDIT]: {
    path: ROUTER_NAME.POSTS_EDIT,
    title: 'Chi tiết bài học',
    component: EditPost,
  },
}

export const BREADCRUMB_BY_PATH: any = {
  [ROUTER_NAME.HOME]: [ROUTER_BY_PATH[ROUTER_NAME.HOME]],
  [ROUTER_NAME.POSTS]: [
    ROUTER_BY_PATH[ROUTER_NAME.HOME],
    ROUTER_BY_PATH[ROUTER_NAME.POSTS],
  ],
  [ROUTER_NAME.POSTS_CREATE]: [
    ROUTER_BY_PATH[ROUTER_NAME.HOME],
    ROUTER_BY_PATH[ROUTER_NAME.POSTS],
    ROUTER_BY_PATH[ROUTER_NAME.POSTS_CREATE],
  ],
  [ROUTER_NAME.POSTS_EDIT]: [
    ROUTER_BY_PATH[ROUTER_NAME.HOME],
    ROUTER_BY_PATH[ROUTER_NAME.POSTS],
    ROUTER_BY_PATH[ROUTER_NAME.POSTS_EDIT],
  ],
}

const routes = [
  {
    layout: LAYOUT_NAME.BLANK,
    items: [ROUTER_BY_PATH[ROUTER_NAME.LOGIN]],
  },
  {
    layout: LAYOUT_NAME.MAIN,
    items: [
      ROUTER_BY_PATH[ROUTER_NAME.HOME],
      ROUTER_BY_PATH[ROUTER_NAME.POSTS],
      ROUTER_BY_PATH[ROUTER_NAME.POSTS_CREATE],
      ROUTER_BY_PATH[ROUTER_NAME.POSTS_EDIT],
    ],
  },
]

export default routes
