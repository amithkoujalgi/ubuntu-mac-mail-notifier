# ubuntu-mac-mail-notifier
Notify a user with an on-screen pop up when a new mail arrives. 
This works on Ubuntu with 'notify-send' and on Mac with AppleScript's 'display notification'.

### Requirements:
 - Ubuntu/Mac
 - nodejs and npm

### For Ubuntu:
#### Install notify-send package on Ubuntu
```sh
sudo apt-get install -y notify-osd
```

#### Test if notify-send works

If you have Evolution mail client installed:

```sh
notify-send "Notification Title" "This is a sample message" -i evolution -t 3000
```
Else, if you have Thunderbird mail client installed:
```sh
notify-send "Notification Title" "This is a sample message" -i thunderbird -t 3000
```

This should show a pop up on the right top corner of your screen with the above message.

### For Mac:

With OSX Mavericks and later, AppleScript's 'display notification' can be used for notification pop-ups. You can test it with the following command:

```sh
osascript -e 'display notification "Lorem ipsum dolor sit amet" with title "Title"'
```

If osascript doesn't work, install 'terminal notifier'.

With **Homebrew**:

```sh
brew install terminal-notifier
```

Test if it works:

```sh
terminal-notifier -title 'Title' -message 'Lorem ipsum dolor sit amet' -open 'https://github.com/koujalgi-amith/ubuntu-mail-notifier'
```

After running notification tests, it's now time to setup nodejs.

#### Install nodejs
```sh
sudo apt-get install -y nodejs
```

#### Install npm and packages
```sh
sudo apt-get install -y npm
npm install mail-notifier
npm install imap
npm install mailparser
```

### Run the app
```sh
node mail_listener.js
```
