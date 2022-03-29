console.log("You look marvelous!");

const mainElement = document.querySelector("main");

mainElement.addEventListener("click", event => {
	if(event.target.id.startsWith("tellStory")){
		const madlib = {
			adjective: document.querySelector("input[name='adjective']").value,
			sillyword: document.querySelector("input[name='sillyword']").value,
			pluralnoun: document.querySelector("input[name='pluralNoun']").value,
			noun: document.querySelector("input[name='noun']").value
		}
		//set/save to sessionStorage
		setDataToStorage(madlib)
		//invoke renderStory
		renderStory()
	}
})

// object to come back

const getDataFromStorage = (dataKey) => {
	return JSON.parse(sessionStorage.getItem(dataKey))
	//use JSON.parse()
}

// string to go to storage

const setDataToStorage = (dataObj) => {
	sessionStorage.setItem("madlib", JSON.stringify(dataObj)) // 'dataObj': '{}'
	//use JSON.stringify()
}

const clearStorage = (dataKey) => {
	sessionStorage.removeItem(dataKey);
}


const renderInputs = () => {
    clearStorage('madlib')
    let mainEl = document.querySelector("main")
    mainEl.innerHTML = `
        <label for="adjective">Adjective:</label>
        <input name="adjective" id="adjective-input"><br>
        <label for="sillyword">sillyWord:</label>
        <input name="sillyword" id="sillyWord-input"><br>
        <label for="pluralNoun">Plural Noun:</label>
        <input name="pluralNoun" id="pluralNoun-input"><br>
        <label for="noun">Noun:</label>
        <input name="noun" id="noun-input"><br>
        <button type="submit" id="tellStory">Tell Story</button>
    `
}


const renderStory = () => {
	//get from sessionStorage
	const lib =	getDataFromStorage('madlib')
	mainElement.innerHTML = `It had been a hard, ${lib.adjective} day on the ${lib.sillyword} trail. The cowboys drove a herd of ${lib.pluralnoun} across the dry plains, kicking up ${lib.noun} along the way as they looked for somewhere to bed down.`
	//show startOver button
	mainElement.innerHTML += `<br>
	<button type="submit" id="start-over">Start the F Over</button>`
	//startOver will invoke renderInputs()
}

renderInputs();

mainElement.addEventListener("click", event => {
	if (event.target.id === "start-over") {
		renderInputs()
	}
})
