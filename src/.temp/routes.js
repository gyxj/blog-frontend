const c1 = () => import(/* webpackChunkName: "page--src-pages-user-id-vue" */ "D:\\lagou\\training\\part3\\module4\\gongyexj-gridsome\\src\\pages\\user\\[id].vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "D:\\lagou\\training\\part3\\module4\\gongyexj-gridsome\\src\\templates\\Tag.vue")
const c3 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "D:\\lagou\\training\\part3\\module4\\gongyexj-gridsome\\src\\templates\\Post.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "D:\\lagou\\training\\part3\\module4\\gongyexj-gridsome\\src\\pages\\Contact.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\lagou\\training\\part3\\module4\\gongyexj-gridsome\\src\\pages\\About.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "D:\\lagou\\training\\part3\\module4\\gongyexj-gridsome\\src\\pages\\404.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\lagou\\training\\part3\\module4\\gongyexj-gridsome\\src\\pages\\Index.vue")

export default [
  {
    name: "__user_id",
    path: "/user/:id",
    component: c1,
    meta: {
      dataPath: "/user/_id.json",
      dynamic: true
    }
  },
  {
    path: "/tag/:id/",
    component: c2
  },
  {
    path: "/post/:id/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
