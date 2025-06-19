
var projectName = '校园在线拍卖系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '竞拍商品',
	url: './pages/jingpaishangpin/list.html'
}, 

{
	name: '拍卖资讯',
	url: './pages/news/list.html'
},
{
	name: '在线留言',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/springboot75kta/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


chatFlag = true


var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["新增","查看","修改","删除","审核"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"拍卖者","menuJump":"列表","tableName":"paimaizhe"}],"menu":"拍卖者管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["新增","查看","修改","删除"],"menu":"商品分类","menuJump":"列表","tableName":"shangpinfenlei"}],"menu":"商品分类管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","修改","删除","审核"],"menu":"竞拍商品","menuJump":"列表","tableName":"jingpaishangpin"}],"menu":"竞拍商品管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","修改","删除"],"menu":"竞拍订单","menuJump":"列表","tableName":"jingpaidingdan"}],"menu":"竞拍订单管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改","删除"],"menu":"评价订单","menuJump":"列表","tableName":"pingjiadingdan"}],"menu":"评价订单管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","删除"],"menu":"在线留言","tableName":"messages"}],"menu":"在线留言"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"拍卖资讯","tableName":"news"},{"appFrontIcon":"cuIcon-service","buttons":["新增","查看","修改","删除"],"menu":"拍卖咨询","tableName":"chat"},{"appFrontIcon":"cuIcon-album","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","立即竞拍"],"menu":"竞拍商品列表","menuJump":"列表","tableName":"jingpaishangpin"}],"menu":"竞拍商品模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","支付","我要评价"],"menu":"竞拍订单","menuJump":"列表","tableName":"jingpaidingdan"}],"menu":"竞拍订单管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看"],"menu":"评价订单","menuJump":"列表","tableName":"pingjiadingdan"}],"menu":"评价订单管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","立即竞拍"],"menu":"竞拍商品列表","menuJump":"列表","tableName":"jingpaishangpin"}],"menu":"竞拍商品模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["新增","查看","修改","删除","查看评论"],"menu":"竞拍商品","menuJump":"列表","tableName":"jingpaishangpin"}],"menu":"竞拍商品管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","审核"],"menu":"竞拍订单","menuJump":"列表","tableName":"jingpaidingdan"}],"menu":"竞拍订单管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看"],"menu":"评价订单","menuJump":"列表","tableName":"pingjiadingdan"}],"menu":"评价订单管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"在线留言","tableName":"messages"}],"menu":"在线留言"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","立即竞拍"],"menu":"竞拍商品列表","menuJump":"列表","tableName":"jingpaishangpin"}],"menu":"竞拍商品模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"拍卖者","tableName":"paimaizhe"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
