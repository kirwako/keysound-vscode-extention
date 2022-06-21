const vscode = require("vscode");
// const play = require('audio-play');
// const load = require('audio-loader');
const player = require("play-sound")();

const audiosForPress = [
	"alpaca.mp3",
	"blackink.mp3",
	"bluealps.mp3",
	"boxnavy.mp3",
	"buckling.mp3",
	"cream.mp3",
	"holypanda.mp3",
	"mxblack.mp3",
];

let soundIndex = 0;

function activate(context) {
	async function getAudio() {
		// loadedAudio.then(play);
		const musicpath = `${context.extensionPath}/audios/${audiosForPress[soundIndex]}`;
		player.play(musicpath, function (err) {
			if (err) throw err;
			console.log("Audio finished");
		});
	}

	let disposable = vscode.commands.registerCommand("type", (args) => {
		// console.log(context.extensionUri);
		console.log(context.extensionPath);

		getAudio();

		vscode.commands.executeCommand("default:type", {
			text: args.text,
		});
	});


	
	async function choiceSoundHandler() {
		let items = [
			// {
			// 	label: "Test1 Label",
			// 	value: 0
			// 	// description: "Test1 Description",
			// 	// detail: "$(files) Test1 Detail with icon",
			// },
			{ label: "Alpaca Sound", value: 0 },
			{ label: "Blackink Sound", value: 1 },
			{ label: "Bluealps Sound", value: 2 },
			{ label: "Boxnavy Sound", value: 3 },
			{ label: "Buckling Sound", value: 4 },
			{ label: "Cream Sound", value: 5 },
			{ label: "Holypanda Sound", value: 6 },
			{ label: "Mxblack Sound", value: 7 }
		];
		const select = vscode.window.showQuickPick(items);
		select.then(selected => {
			soundIndex = selected.value;
			// console.log(selected);
		})
	}

	const choiseSound = vscode.commands.registerCommand("arabra3.choose", () => { choiceSoundHandler(); });

	context.subscriptions.push(disposable);
	context.subscriptions.push(choiseSound);
}

// function deactivate() {}

module.exports = {
	activate,
	// deactivate,
};
