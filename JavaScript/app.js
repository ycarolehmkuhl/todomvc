;(function () {
	const todos = [
		
	]
	const app = new Vue({
		el: '#app',
		data: {
			todos:todos,
			inputText: '',
			currentEdit: null,
			byebye: ''
		},
		methods: {
			addTodos (e){
				const {inputText,todos} = this
				if (inputText.trim().length === 0) {
					return
				}
				const lastItem = todos[todos.length-1]
				const id = lastItem ? lastItem.id + 1 : 1
				this.todos.push({
					id : id,
					title: inputText,
					done: false
				})
				this.inputText = ''
				
			},

			removeItem (index){
				this.todos.splice(index,1)
			},

			getEditing (item){
				this.currentEdit = item
				this.byebye = item.title
			},

			saveEdit (item,index){
				if(item.title.trim().length===0){
					this.todos.splice(index,1)
				}else{
					this.currentEdit = ''
				}
			},

			cancelEdit (){
				this.currentEdit.title = this.byebye
				this.currentEdit = null
			}
		}
	})

})();
