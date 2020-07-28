# NoviHelper
A TUI Tool for interacting with server environments and it's bots or automation tools either locally or remotely.
Made for the people who don't want to interact with the server in a CLI.

# Features!
- Basic Server Tasks! Reboot, Update, SSH Into from one easy TUI
- NEW!! Restarts web sites and allows you to update Novi Website.
- Process Handeling, restart bots or automated tasks, get your updates from git easily
- Handles Ruby, Python and JS filetypes for process starting, ending and restarting
- Edit your Bot/Automation code through vim or other editors.
- Easy to use

# Prerequisites
- Bash, SSH, and Dialog is installed.
- Runs on MacOS, WSL2, and Linux.

# Usage
- Run: `chmod 777 Novi_Helper` to ensure it can be executed.
- Run: `./Novi_Helper`
 
 # Changing
- Dialog is fairly straight forward and I tried to keep code very self documenting.
- Important thing to remember is with --menu
    - `  --menu "Select Bot:" 15 40 2 \`
        - The number 15 and 40 are the dimensions of your box
        - 2 is the number of menu items. MAKE SURE THIS IS SET CORRECTLY. IT WILL FAIL OTHERWISE.