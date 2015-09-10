# ubuntu-mac-mail-notifier
Notify a user with an on-screen pop up when a new mail arrives. 

This works on Ubuntu with 'notify-send' and on Mac with AppleScript's 'display notification' or 'terminal-notifier'.

### Requirements:
 - Ubuntu/Mac
 - nodejs and npm

### For Ubuntu:
#### Install notify-send package on Ubuntu

Install **libnotify-bin**:

```sh
sudo apt-get install libnotify-bin
```

or **notify-osd**:


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

This should show a pop up on the right top corner of your screen with the above message. Something like this:

![Alt text](http://lh6.ggpht.com/_1QSDkzYY2vc/S-w3ptqX4YI/AAAAAAAABBI/bQaz5tiBAdo/Desk%201_008.png "Ubuntu Notification")

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

You should see something similar to this:
![Alt text](http://cdn.osxdaily.com/wp-content/uploads/2014/01/notifications-banner-os-x.jpg "Mac Notification")

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

On Ubuntu:

```sh
node mail_listener_ubuntu.js
```

On Mac:

```sh
node mail_listener_mac.js
```

Now the app keeps listening for new email on the configured IMAP accounts.
When a email arrives, you should now be getting a notification pop-up on the top right corner of your screen.

Peace!
