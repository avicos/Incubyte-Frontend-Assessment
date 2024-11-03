# String Calculator Project Documentation


## Overview
The String Calculator is a simple React application that takes a string of numbers separated by various delimiters (commas, newlines, semicolons, or custom delimiters) and calculates their sum. The application provides error handling for invalid inputs, such as negative numbers.

## Features

1. Input string with numbers separated by default or custom delimiters.
2. Calculates the sum of the provided numbers.
3. Displays an error modal for invalid inputs.
4. Responsive and user-friendly interface.
   
## Technologies Used
1. React: For building the user interface.
2. JavaScript: For application logic.
3. CSS: For styling the components.

## Usage

1. Open the application in your web browser.
2. In the input field, enter a string of numbers. You can use default delimiters (, \n ;) or specify a custom delimiter at the start of the string, for example:
        Default: 1,2\n3
        Custom: //;\n1;2;3
3. Click the Calculate Sum button.
4. The application will display the sum of the numbers. If there are negative numbers in the input, an error message will be shown.

##Components
1. Calculator

This is the main component of the application that handles user input and displays the result.
Props

    None

State

    inputString: The string of numbers entered by the user.
    result: The calculated sum of the numbers.
    error: Error message if the input is invalid.

Methods

    handleInputChange(e): Updates the inputString state and resets the error and result.
    calculateSum(): Calculates the sum of the numbers by calling the add function and handles any errors.

2. ErrorModal

A modal component that displays error messages to the user.
Props

    message: The error message to display.
    onClose: A function to call when the modal is closed.

3. Utility Function: add

This utility function takes a string of numbers and calculates their sum.
Parameters

    numbers (string): The input string containing numbers separated by delimiters.

Returns

    number: The total sum of the numbers.

4. Utility Function: splitByDelimiters

This helper function splits a string into an array of substrings based on multiple delimiters.
Parameters

    string (string): The input string to split.
    delimiters (array): An array of delimiters to use for splitting.

Returns

    array: An array of substrings split by the specified delimiters.

Error Handling

    If the input contains negative numbers, an error will be thrown, and the ErrorModal will display a message listing the negative numbers.
    If the input string is empty or improperly formatted, the application will handle the error gracefully.

Styling

The application uses a simple CSS file (Calculator.css) for styling. Modify this file to change the appearance of the calculator and its components.
Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please feel free to open an issue or submit a pull request.
License

This project is licensed under the MIT License.

