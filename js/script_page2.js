(function () {
	const page2Object = {

		ul: document.querySelector(".ul"),

		getDataFromLS() {
			const dataFromLocStor = {};
			if (localStorage.length === 0) {
				this.ul.innerHTML = "<h1>there's no information to show</h1>"
				throw new Error("LocalStorage is empty")
			} else {
				for (let i = 0; i < Object.keys(localStorage).length; i++) {
					dataFromLocStor[Object.keys(localStorage)[i]] = Object.values(localStorage)[i]
				}
				return dataFromLocStor;
			}

		},

		setDataToUI() {
			let ul = document.querySelector(".ul")
			for (let i = 0; i < Object.keys(localStorage).length; i++) {
				let li = document.createElement("li");
				(!Object.values(localStorage)[i]) ?
					li.innerHTML = Object.keys(localStorage)[i] + " - " + "NO INFORMATION"
					: li.innerHTML = Object.keys(localStorage)[i] + " - " + Object.values(localStorage)[i]
				ul.append(li)
			}
		},

		init(obj) {
			this.getDataFromLS();
			this.setDataToUI();
		},
	};

	page2Object.init();

})()