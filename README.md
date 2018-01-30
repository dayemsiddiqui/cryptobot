# WoxcutBot
The main core repository for Woxcut Trading Bot Application


Finally done with the refactoring thing
here are the changes

1. woxcut_web changed to frontend
2. added express server as backend
3. enabled eslint for frntend
	a. this lints using the standard for eslint rules
		read more of standard rules here https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json
4. changed dir structure so that all the unused shit is in a bak folder.
	a. This includes all the vue theme things, whatever we did pehle (this stuff is also in the new dir structure)
	b. whenever you need to use something from the theme just copy paste the component in the apporpriate folder
5. if you ever want to switch to the old structure then just comment the routes_u import file in main.js and uncomment the routes import file
6. similarly, if you want to switch to the old sidebar(the theme one), uncomment sidebarlinks import and comment the current sidebarlinks import
7. Assets and everything else is still the same
8. routes(links) are now following this pattern
		http://localhost/<entity in plural>/

		for each entity that has sub views, we:
			a. use children attribute in routes
			b. create a folder in components/dashboard/<entity in plural> (in dashboard cuz this is part of the dashboard. We'll create a separate folder for user management stuff)
				eg: for bots I'll do "mkdir src/components/Dashboard/Bots"
					for further files I'll create them as such:
						src/components/Dashboard/Bots/Bot.vue
						src/components/Dashboard/Bots/BotDetail.vue
9. moved the layout files in General Views in the Layout folder
10. for anything that you need from element-ui and know that this will be used in multiple files(Tables for example)
	import them in the globalComponents.js file
	for everything else that you need but will be used in that single file, import it in that same file