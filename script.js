const app = new Vue({
	el: '#app',

	data () {
		const data = {};

		// const item1 = {
		// 	id: 1,
		// 	content: 'buy bread',
		// 	selected: false,
		// 	done: false
		// };

		// const item2 = {
		// 	id: 2,
		// 	content: 'wash the dog',
		// 	selected: false,
		// 	done: false
		// };

		 data.list = [];
		// data.list.push(item1);
		// data.list.push(item2);

		data.input = '';

		return data;
	},

	methods: {
		inputHandler() {
			const input = this.input.trim();

			if (!input) {
				return;
			}; 
			const item = {
				id: this.list.length + 1,
				content: input,
				selected: false,
				done: false
			};
			this.list.unshift(item);
			this.input = '';
		},
		selectAll() {
			const newState = !this.someSelected;

			for (const item of this.list) {
				item.selected = newState;
			};
		},
		restore(item) {
			item.done = false;
		},
		remove(removedItem) {
			const list = [];

			for (const item of this.list) {
				if (item !== removedItem) {
					list.push(item);
					item.id = list.length;
				};
			};

			this.list = list;
		},

		done(item) {
			item.done = true;
		},
		doneAll() {
			for (const item of this.list) {
				if (item.selected) {
					item.done = true;
				};
			};
		},
		restoreAll() {
			for (const item of this.list) {
				if (item.selected) {
					item.done = false;
				};
			};
		},
		removeAll() {
			const list = [];

			for (const item of this.list) {
				if (!item.selected) {
					list.push(item);
					item.id = list.length;
				};
			};

			this.list = list;
		}
	},

	computed: {
		someSelected() {
			let count = 0;

			for (const item of this.list) {
				if (item.selected) {
					count += 1;

					if (count > 1) {
						return true;
					};
				};
			};
			
			return false;
		}
	}
})