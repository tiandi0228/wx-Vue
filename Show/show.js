var apiURL = 'http://syuchun.com/blog/show.php?cid='
new Vue ({
	el:'#app',
	data: {
			cid: '',
			title:'',
			email: '',
			text: '',
	},
	created: function() {
		this.fetchData()
	},
	methods: {
		fetchData: function() {
			var xhr = new XMLHttpRequest()
			var self = this
			xhr.open('GET', apiURL + getUrlParam('cid'))
			xhr.onload = function() {
				self.title = JSON.parse(xhr.responseText).title
				self.email = JSON.parse(xhr.responseText).email
				self.text = JSON.parse(xhr.responseText).text
			}
			xhr.send()
		},
		doBack: function () {
            history.back()
        }
	}
})

// 获取url参数
function getUrlParam(name){  
    //构造一个含有目标参数的正则表达式对象  
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");  
    //匹配目标参数  
    var r = window.location.search.substr(1).match(reg);  
    //返回参数值  
    if (r!=null) return decodeURI(r[2]);
    return null;  
}