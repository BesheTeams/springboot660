const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot75kta/",
            name: "springboot75kta",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot75kta/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园在线拍卖系统"
        } 
    }
}
export default base
