var apiURL = 'http://115.236.32.178/wxhy/GhDetail.php?id='
new Vue ({
	el:'#app',
	data: {
			id: '',
			name:'',
			logourl: '',
			ewmurl: '',
			descrb: '',
	},
	created: function() {
		this.fetchData()
	},
	methods: {
		fetchData: function() {
			var xhr = new XMLHttpRequest()
			var self = this
			xhr.open('GET', apiURL + getUrlParam('id'))
			xhr.onload = function() {
				self.name = JSON.parse(xhr.responseText)[0]['name']
				self.logourl = JSON.parse(xhr.responseText)[0]['logourl']
				self.ewmurl = JSON.parse(xhr.responseText)[0]['ewmurl']
				self.descrb = JSON.parse(xhr.responseText)[0]['descrb']
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
