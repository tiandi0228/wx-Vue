var apiURL = 'http://syuchun.com/blog/show.php?cid='
export default {
	data() {
		return {
			cid: '',
			title: '',
			text: '',
		}
	},
	created: function() {
		this.fetchData()
	},
	methods: {
		fetchData: function() {
			var xhr = new XMLHttpRequest()
			var self = this
			xhr.open('GET', apiURL + this.$route.params.cid)
			xhr.onload = function() {
				self.title = JSON.parse(xhr.responseText).title
				self.text = JSON.parse(xhr.responseText).text
			}
			xhr.send()
		}
	}
}