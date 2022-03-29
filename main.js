console.log("You look marvelous!");

//story
// It had been a hard, {adjective} day on the {silly word} trail. The cowboys drove a herd of {plural noun} across the dry plains, kicking up {noun} along the way as they looked for somewhere to bed down.

const mainElement = document.querySelector("main");

mainElement.addEventListener("click", event => {
	if(event.target.id.startsWith("tellStory")){
		const madlib = {
			adjective:"",
			sillyword:"",
			pluralnoun:"",
			noun:""
		}
		//set/save to sessionStorage
		
		//invoke renderStory
	}
})

const getDataFromStorage = (dataKey) => {
	//use JSON.parse()
}

const setDataToStorage = (dataObj) => {
	//use JSON.stringify()
}

const clearStorage = (dataKey) => {
	sessionStorage.removeItem(dataKey);
}

const renderInputs = () => {
	clearStorage('madlib')
	// show inputs fields

	//show 'Tell Story' button
}

const renderStory = () => {
	//get from sessionStorage

	//show the story

	//show startOver button
	//startOver will invoke renderInputs()
}

renderInputs();
