# NovisPlace_Site

NovisPlace_Site is a 1 page modal based website to introduce members to the FC in a clear way. It shows Policy, current members, and gives a discord link.

# Prerequisites
- NodeJS has been installed.
- Web Browser installed.
- Text Editor, IDE, etc. if developing.

# Testing Website
- Open a terminal.
- Run: `chmod 777 startSite.sh` to ensure it can be executed.
- Run: `./startSite.sh`
    - If running locally for testing, script will show an error for nginx, ignore. :)
- Go to the dist/ folder in noviplace_site and open index.html

# Rebuilding Website on Server
- Open a terminal and SSH into server, or however server is set up.
- Get the updated changes from Git, or however you did it.
- Run: `chmod 777 startSite.sh` to ensure it can be executed.
- Run: `rebuildSite.sh` thats inside the novi_server folder
- If something fails, run `./startSite.sh` inside the website location.

# Changing
- For the deeper stuff, like the states, opening modals, etc., have a knowledge of React, HTML, CSS.
- I tried to make it straightforward. Every "section" has a comment header. Text sections are in their own function so it's easy to change.
- I have a template for new member pictures and how/where to put them into role sections.
- Make sure the pictures are in the right spot in dist/ folder.