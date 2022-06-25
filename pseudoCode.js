// prettier-ignore
//Button type 
  // Button type is number(no classlist) 
    // Evenet listener will submit number to sendNumberValue fn.
      // If number is going after math operator
        // Change calculators display to followed number.
        // Don't come back till new operator will be clicked.
       // Else
        // If current number is number replace it with new number;
        // If not concatenate current number to displayed number


  // Button type is operator(btn contains 'operator' class  name)
    // Event listener will submit operator sign to useOperator fn.
      // Set current value to be equal to displayed number
      // If is operator and waiting for next value true - Prevent multiple operators
        // end fn.
      // If it's first number set it to current value
        // first value assigned to current number
       // Else use operator 
          // make calculation
            // RETURN number
              // if operator "/" make division previousNum divided on currentNum
              // if operator "*" make multiplication previousNum multiplied on currentNum
              // if operator "+" make addition previousNum plus currentNum
              // if operator "-" make substraction previousNum minus currentNum
              // if operator "="  current value
          // Render calculated value on the calculators display.
          // Previous number is equal to calculated number
      // Make it ready for the next value.
      // Reset operator value and store it.


  //Button type is decimal(btn contains 'decimal' class name)
    // Event listener call fn addDecimal(with no arguments)
      // If operator is equal sign allow to add decimal.
        // Make operator unpressed(save equal sign("="))
      // If operator is pressed 
        // end fn
      // If no decimal points
        // Add decimal point to calculators display el.

//Button type
  // Button type is clear
    // reset all global variables and calculators display.