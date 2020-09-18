import Vue from 'vue'
import Router from 'vue-router'
import MyHeard from '@/layout/MyHeard'
import MyContent from "@/components/MyContent"
import ComMent from "@/components/ComMent"
import Store from "@/components/Store"
import ConSelect from "@/components/ConSelect"
import ConGood from "@/components/ConGood"
import ConBad from "@/components/ConBad"


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MyHeard',
      component: MyHeard,
      redirect: 'MyContent',
      children: [
        {
        path: 'MyContent',
       name: MyContent,
       component: MyContent,
        },
        {
          path: 'Store',
          name: 'Store',
          component: Store,
        },
        {
          path: 'ComMent',
          name: 'ComMent',
          component: ComMent,
          redirect: 'ComMent/ConSelect',
          children: [
            {
              path: 'ConSelect',
              name: 'ConSelect',
              component: ConSelect
            },
            {
              path: 'ConGood',
              name: 'ConGood',
              component: ConGood
            },
            {
              path: 'ConBad',
              name: 'ConBad',
              component: ConBad
            }
          ]
        }
      ]
    }

  ]
})
