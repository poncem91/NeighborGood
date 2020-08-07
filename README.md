# NeighborGood  :house_with_garden:

A platform that connects neighbors who are seeking assistance with a task with neighbors who are willing to offer a helping hand in exchange for points.

Capstone project for STEP pod 46 in 2020.

This is not an official Google product.

Design Doc: [go/neighborgood-design](https://docs.google.com/document/d/1d377vftcCXPGBLl04u9gLVmWyTv2fXVYZQLGLP2Jzf0/edit)

Deployed Site: http://neighborgood-step.appspot.com/

## Contributors
* [Mariafe (Mafe) Ponce](https://github.com/poncem91)
* [Leonard Zhang](https://github.com/LeonardZ0731)
* [Denzil Bilson](https://github.com/denzilbilson)

## Static Demo

<img src="/demo-images/1.gif?raw=true" width="700">
Open tasks displayed in list-view. Scrolling to bottom of page will load more tasks until there are no more tasks.

---
<img src="/demo-images/2.png?raw=true" width="700">
Open tasks displayed in map-view.

---
<img src="/demo-images/3.gif?raw=true" width="700">
Tasks being filtered by category.

---
<img src="/demo-images/4.gif?raw=true" width="700">
User offering help with a task.

---
<img src="/demo-images/5.gif?raw=true" width="700">
Searching tasks by a different neighborhood.

---
<img src="/demo-images/6.png?raw=true" width="700">
Top Scorers Board

---
<img src="/demo-images/7.gif?raw=true" width="700">
<br/>Creating a user profile.

---
<img src="/demo-images/8.png?raw=true" width="700">
User profile page - Need help view

---
<img src="/demo-images/9.png?raw=true" width="700">
User profile page - Offer help view

---
<img src="/demo-images/10.png?raw=true" width="700">
Create a new task.

---
<img src="/demo-images/11.png?raw=true" width="700">
Edit an existing task.

---
<img src="/demo-images/12.gif?raw=true" width="700">
Messaging between task owner and helper.

---
<img src="/demo-images/13.gif?raw=true" width="700">
Task message notification.

---
<img src="/demo-images/14.gif?raw=true" width="700">
Admin dashboard view. Editing user's tasks as an admin.

---
<img src="/demo-images/15.gif?raw=true" width="700">
Admin view of user statistics.

---
<img src="/demo-images/16.gif?raw=true" width="700">
Admin map view of user tasks.

---
<img src="/demo-images/17.jpg?raw=true" width="400">
Admin meta-tasks designed for site upkeep.


## Configuration

A config file `/src/main/webapp/config.js` including a Google Maps API key should be included. This file should follow the below template:

```
var config = {
    MAPS_KEY: 'your-google-maps-api-key'
};
```

## Testing

All servlet unit tests can be run using the command `mvn test`

In order to run the IntegrationTest you must have Google Chrome installed and it must be accessible from where you are running the IntegrationTest.
To run the IntegrationTest first run `mvn clean`, then start the devServer with the command `mvn package appengine:start` and once the devServer is running use the command `mvn -Dtest=IntegrationTest test`.
Once you are done testing, stop the devServer with command `mvn package appengine:stop`. In order to avoid test timeouts, you may have to close out of several other applications including closing as many browser tabs as possible and/or restart your computer.

Note: the webdriver used in the IntegrationTest can be flaky and occassionally hang on a page. If a page is stuck for longer than 10 seconds and appears as if still loading, pressing CTRL+R / CMD+R will typically jolt the webdriver back up and keep the tests running.

## Running Development Server

Use `mvn package appengine:run` to run the devServer or if you wish to skip tests add `-DskipTests=true` at the end.
