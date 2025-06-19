import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import discussjingpaishangpin from '@/views/modules/discussjingpaishangpin/list'
    import jingpaidingdan from '@/views/modules/jingpaidingdan/list'
    import paimaizhe from '@/views/modules/paimaizhe/list'
    import yonghu from '@/views/modules/yonghu/list'
    import shangpinfenlei from '@/views/modules/shangpinfenlei/list'
    import pingjiadingdan from '@/views/modules/pingjiadingdan/list'
    import chat from '@/views/modules/chat/list'
    import messages from '@/views/modules/messages/list'
    import config from '@/views/modules/config/list'
    import jingpaishangpin from '@/views/modules/jingpaishangpin/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '拍卖资讯',
        component: news
      }
      ,{
	path: '/discussjingpaishangpin',
        name: '竞拍商品评论',
        component: discussjingpaishangpin
      }
      ,{
	path: '/jingpaidingdan',
        name: '竞拍订单',
        component: jingpaidingdan
      }
      ,{
	path: '/paimaizhe',
        name: '拍卖者',
        component: paimaizhe
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/shangpinfenlei',
        name: '商品分类',
        component: shangpinfenlei
      }
      ,{
	path: '/pingjiadingdan',
        name: '评价订单',
        component: pingjiadingdan
      }
      ,{
	path: '/chat',
        name: '拍卖咨询',
        component: chat
      }
      ,{
	path: '/messages',
        name: '在线留言',
        component: messages
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/jingpaishangpin',
        name: '竞拍商品',
        component: jingpaishangpin
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
