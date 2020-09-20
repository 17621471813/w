import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/layout/HomePage'
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
      name: 'HomePage',
      component: HomePage,
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
