const tileRows = document.querySelectorAll(".showcase .tile-row");

let tilesWidth = tileRows[0].scrollWidth;
let screenWidth = window.innerWidth;
let tileOverflow = tilesWidth - screenWidth;
console.log(tilesWidth, screenWidth, tileOverflow);

tileRows.forEach((tile, i) => {
	console.log(tile);
	gsap.from(tile, {
		x: tileOverflow * (i % 2 == 0 ? -1 : 1),
		ease: "linear",
		scrollTrigger: {
			trigger: tile,
			scrub: 1,
		},
	});
});

// const numOfTiles = 34;

// let array = [];
// for (let i = 1; i <= numOfTiles; i++) {
// 	array.push(i);
// }
// let copy = "";
// for (let j = 1; j < 14; j++) {
// 	//nb random entre 1 et len de array
// 	let select = Math.floor(Math.random() * array.length) + 1;
// 	// le nb à cet index
// 	let selected = array[select - 1];

// 	copy += `<img src="./images/tile/tile-${selected}.svg" alt="" />\n`;

// 	array.splice(select - 1, 1);
// }
