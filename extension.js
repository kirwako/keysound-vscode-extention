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
	console.log('Congratulations, your extension "ara-bra3" is now active!');

	// const loadedAudio = load(musicpath);

	async function choiceSound() {
		// let inputBoxOptions = {
		// 	ignoreFocusOut: true,
		// 	title: "your title here",
		// };

		// inputBoxOptions.prompt = `Enter an alias for the command:  . . . . . `;
		// inputBoxOptions.placeHolder = `Enter an alias(es) for the here`;

		// const input = await vscode.window.showInputBox(inputBoxOptions);
		// vscode.window.showInformationMessage(input);
		let items = [
			{
				label: "Test1 Label",
				value: 0
				// description: "Test1 Description",
				// detail: "$(files) Test1 Detail with icon",
			},
			{
				label: "Test2 Label",
				value: 1
				// description: "Test2 Description",
				// detail: "$(files) Test2 Detail with icon",
			},
		];
		const select = vscode.window.showQuickPick(items);
		select.then(selected => {
			console.log(selected);
		})
	}

	async function getAudio() {
		// loadedAudio.then(play);
		const musicpath = `${context.extensionPath}/audios/${audiosForPress[soundIndex]}`;
		player.play(musicpath, function (err) {
			if (err) throw err;
			console.log("Audio finished");
		});
	}

	const vscodePopup = (soundName) => {
		vscode.window.showInformationMessage(`sound changed to [${soundName}]`);
	};

	let disposable = vscode.commands.registerCommand("type", (args) => {
		// console.log(context.extensionUri);
		console.log(context.extensionPath);

		getAudio();

		vscode.commands.executeCommand("default:type", {
			text: args.text,
		});
	});

	const sayHello = vscode.commands.registerCommand(
		"ara-bra3.helloWorld",
		() => {
			vscode.window.showInformationMessage("Mrhba bik f ara bra3");
		}
	);

	const s0 = vscode.commands.registerCommand("ara-bra3.s0", () => {
		vscodePopup("alpaca");
		soundIndex = 0;
	});

	const s1 = vscode.commands.registerCommand("ara-bra3.s1", () => {
		vscodePopup("blackink");
		soundIndex = 1;
	});

	const s2 = vscode.commands.registerCommand("ara-bra3.s2", () => {
		vscodePopup("blackink");
		soundIndex = 2;
	});

	const s3 = vscode.commands.registerCommand("arabra3.s3", () => {
		vscodePopup();
		soundIndex = 3;
	});
	const s4 = vscode.commands.registerCommand("arabra3.s4", () => {
		vscodePopup();
		soundIndex = 4;
	});
	const s5 = vscode.commands.registerCommand("arabra3.s5", () => {
		vscodePopup();
		soundIndex = 5;
	});
	const s6 = vscode.commands.registerCommand("arabra3.s6", () => {
		vscodePopup();
		soundIndex = 6;
	});
	const s7 = vscode.commands.registerCommand("arabra3.s7", () => {
		vscodePopup();
		soundIndex = 7;
	});

	const s8 = vscode.commands.registerCommand("arabra3.s8", () => {
		choiceSound();
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(sayHello);
	context.subscriptions.push(s0);
	context.subscriptions.push(s1);
	context.subscriptions.push(s2);
	context.subscriptions.push(s3);
	context.subscriptions.push(s4);
	context.subscriptions.push(s5);
	context.subscriptions.push(s6);
	context.subscriptions.push(s7);
	context.subscriptions.push(s8);
}

// function deactivate() {}

module.exports = {
	activate,
	// deactivate,
};
