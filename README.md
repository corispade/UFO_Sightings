# UFO Sightings Webpage

# Overview

We created a webpage using HTML to display our UFO sightings article and a dynamic search table. We used JavaScript to build the dynamic search table, creating filters to search and manipulate the table. 

## Process:
### Set-Up for Deliverable 1:
1. We used [HTML](https://github.com/corispade/UFO_Sightings/blob/main/index.html) to build a webpage to display UFO sightings data
2. We used [JavaScript](https://github.com/corispade/UFO_Sightings/blob/main/static/js/app.js) to build a dynamic table with search functions
3. We used [CSS file](https://github.com/corispade/UFO_Sightings/blob/main/static/css/style.css) to add a background image and color

### Deliverable 1: Filter UFO sightings on multiple search criteria
1. Using JavaScript, we added dynamic search functions to filter the table for city, state, country and shape
2. We created functions that will filter the table data by the value entered in the search boxes
3. We used our HTML file to style the filter table and make it more visually appealing

## Resources:
Data Sources: [UFO Sightings Data](https://github.com/corispade/UFO_Sightings/blob/main/static/js/data.js)

Languages: JavaScript, HTML5, CSS

Environment: Visual Studio Code

# Webpage Results:

When the webpage is opened, you first see a title, article and purpose of analysis. 

![image](https://github.com/corispade/UFO_Sightings/blob/main/static/images/top_website.png)

Scrolling down, you will come to the dynamic search table:
* Using the search filters on the left, type in the value you would like to search
* You can search based on city, state, country, and shape
* After entering the desired values, press the "enter" key
* View table changes on the right side of the screen

Table before Search Filters:

![image](https://github.com/corispade/UFO_Sightings/blob/main/static/images/bottom_website.png)

Table after Search Filters:

![image](https://github.com/corispade/UFO_Sightings/blob/main/static/images/bottom_website_filter.png)

To refresh the search table, scroll to the top of the page and click "UFO Sightings" to refresh the page.

![image](https://github.com/corispade/UFO_Sightings/blob/main/static/images/refresh.png)

# Summary:
One major drawback of this website is that the search table only shows static data from the past. I would suggest to create a separate webpage where people can input their own UFO sightings, then we could setup our webpage to pull the new data in order to keep the website up to date and relevant. 

Recommendations I have for further development:

1. Move the refresh button to set it below the search table. It is difficult to find and a bit annoying to scroll to the top of the page just to refresh the table.

2. The US is the only country in the data provided. I would suggest to either find more data from outside the US, or remove the country filter as it is an unnecessary addition. 