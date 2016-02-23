var apiURL= 'http://syuchun.com/blog/list.php?page=1'
new Vue({
	el: '#app',
	data:{
		lists:''
	},
	created: function() {
		this.fetchData()
	},
	methods: {
		fetchData: function() {
			var xhr = new XMLHttpRequest()
			var self = this
			xhr.open('GET', apiURL)
			xhr.onload = function() {
				self.lists = JSON.parse(xhr.responseText)
			}
			xhr.send()
		}
	},
	
})