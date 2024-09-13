# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# stepsu
track steps on a leaderboard from apple health and google fit

Aug 30- set up the files and did some reading. SPA v Web app. Went with latter.
Aug 31 - Reworked the frontend and css a little bit to develop the table and other html elements. 
Sep 2 - node, express, mysequelize and mysql packages. then download and install mysql server and workbench. Watched a HR management system tutorial app.
Sep 9 (long break) - react issues - fixed. added some components. did the frontend.added create leaderboard
 text about the leaderboard
 - name
 - email
Sep 10 - worked on DB schema for create leaderboard
Phase 1: 

Users: 
id - primary
first name
last name
email
country
is_admin: y/n

User_preferences: Stores user settings, such as measurement units and notification preferences.
user_preference_id - primary key
user id - foreign key
timezone
units

User_notifications: 
Stores messages, alerts, etc.

User Roles:  
User, Admins, Invited but not joined user, Super user (>5 leaderboard) etc. 

Orgs: each user belongs to atleast one org. Orgs can be company, apartment complex, gym etc.
Org_members: to manage the many-to-many relationship (a user can belong to multiple orgs, and orgs can have multiple users).

Leaderboards: name, description, value, start and end date, etc.
Leaderboard Members (all users are members of atleast 1 leaderboard)
Values: (synced data such as steps, points etc)
Devices: Tracks connected devices for users.
Achievements: Tracks milestones or badges users achieve.

Phase 2: 
Payment and SaaS Related: 
Notifications
Subscriptions
Transactions

Logs: 
Sync Logs: Tracks device sync history
Activity Logs: Logs user activities (e.g., logging in, syncing data).
Error Logs: To track and debug any data sync issues or errors users encounter during interactions.

Relationships: Make sure you have foreign keys linking all the related tables (e.g., leaderboards to leaderboard_members, users to devices, etc.). This ensures referential integrity.
Indexes: Consider adding indexes on frequently queried fields (like user_id, leaderboard_id, org_id) to optimize query performance.

  https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3