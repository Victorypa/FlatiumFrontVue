import Vue from 'vue'
import Router from 'vue-router'
import Create from './views/Create.vue'
import Estimates from './views/Estimates.vue'
import Login from './views/Login.vue'
import Projects from './views/Projects.vue'
import TimetableStartDate from './views/TimetableStartDate.vue'
import Timetable from './views/Timetable.vue'
import CreateAllWorks from './views/CreateAllWorks.vue'
import AdditionMaterials from './views/AdditionMaterials.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/estimates',
      name: 'estimates',
      component: Estimates
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/timetableStartDate',
      name: 'timetableStartDate',
      component: TimetableStartDate
    },
    {
      path: '/timetable',
      name: 'timetable',
      component: Timetable
    },
    {
      path: '/createallworks',
      name: 'createallworks',
      component: CreateAllWorks
    },
    {
      path: '/additionMaterials',
      name: 'additionMaterials',
      component: AdditionMaterials
    },
    
  ]
})
