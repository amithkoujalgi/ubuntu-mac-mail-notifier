# ubuntu-mail-notifier
Notify a user with 'notify-send' on-screnn pop up when a new mail arrives. This works with Ubuntu with 'notify-send' installed.


### Requirements:
 - Ubuntu
 - nodejs and npm
 - notify-send package

### Install notify-send package on Ubuntu
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

### Install nodejs
```sh
sudo apt-get install -y nodejs
```

### Install npm
```sh
sudo apt-get install -y npm
```

### Install mail-notifier
```sh
npm install mail-notifier
```

### Run the app
```sh
node mail_listener.js
```
