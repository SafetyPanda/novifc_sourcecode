# Novi_Server
Essential scripts for Novi Server.
- bootstrapNovi.sh to build entire server/site/bot
- rebuildSite.sh to rebuild website.

# Prerequisites
- Server has been made
- Domain is being resolved by the server host
- Repo has been cloned into host

# Instructions
- CD into git repo and the novi_server folder
- Run: `chmod 777 <SCRIPT NAME>` to ensure you can execute the script
- Run: `./<SCRIPT NAME>` as Root or use Sudo
- Hang around computer, you will have some prompts from Certbot to answer if running bootstrapNovi.sh

# Changing
- Scripts are very straightforward.
- Comment out any packages you don't want or sections of bootstrapNovi.sh you don't want to deal with.