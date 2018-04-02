## Media.Net Frontend Developer Hiring Challenge

## TerriblyTinyTales- Software Developer Application Challenge
**Please refer https://sagarsrivastava.in/medianet for details & working solution**


##### TECHNOLOGY STACK USED
UI/Frontend - Angular4, HTML, CSS, Bootstrap<br />
Hosting Server - DigitalOcean Cloud<br />
Server Architecture - Angular4 Application bundled inside a NodeJs/Express application running on a NodeJs Server interfaced via Nginx reverse proxy.<br />

##### LIBRARIES/MIDDLEWARES USED
Rx/Js - for socket connection & subscription.<br />
MomentJs - for parsing the "Last Updates" timestamp.<br />

##### COMPONENTS OF CODE
Besides the general angular4 application architecture, the application consists of two services files viz.
websocket.service.ts - for connecting & subscribing to the any websocket in general.
medianetsocket.service.ts - utilizing the "websocket.service.ts" for connecting & subscribing to the media.net websocket in specific.

The media.net socket is connected & subscribed onInit in the "app.component.ts" file, the response is parsed when invoked.

The parsing logic is a simple 20 line code that loops through the websocket response, taking each array of stock one by one and updates its status and value in the "stockList" object. This object is used to render the required table on the html. 

The source data is parsed using standard javascript methods alongwith lodash's functions to generate an array of objecThe "computeStats()" method in the app.component.ts file is a non-essential method used to display the statistics boxes.

_Refer https://sagarsrivastava.in/terriblytinytales for working solution & more details._