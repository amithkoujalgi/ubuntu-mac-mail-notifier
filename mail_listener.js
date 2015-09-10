var notifier = require('mail-notifier');
var sys = require('util')
var exec = require('child_process').exec;
var fs = require('fs');
var path = require("path");
var datetime = new Date();
console.log(datetime);
var imap_accounts = [];

var MAILBOX_CONFIGS = JSON.parse(fs.readFileSync(path.join(__dirname,
		'./mailbox_config.json'), 'utf8'));

var notify = function(title, message) {
	var cmd = "notify-send -t 3000 \"" + title + "\" \"" + message
			+ "\" -i evolution";
	exec(cmd, function(error, stdout, stderr) {
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

for ( var account in imap_accounts) {
	notifier(imap_accounts[account]).on(
			'mail',
			function(mail) {
				var mailRecvDate = new Date(Date.parse(mail.receivedDate));
				if (mailRecvDate >= datetime) {
					notify("From: " + mail.from[0].address, "On account: "
							+ imap_accounts[account].username + "---"
							+ mail.text);
				}
			}).start();
}