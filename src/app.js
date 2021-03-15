(function () {
	const todos = [];

	const app = new Vue({
		el: "#app",
		data: {
			todos: todos.filter(() => {
				console.log(this.filter);
				return true;
			}),
			filter: "all",
			inputText: "",
			currentEdit: null,
			
		},
		computed: {
			filteredTodos: function () {
				return this.todos.filter((todo) => {
					if (this.filter === "all") {
						return true;
					}

					if (this.filter === "todo") {
						return !todo.done;
					}

					return todo.done;
				});
			},
		},
		//Funções de Ação
		methods: {
			addTodos(e) {
				const { inputText, todos } = this;
				if (inputText.trim().length === 0) {
					return;
				}
				const lastItem = todos[todos.length - 1];
				const id = lastItem ? lastItem.id + 1 : 1;
				this.todos.push({
					id: id,
					title: inputText,
					done: false,
				});
				this.inputText = "";
			},
			// Botão para excluir item (X)
			removeItem(index) {
				this.todos.splice(index, 1);
			},
			// Filtro Apagar tudo
			removeAll(index) {
				this.todos = [];
			},
			// Editar o Campo
			getEditing(item) {
				this.currentEdit = item.title;
			},
			// Fução para salvar a alteração
			saveEdit(item, index) {
				if (this.currentEdit.trim().length > 0) {
					item.title = this.currentEdit						
					this.currentEdit = "";
				}
			},
			cancelEdit(item){
				this.currentEdit = "";
		
			},


			setFilter(filter) {
				this.filter = filter;
			},
		},
	});
})();
