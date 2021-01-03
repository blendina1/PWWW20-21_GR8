function ThemeZeze() {
	var link = document.createElement('link');
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = "css/zeze.css";
	document.querySelector("head").appendChild(link);
}

function ThemeNormale() {
	var link = document.createElement('link');
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = "css/normale.css";
	document.querySelector("head").appendChild(link);
}

function NdryshoBackground() {
	var kohaTani = new Date().getHours();
	if(20 <= kohaTani && kohaTani < 24) {
		document.write("<style>html {background-color:#121212;}\n\ ");
		document.write(".columnist h1{background-color: #121212;}</style> ");
	}
	if(0 <= kohaTani && kohaTani < 8) {
		document.write("<style>html {background-color:#121212;}\n\ ");
		document.write(".columnist h1{background-color: #121212;}</style> ");
	}
}
NdryshoBackground();
