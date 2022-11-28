# ReciPrint 
ReciPrint is a way to share recipes through QR codes. Add your ingredients, directions, and steps to create a recipe. Click the share button to generate a QR code for sharing your creation.

**Link to project:** https://reciprint.netlify.app/

![reciprint image](https://user-images.githubusercontent.com/97214996/204382940-15bbbd9d-2b7d-477f-bbef-c28a4a630a08.png)

## How It's Made:

**Tech used:** React, HTML, CSS, JavaScript

I started making ReciPrint with the goal of making it 100% front-end. Adding a database with authentication would have made this a lot easier to work with, but instead I used local storage to parse the QR codes into the objects that could be added to the list of recipes. React made the most sense for this project by keeping up with the state for the many different form inputs. The process for creation is broken into two main parts. I first stored all of the form inputs in local storage and upon submission, I created the object that would be appended to the recipes array. That same array is processed through react to show all of your recipes that you have collected. To create the QR codes, I used an API that accepts a link. I created that link by appending the recipe object as a parameter to the /addRecipe/ route. This would add the recipe to the recipes array and update the state accordingly.

## Optimizations

I would like to make the states a bit easier to work with by using Redux to elevate the state as well as having a search function for finding recipes in your collection.

## Lessons Learned:

I definitely got more comfortable with using (maybe abusing) local storage. It is a great way to get into the mindset of functional programming with immutable objects. 

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**DND Map Maker:** https://github.com/Hazelwize/dnd-map-maker

**PlayerToo:** https://github.com/Hazelwize/player-two

**Stitch-N-Loop API:** https://github.com/Hazelwize/stitch-and-loop-api


