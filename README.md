# Introduction

39 days. 626 contestants. ONE Survivor!

This is an app for fans of the hit TV show, Survivor. Honestly, there's not much functionality, just two things you can do:
1. Add in survivor "castaways" (contestants)
2. Look at a list of all of the castaways you've added

The app uses React Router to help users navigate between three pages: Home, See All Castaways, Add New Castaway

# Home

This page doesn't have any user interaction. It welcomes users to the site.

# See All Castaways

This page doesn't have any user interaction. It lists all castaways in the database.

# Add New Castaway

This page allows users to add castaways to the database. They enter a name of a Survivor castaway, then help complete an image URL. 

I found a database of all Survivor castaways including their pictures at TrueDorkTimes (gotta love that URL), so the app helps the user navigate through their existing pool of pictures. A few features help:
- the app automatically prepends the proper URL prefix, "https://www.truedorktimes.com/survivor/cast/images/'
- the app automatically appends the profer URL suffix, ".jpg"
- the app displays a preview of the image, so the user can tell when they've entered a correct name
- the app displays the full image url that will display in the list

Users cannot add custom URLs given the prefix/suffix -- this makes sure that only real Survivor players are added to the app.

The data from TrueDorkTimes has a normal structure ("firstname-lastname.jpg"), so I also built a function that gives the user a way to add that format to the URL input with one click, based on the inputted name.

