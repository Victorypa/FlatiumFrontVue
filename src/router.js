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
import XtraMaterialsforAddition from './views/XtraMaterialsforAddition.vue'
import CreateXtraWork from './views/CreateXtraWork.vue'
import ActOfWork from './views/ActOfWork.vue'
import ExportAct from './views/ExportAct.vue'
import ExtraWork from './views/ExtraWork.vue'
import ExportExtraWork from './views/ExportExtraWork.vue'
import Balance from './views/Balance.vue'
import DragnDrop from './views/DragnDrop.vue'

Vue.use(Router)

export default new Router({
    routes: [{
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
        {
            path: '/XtraMaterialsforAddition',
            name: 'XtraMaterialsforAddition',
            component: XtraMaterialsforAddition
        },

        {
            path: '/CreateXtraWork',
            name: 'CreateXtraWork',
            component: CreateXtraWork
        },

        {
            path: '/ActOfWork',
            name: 'ActOfWork',
            component: ActOfWork
        },

        {
            path: '/ExportAct',
            name: 'ExportAct',
            component: ExportAct
        },
        {
            path: '/ExtraWork',
            name: 'ExtraWork',
            component: ExtraWork
        },

        {
            path: '/ExportExtraWork',
            name: 'ExportExtraWork',
            component: ExportExtraWork
        },

        {
            path: '/Balance',
            name: 'Balance',
            component: Balance
        },
        {
            path: '/DragnDrop',
            name: 'DragnDrop',
            component: DragnDrop
        },
    ]
})