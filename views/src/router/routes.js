import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/User/SignIn'
import Signup from '@/components/User/SignUp'
import InstructorDashboard from '@/components/InstructorDashboard'
import ForgetPassword from '@/components/User/ForgetPassword'
import ChangePassword from '@/components/User/ChangePassword'
import StudentDashboard from '@/components/StudentDashboard'
import CodeWordSet from '@/components/CodeWordSet'
import CodeWord from '@/components/CodeWord'
import CourseStudent from '@/components/CourseStudent'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      beforeEnter (to, from, next) {
        let logged = localStorage.getItem('status')
        console.log(logged + 'logged status')
        if (logged !== null) {
          if (logged) {
            next('/instructordashboard')
          } else {
            next('/studentdashboard')
          }
        }
        next()
      },
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/instructordashboard',
      name: 'InstructorDashboard',
      component: InstructorDashboard,
      meta: {
        role: 'instructor'
      }
    },
    {
      path: '/forgetpassword',
      name: 'ForgetPassword',
      component: ForgetPassword
    },
    {
      path: '/changepassword',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
      path: '/coursestudent',
      name: 'CourseStudent',
      component: CourseStudent
    },
    {
      path: '/codewordset',
      name: 'CodeWordSet',
      component: CodeWordSet
    },
    {
      path: '/codeword',
      name: 'CodeWord',
      component: CodeWord
    },
    {
      path: '/studentdashboard',
      name: 'StudentDashboard',
      component: StudentDashboard,
      meta: {
        role: 'student'
      }
    }
  ]
})
