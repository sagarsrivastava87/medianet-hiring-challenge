## Media.Net Frontend Developer Hiring Challenge
Please refer **https://sagarsrivastava.in/medianet** for details & working solution<br />
Github-Pages: **https://sagarsrivastava87.github.io/medianet-hiring-challenge/**<br />
_NOTE: The media.net websoctket is not deployed on a secured link and hence the solution hosted on the above https links work only upon allowing the insecure content. Please click the "Load unsafe scripts" from the address bar of the url to do so._

Alternatively you may also access the working demo from **http://infrings.in/dev/medianet/** which is loads directly.

##### ABOUT THE CHALLENGE
Write a “single page application” (SPA) to display live stock data. The page should look something like this. 
P.S: Feel free to showcase your creativity!<br />
_Refer http://careers.media.net/hiring-challenge/frontend-developers/ for complete details about the challenge._

![alt text](/solution-screenshot.png)

##### TECHNOLOGY STACK USED
* UI/Frontend - Angular4, HTML, CSS, Bootstrap<br />
* Hosting Server - DigitalOcean Cloud<br />
* Server Architecture (for sagarsrivastava.in) - Angular4 Application bundled inside a NodeJs/Express application running on a NodeJs Server interfaced via Nginx reverse proxy.<br />

##### LIBRARIES/MIDDLEWARES USED
* Rx/Js - for socket connection & subscription.<br />
* MomentJs - for parsing the "Last Updates" timestamp.<br />

##### COMPONENTS OF CODE
Besides the general angular4 application architecture, the application consists of two services files viz.
* websocket.service.ts - for connecting & subscribing to the any websocket in general.
* medianetsocket.service.ts - utilizing the "websocket.service.ts" for connecting & subscribing to the media.net websocket in specific.

The media.net socket is connected & subscribed onInit in the "app.component.ts" file, the response is parsed when invoked.

The parsing logic is a simple 20 line code that loops through the websocket response, taking each array of stock one by one and updates its status and value in the "stockList" object. This object is used to render the required table on the html. 

The source data is parsed using standard javascript methods alongwith lodash's functions to generate an array of objecThe "computeStats()" method in the app.component.ts file is a non-essential method used to display the statistics boxes.

##### HOW TO RUN
* Clone/Download the git repo<br />
* Load the node_modules by running the "npm install" command<br />
* Execute "ng serve" to start the application on your local machine and navigate to "http://localhost:4200/"<br />

_Please visit https://sagarsrivastava.in/ for to download my resume & view my complete profile.Thank you._