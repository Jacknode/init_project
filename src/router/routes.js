/**
 * Created by leibo on 17/11/29.
 */
import Login from '@/components/Login'
export default [
  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '*',
    hidden: true,
    redirect: { name: 'Login' }
  },
]
