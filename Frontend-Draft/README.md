Front End Tutorial: 


## Getting started

> **Prerequisites:**
> The following steps require [NodeJS](https://nodejs.org/en/) to be installed on your system, so please
> install it beforehand if you haven't already.

To get started with your project, you'll first need to install the dependencies with:

```
npm install
```

Then, you'll be able to run a development version of the project with:

```
npm run dev
```

After a few seconds, your project should be accessible at the address
[http://localhost:1234/](http://localhost:1234/)


If you are satisfied with the result, you can finally build the project for release with:

```
npm run build
```


## Overview of  Frontend Structure:
Each screen is contained within a folder in /screens/, along with its stylings in style.css

## SearchPage:

The search page uses two functions in order to implement its filter search:

> UseEffect: this is called when the page is loaded, and fills the datasets with all of the datasets in the database
> searchFunction: this is called whenever the button "submit filters" is pressed, and applies the filters on the database,
 showing only the datasets that are valid. This function is also called in UseEffect if we did a quicksearch, right after     the dataset is filled up.

> We have the filters: Oldest Date, Keywords (AND selection/Or Selection), Language, # of Rows, and a search bar, which will search the datasets description and name for the exact text written in the search bar.



> clicking on a dataset frame will popup a modal that has the description of that dataset, and a button to the webpage currently holding the dataset.
> Bootstrap was used a lot in the development of the Search Page. If anyone wanted to change or develop the search page, it is advised that they have at least a basic understanding of bootstrap, and react.

