const vscode = require("vscode");
const player = require("play-sound")();

const audiosForPress = [
	"alpaca",
	"blackink",
	"bluealps",
	"boxnavy",
	"buckling",
	"cream",
	"holypanda",
	"mxblack",
	"mxblue",
	"mxbrown",
	"redink",
	"topre",
	"turquoise",
];

let soundIndex = 0;

function activate(context) {
	let disposable = vscode.commands.registerCommand("type", (args) => {
		let musicpath = `${context.extensionPath}/audios/${audiosForPress[soundIndex]}`;

		const default_sound = "GENERIC_R0.mp3";
		const space_sound = "SPACE.mp3";
		const enter_sound = "ENTER.mp3";

		if (args.text == " ")
			musicpath += `/${space_sound}`;
		else if (args.text == "\n")
			musicpath += `/${enter_sound}`;
		// else if (args.text == "\r")
		// 	musicpath += `/${enter_sound}`;
		else
			musicpath += `/${default_sound}`;

		console.log(musicpath)

		player.play(musicpath, function (err) {
			if (err) throw err;
			console.log("Audio finished");
		});

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
			{ label: "Mxblack Sound", value: 7 },
			{ label: "Mxblue Sound", value: 8 },
			{ label: "Mxbrown Sound", value: 9 },
			{ label: "Redink Sound", value: 10 },
			{ label: "Topre Sound", value: 11 },
			{ label: "Turquoise Sound", value: 12 }
		];
		const select = vscode.window.showQuickPick(items);
		select.then((selected) => {
			soundIndex = selected.value;
			// console.log(selected);
		});
	}

	const choiseSound = vscode.commands.registerCommand(
		"arabra3.choose",
		() => {
			choiceSoundHandler();
		}
	);

	context.subscriptions.push(disposable);
	context.subscriptions.push(choiseSound);
}

// function deactivate() {}

module.exports = {
	activate,
	// deactivate,
};
