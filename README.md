In this assignment let's build a **Coffee Planner** by applying the concepts we have learned till now.

### Refer to image below:

<br/>
<div style="text-align: center;">

<img src="https://assets.ccbp.in/frontend/content/react-js/coffee-planner-output.gif" alt="coffee-planner-large-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">

</div>
<br/>

### Design Files

- [Extra Small (Size < 576px) and Small (Size >= 576px) - header](https://assets.ccbp.in/frontend/content/react-js/coffee-planner-sm-header-output-img.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - drink-type](https://assets.ccbp.in/frontend/content/react-js/coffee-planner-sm-drink-type-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - coffee-type](https://assets.ccbp.in/frontend/content/react-js/coffee-planner-sm-coffee-type-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - coffee-quantity](https://assets.ccbp.in/frontend/content/react-js/coffee-planner-sm-coffee-quantity-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - grind-type](https://assets.ccbp.in/frontend/content/react-js/coffee-planner-sm-grind-type-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - deliver-type](https://assets.ccbp.in/frontend/content/react-js/coffee-planner-sm-deliver-type-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/coffee-planner-success-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/coffee-planner-success-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/coffee-planner-error-lg-output.png)

### Project Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Project Completion Instructions

#### Add Functionality

The app must have the following functionalities

- Only one option should be selected for each question.

- When the HTML button element with text content **Create my plan!** is clicked

  - If an option is selected for each question then the summary of the coffee subscription plan should be displayed to the user.

  - If an option is not selected for any of the questions then the following text should be displayed to the user.
    - Kindly select options for all the questions.

- The list of coffee questions is passed to the `CoffeePlanner` component as a prop `coffeePlannerData` in the form of an array object.

- Each coffee question object will have the following properties

  | Key           | Data Type |
  | --------------| --------- |
  | id            | Number    |
  | questionType  | String    |
  | questionTitle | String    |
  | optionsData   | Array     |

- The value to the property `optionsData` contains the list of question options in the form of an array object.
- Each question option object will have the following properties.

  | Key         | Data Type |
  | ----------- | --------- |
  | id          | Number    |
  | optionTitle | String    |
  | description | String    |

- Your task is to complete the implementation of
  - `src/components/CoffeePlanner/index.js`
  - `src/components/CoffeePlanner/index.css`
  - `src/components/CoffeePlannerQuestion/index.js`
  - `src/components/CoffeePlannerQuestion/index.css`
  - `src/components/QuestionOption/index.js`
  - `src/components/QuestionOption/index.css`

### Quick Tips

- The cursor CSS property sets the type of mouse cursor, if any, to show when the mouse pointer is over an element. Use the CSS property cursor with a value `pointer` to indicate a link. Click <a href="https://css-tricks.com/almanac/properties/c/cursor/" target="_blank">this</a> to know more.

- An outline is a line that is drawn around an element, outside the border. The outline CSS shorthand property sets all the outline properties. Use the CSS property `outline` with value `none` to hide all the outline properties. Click <a href="https://www.w3schools.com/css/css_outline.asp" target="_blank">this</a> to know more.

### Resources

#### Images

- [https://assets.ccbp.in/frontend/react-js/coffee-planner-bg.png](https://assets.ccbp.in/frontend/react-js/coffee-planner-bg.png)
- [https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png](https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png)
- [https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png](https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png)

#### Colors:

<div style="background-color: #f4f1ea; width: 150px; padding: 10px; color: black">Hex: #f4f1ea</div>
<div style="background-color: #0e8684; width: 150px; padding: 10px; color: white">Hex: #0e8684</div>
<div style="background-color: #2e353d; width: 150px; padding: 10px; color: white">Hex: #2e353d</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>

#### Font-families

- Roboto

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being
>   imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a
>   look at the Cheat Sheets.
