#An init.d shell script for DEBIAN

      /etc/init.d/node-daemon start
      /etc/init.d/node-daemon stop
      /etc/init.d/node-daemon status
      /etc/init.d/node-daemon restart

Or specify one script

      /etc/init.d/node-daemon start daemon-1.js
      /etc/init.d/node-daemon stop daemon-1.js
      /etc/init.d/node-daemon status daemon-1.js
      /etc/init.d/node-daemon restart daemon-1.js

# Config file
      /etc/node-daemon/node-daemon.conf

# Variable

List of js daemons

      DAEMONS="test1 test2"
      DEAMON_test1="/path/to/file1.js"
      DEAMON_test2="/path/to/file2.js"

Directory for logs
LOG_DIRECTORY="/var/log/node-daemon/"
ERR_DIRECTORY="/var/log/node-daemon/"

Debug level

      VERBOSE=yes/no

User name or uid for witch file are launch

      USER="..."

# Command to register node-daemon start-up

      update-rc.d node-daemon default

