function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
		
		chrome.tabs.executeScript(tabs[0].id, {file: "jquery-3.2.1.js"});
		chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"});
	});
}

document.getElementById('checkPage').addEventListener('click', injectTheScript);