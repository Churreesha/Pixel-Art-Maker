// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



// Your code goes here!
// Assigning elements to variables
let playerColor = document.getElementById("colorPicker");
let sizePicker = document.getElementById("sizePicker");


//Creating the Grid
function makeGrid() {
	//Establishing variables
	let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;
	let canvas = document.getElementById("pixelCanvas");
	canvas.innerHTML = '';
	let table = document.createElement("tbody");
	canvas.appendChild(table);
	//Creating rows and cells of grid
	for (let i = 0; i < height; i++) {
		let row = document.createElement("tr");
		table.appendChild(row);
		for (let j = 0; j < width; j++) {
			let cell = document.createElement("td");
			//Adding color to cells
			cell.addEventListener('click' , function(sub) {
				if(sub.target.matches("td")){
				sub.target.style.backgroundColor = playerColor.value;
				}
			});
			row.appendChild(cell);



		}

	}

}

//Creates new grid when 'submit' button is pressed
 sizePicker.addEventListener('submit', function(e) {
	//Keep dimensions input in place
	e.preventDefault();
	makeGrid();
  });