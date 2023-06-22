const theme = 'theme';
/*what we're doing with this variable is take it and use it to store our theme in a local browser.
when a user opens up the page again, it will remember whether it is using the light or dark theme.*/
const dataTheme = 'data-theme';
const themeTab = '.theme-tab'; 
/*when we're selecting an element by the class, id, or attribute.
we need to use the proper css symbol. Eg. '.' for classes.*/
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const dataFilter = '[data-filter]';
const portfolioData = '[data-item]';

const root = document.documentElement;
/*document.documentElement() targets the html element of our document page. */

/*Theme*/
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);
//localStorage.getItem()- lets us access our local storage and store the string.

/*Portfolio*/
const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox= document.querySelector('#search');

/*Modal*/
const openModal = document.querySelectorAll(modalOpen);
//document.querySelectorAll() grabs the actual Html element
//It's going to look through the entire document and find any 
//of the data attributes that have the same string/name as the variable
//It store any data it finds in a nodeList. (Something that is iterable)
const closeModal = document.querySelectorAll(modalClose);

const setActive = (elm, selector) => {
    if (document.querySelector(`${selector}.${active}`) !== null) {
        document.querySelector(`${selector}.${active}`).classList.remove(active);
    }
    elm.classList.add(active);
}
/*With setActive We're going through and grabbing all of the selectors (switcher buttons)
If it's not equal to null. It's going to make sure that the class is removed.
The setActive should always be setting to active, so no else statement is */

const setTheme = (val) => {
    if (val === dark) {
        root.setAttribute(dataTheme, dark);
        /*setAttribute() consists of 2 arguments
        The first takes the attribute that we're setting (dataTheme),
        and the second takes it to the value that we're setting it to (dark) */
        localStorage.setItem(theme, dark);
        /*This will store the dark setting to the local storage for the user.*/
    } else {
        root.setAttribute(dataTheme, light);
        localStorage.setItem(theme, light);
    }
};

if (currentTheme) {
    root.setAttribute(dataTheme, currentTheme);
    switcher.forEach((btn) => {
        btn.classList.remove(active);
    });
    if (currentTheme === dark) {
        switcher[1].classList.add(active);
    } else {
        switcher[0].classList.add(active);
    }
}
/*On page load, we are checking for the current theme if there is on local storage
If there is we're going to set the currentTheme, 
We remove the active class on both buttons
Code checks through the current theme and set the active theme on the appropriate setting.*/


toggleTheme.addEventListener('click', function() {
    const tab = this.parentElement.parentElement;
    if (!tab.className.includes(open)) {
        tab.classList.add(open);
    } else {
        tab.classList.remove(open);
    }
    /*This is saying if the element doesn't have the class with string 'open'.
    The class will be added. If it is there already, it will remove it. */
});

for (const elm of switcher) {
    elm.addEventListener('click', function () {
        const toggle = this.dataset.toggle;
        //set active state
        setActive(elm, switcherBtn);
        setTheme(toggle);
    })
}

searchBox.addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase().trim();
    /*Store the value of what is type in the input field
    .trim() removes any blank spaces within a string.*/
    portfolioItems.forEach((card) => {
        if (card.dataset.item.includes(searchInput)){
            card.style.display = 'block';
        
        } else {
            card.style.display = 'none';
        }
    })
});

for (const link of filterLink) {
    link.addEventListener('click', function() {
        setActive(link, '.filter-link');
        const filter = this.dataset.filter;
        portfolioItems.forEach((card) => {
            if (filter === 'all') {
                card.style.display = 'block';
                /*We have these individual elements
                We call the style, and access CSS properties
                .card is the element
                .style is calling on the CSS styles
                .display: is the CSS feature we are calling
                If this condition is met it will give a display block setting on the card.*/ 
            } else if (card.dataset.item === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            } /*If this condition is met it will give a display block setting on the card.
            Else it will make the card hidden with display: none*/ 
        })
    })
}

//Full Site Modal "open buttons"
for (const elm of openModal) {
    elm.addEventListener('click', function() {
        const modalId = this.dataset.open;
        //this refers to the parent object which is elm (the Nodelist)
        //dataset refers to data, while the word after the dot is the same word as the one after the dash in the html
        //Ex. dataset.open => data-open
        document.getElementById(modalId).classList.add(isVisible);
        /*.getElementById grabs every single ID that matches the data that we just plucked from the data attribute
        Remember that every ID on an element is unique.
        .classlist grabs the class of the plucked element
        .add will add the class that is defined Ex. '.is-visible'
        We can also store it in a variable*/
    }) 
}

for (const elm of closeModal) {
    elm.addEventListener('click', function() {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
        /*.parentElement starts at the called element and takes us up a level in the html (the parent)
        example <container><div><header></header></div></container>
        this will refer to the div. if parentElement is used once
        this will refer to the container if parentElement is used twice

        .remove will remove the specified class form the classList from the plucked element
        */
    })
}

//Modal
document.addEventListener('click', (e) => {
    //console.log(e.target, document.querySelector('.modal.is-visible'));
    /*e.target picks on whatever element you click on the screen when you're inspecting the browser
    When we first click on the card to open it the target will either be the card div, a, or img
    document.querySelector finds the class with the .modal.is-visisble class attached, which should be our portfolio modal
    when we click on it the second time, we get the same element since the element has filled the screen
    In this case both elements logged will be a match.*/


    if (e.target === document.querySelector('.modal.is-visible')){
        document.querySelector('.modal.is-visible').classList.remove(isVisible);
        /*This statement is saying that if the element we click on (e.target) matches the class in the querySelector
        This statement will be fulfilled and remove the is-visible class in the element.
        Remember, we have a declared variable for this (isVisible) so we don't have to write the class name.
        The purpose is that when the user clicks outside in the gray area again, it will close the pop-up modal*/
    }
})  

document.addEventListener('keyup', (e) => {
    //console.log(e.key);
    //This will log down whatever key that we press on the keyboard.
    if (e.key === 'Escape'){
        document.querySelector('.modal.is-visible').classList.remove(isVisible);
        /*This statement is saying that if the key that we press matches the button that is declared in the string
        in this case, it is the escape key. Then it will remove the class from the element.
        So if the pop-up was open, hitting escape will now close it.*/
   }
})  

//Get Elements Displayed
//nodelist.legnth
//assign --marquee-elms nodelist.length

const elmsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elms-displayed');
/*get ComputedStyle() helps access the root CSS declaration style object
and we're getting the value of whatever var is in the string. Using getPropertyValue()*/
const marqueeContent = document.querySelector('ul.marquee-content');
//Here we grabbed the entire element, but we still need to get the number of items that are in it.
//But since each icon has a different class, we are grabbing the entire unordered list.
//The ul element with the .marquee-content class
root.style.setProperty('--marquee-elms', marqueeContent.children.length);
//setProperty() takes 2 arguments
//The first argument determines the property to be declared
//The second argument is the value we want to assign to the property.
//marqueeContent.children.length goes through all the child elements that are in the ul element with the marquee-content class
//And will return the length.

for (i=0; i < elmsDisplayed; i+=1) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
/*cloneNode() makes a clone of the ul, the children that are inside of this.*/