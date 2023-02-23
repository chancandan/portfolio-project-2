# Rock Paper Scissors Lizard Spock
(Developed by Daniel Lyons)

"Rock Paper Scissors Lizard Spock" is fun variation of the old classic "Rock Paper Scissors" game, where randomness and chance determine the winner. The live game can be played [here](https://chancandan.github.io/portfolio-project-2/)

![Mockup](docs/readme_images/responsiveness.JPG)

## Table of Contents

1. [Product Goals](#product-goals)
2. [User experience]()


## Product Goals 

### User Goals
- Play and learn a new variation on an old classic game
- Beat the game / device
- Enjoy themselves

### Developer / Product owner goals
- Protray a different variation of an old classic game
- Capture the user's attention
- Leave the user feeling joy and wanting to play the game again or return at a later time to play again

## User experience (UX)

### Expecations of the user

- Accessibility
- Visually appealing design and game layout
- Simple and working game mechanics
- A joyful and fun experience

### Target Audience

- Kids
- People who enjoy games
- People in search of games with a twist
- People who enjoy simple fun games

## User Stories

### Game / site user

#### First time user

* As a first time user, I want to be able to easily understand how to play the game.
* As a first time user, I would like to be able to see my score and know if I had a higher score that the computer / device.
* As a first time user, I would like the option to start over and reset the score if I felt I got off to a bad start.

#### Returning user goals

* As a returning user, I would like to quickly be able to start a new game.

# Features

## Existing Features

### Title

A simple heading displaying the game name in a font that is in a design often used in gaming realted content called "Electrolize.

![Title](docs/readme_images/game_title.JPG)

### Help / Game rules

A button witht he text "Help" that calls a pop out modal that lists the rules of the game and which weapon trumps another. The modal fading everything outside of the pop out box so as to engage the user with the content in the rules section. There is an "X" for users to click to close this box or they can just click anywhere on the screen outside of the white content box to close it.

![Help](docs/readme_images/help_button.JPG)

Scissors cuts paper.
Paper covers rock.
Rock crushes lizard.
Lizard poisons Spock.
Spock smashes scissors.
Scissors decapitates lizard.
Lizard eats paper.
Paper disproves Spock.
Spock vaporizes rock.
Rock crushes scissors.

![Modal](docs/readme_images/modal_rules.JPG)

### Game outcome feedback

The result of the game in text as feedback to user as to the outcome of the latest game played, e.g. "Rock loses to paper. You lost!"

![Outcome feedback](docs/readme_images/game_outcome_feedback.JPG)

### Game weapons / choices

The selection of weapons including rock, paper, scissors, lizard, spock. Displayed in icon format. Taken from images, resized, backgrounds removed using https://www.fotor.com/photo-editor-app/ and saved as PNG files.

![Weapons](docs/readme_images/weapons.JPG)

### Color highlighted winner or loser

If the user has won a green border will encircle the winning weapon and similary a red border will encirlce a losing weapon. A gray circle will appear for a tie game.

![Winner](docs/readme_images/winner.JPG)

![Loser](docs/readme_images/loser.JPG)

![Tie](docs/readme_images/tie.JPG)

### Scoreboard and reset button

An area where both the user and device scores are recorded and updated after each game. 
A reset button which will start a new match and reset both the user and device scores to zero.

![Scoreboard](docs/readme_images/scoreboard.JPG)

### Future feautres

* A timer to create a game whereby the first player to reach a certain score before the timer runs out wins the game.
* A function to hide the other weapon options the user didn't choose.
* The highlighting of the weapon choosen by the device.

# Technologies used
* [HTML](https://en.wikipedia.org/wiki/HTML5) 
* [CSS](https://en.wikipedia.org/wiki/CSS)
* [Javascript](https://en.wikipedia.org/wiki/JavaScript)
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator)
* [W3C HTML Validator](https://validator.w3.org/#validate_by_input)
* [JS Hint Validator](https://jshint.com/)

### Design
* [Fotor](https://fotor.com/photo-editor-app/)
* [Gitpod](https://gitpod.io)
* [Github](https://github.com/)
* [Balsamiq](https://balsamiq.com/)
* [Google Fonts](https://fonts.google.com/)
* [Favicon](https://favicon.io/favicon-converter/)
* [Tinyjpg](https://tinyjpg.com)

# Testing

### Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in [WCAG 2.1 Reflow criteria for responsive design](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) on Google Chrome, MicrosoftEdge, Mozilla Firefox and Safari.

Steps to test:

1. Open browser and navigate to [Rock Paper Scissors Lizard Spock](https://chancandan.github.io/portfolio-project-2/)
2. Open the developer tools (right click and inspect)
3. Set to responsive and decrease width to 320px
4. Set the zoom to 50%
5. Click and drag the responsive window to maximum width

Expected:

Website is responsive on all screen sizes and no images are pixelated or stretched.
No horizontal scroll is present.
No elements overlap.

Actual:

Website behaved as expected on all browsers.

Website was also opened on the following devices and no responsive issues were present seen:

- HP Laptop 15 -bs1xx
- Lenovo Chromebook
- iPhone SE
- iPhone X
- iPhone 14 Pro Max
- iPad (6th Generation)
- MacBook Air

### Lighthouse

The site was taken through Google Chrome's Lighthouse testing.

![Lighthouse scores for Index Page](docs/readme_images/lighthouse_index.JPG)

## Event Listener Testing

* When each weapon choice button is clicked it triggers an event. All these different premutations of possible out comes were tested and all worked perfectly in testing.


## Deployment

### Deployment to Github Pages

- The Rock Paper Scisscors Lizard Spock game site was deployed to GitHub pages. The following steps were taken when deploying: 
  - Navigate to the Settings tab in the GitHub repository 
  - Select 'Pages' from the menu on the left of the screen
  - Select the 'Branch: main' option from the drop-down menu in the source section
  - Then click 'Save'
  - After a short wait a live link will be appear in a green banner when published successfully. 

The game's live link can be found here - https://chancandan.github.io/portfolio-project-2/

### Version Control

During the development of the site, When pushing code to the remote repository, I used the following git commands 

```git add .``` - All files added to a staging area awaiting the commit phase.

```git commit -m “specific commit message”``` - To commit changes to the local repository queue where they become ready for the push phase.

```git push``` - All commited code would be then pushed to the site's repo on github.

### Validator Testing 

- HTML Validation
- All files returned no errors when passed through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fchancandan.github.io%2Fportfolio-project-2%2F)

![index.html validator](docs/readme_images/index_validator.JPG)

- CSS Validation
- No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fchancandan.github.io%2Fportfolio-project-2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

![CSS validator](docs/readme_images/css_validator.JPG)

- Javascript Validation
- To verify that my Javascript code was written to the best possible standard I used the JSHint validator to test my JS file. The only errors I had were 5 missing semi-colons which I added into my code and one unused variable which I must have included in the beginning of the project and had forgotten to remove.

![JS Hint validator](docs/readme_images/jshint.JPG)

## Credits and Acknowledgements

A variety of contributors and help went into the development this website:

* The images used for the weapon choices were from a google search. They didn't all come from the same site, despite being from the same style collection. Site's search as https://icon-library.com/ are be acknowledged.

* The font used "electrolize" was taken from google fonts.

* Modal code was learned from https://www.w3schools.com/howto/howto_css_modals.asp

* The geeksforgeeks website helped me understand the logic behind the game I chose. https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/

* https://www.instructables.com/How-to-Play-Rock-Paper-Scissors-Lizard-Spock/ helped me to work out the permutations and rules to be included in my site.

* Youtube tutorial https://www.youtube.com/watch?v=1yS-JV4fWqY

* Youtube page https://www.youtube.com/@Zenva for inspiration and ideas

* Youtube tutorial https://www.youtube.com/watch?v=qWPtKtYEsN4 was another tutorial I watched to gain an understanding of how to use javascript for my project.

* @AniaKubow's content has been great throughout the javascript module in helping me to better grasp the language.

* My class and course facilitator have been great help in our slack group during this project.

* Finally, my mentor Gareth has been great in helping me clearly understand the project brief and nudging me in the right direction when I've come unstuck.

* Youtube tutorial https://www.youtube.com/watch?v=jaVNP3nIAv0 simplified clean code for me.