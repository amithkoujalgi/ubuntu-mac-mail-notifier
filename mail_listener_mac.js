var fs = require('fs');
var path = require("path");

var node_modules = path.join(__dirname, '/node_modules/');

var notifier = require(node_modules + 'mail-notifier');

var sys = require('util')
var exec = require('child_process').exec;

var datetime = new Date();
console.log(datetime);
var imap_accounts = [];

var MAILBOX_CONFIGS = JSON.parse(fs.readFileSync(path.join(__dirname,
		'./mailbox_config.json'), 'utf8'));

var notify = function(title, message) {
	// if on OSX Mavericks or later, osascript display notification is
	// supported.
	var cmd1 = "osascript -e 'display notification \"" + message
			+ "\" with title \"" + title + "\"'";
	exec(cmd1, function(error, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
	});

	// if osascript display notification isn't supported, use terminal-notifier
	// instead (install with Homebrew)
	var cmd2 = "terminal-notifier -title '" + title + "' -message '" + message
			+ "' -activate 'com.apple.Mail'";
	exec(cmd2, function(error, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
	});
};

for ( var cfg in MAILBOX_CONFIGS) {
	var account = {
		user : MAILBOX_CONFIGS[cfg].username,
		password : MAILBOX_CONFIGS[cfg].password,
		host : MAILBOX_CONFIGS[cfg].host,
		port : MAILBOX_CONFIGS[cfg].port,
		tls : MAILBOX_CONFIGS[cfg].tls,
		tlsOptions : {
			rejectUnauthorized : false
		},
		markSeen : false,
		box : "INBOX"
	};
	imap_accounts.push(account);
}

// start the listeners for each account
for ( var account in imap_accounts) {
	notifier(imap_accounts[account]).on(
			'mail',
			function(mail) {
				var mailRecvDate = new Date(Date.parse(mail.receivedDate));
				if (mailRecvDate >= datetime) {
					notify("From: " + mail.from[0].address, "On account: "
							+ imap_accounts[account].user + "---" + mail.text);
				}
			}).start();
}
