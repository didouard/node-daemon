#An init.d shell script for DEBIAN

   /etc/init.d/node-daemon start
   /etc/init.d/node-daemon stop
   /etc/init.d/node-daemon status
   /etc/init.d/node-daemon restart

# Config file
       /etc/node-daemon/node-daemon.conf

# Variable

List of js daemons

     DAEMONS="..."

Debug level

      VERBOSE=yes/no

User name or uid for witch file are launch

     USER="..."

# Command to register node-daemon start-up

  update-rc.d node-daemon default

