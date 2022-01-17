
(function () {

	// при работе с localStorage, решил попробовать пойти другим путём (не JSON-ить и не парсить данные).
	// возможно, в дальнейшем, при развитие этой задачи оно не будет работать, но в рамках этого ДЗ - вроде работает))

	const homeTaskObj = {

		formId: null,
		formEl: null,
		inputsData: {},

		getFormElement() {
			this.formEl = document.getElementById(this.formId)
		},

		setFormEvent() {
			this.formEl.addEventListener("submit", (e) => this.formHandler(e))
		},

		formHandler(e) {
			e.preventDefault()
			const inputs = e.target.querySelectorAll("input, select, textarea");

			for (let input of inputs) {
				input.type !== "checkbox" ? this.inputsData[input.name] = input.value
					: input.checked ? this.inputsData[input.name] = "on"
						: this.inputsData[input.name] = "off"

			}
			// console.log(this.inputsData);
			this.setDataToLS()

			e.target.reset()
		},

		setDataToLS() {
			for (let i = 0; i < Object.keys(this.inputsData).length; i++) {
				localStorage.setItem(Object.keys(this.inputsData)[i], Object.values(this.inputsData)[i])
			}
		},

		init(id) {
			this.formId = id;
			this.getFormElement();
			this.setFormEvent();

		}


	}

	homeTaskObj.init("form")

})()