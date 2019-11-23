Make sure you can serve it correctly before developing!

How the App will work - User Stories
    *note: Make sure to complete a step completely by passing the related tests before moving on to the next step.  The steps are meant to provide you with a direction and prevent you from getting overwhelmed. The tests are meant to be a guide you through the logic of the application, but passing all the tests does not mean your application has no errors.  You will also need to ensure that things are properly display on screen and the application is not crashing.

Your application is built for different types of users.  The first user is the bank customer while the second user is a bank employee/teller.  

Start by adding routing to the application. The components should be there and the links in the nav designated, but not hooked up.

The bank app will have three views: an ATM view, Teller view and a Contact view. 
    Make ‘/atm’ the route for your AtmComponent and make this the default view.  
        This should be the first route seen and should be navigated to if the user inputs an invalid route.
    Now, do the same for the ‘/teller’ route and TellerComponent.  
    Then create the Contact Component add ‘/contact’ route to the router and and a 3rd link to the nav bar. 
run: npm test -- --testNamePattern=router
    This is the pattern we will use to run the tests for our application.  If you have passed the, move onto the next section. If you have failed any tests, review the message provided by the testing library and make the necessary changes.

Your application should also have a service hooked up to handle the heavy logic from any of the views. This has already been created for your (bank.service.ts).
    Import and add this service to the app module. Refer back to the lecture/stackblitz example we went through about services.

In app.component.ts, there should be an account object. 
    Move this object to the service and update it with any desired values. This will act as the “Account” which you base the display information on in the app. 
    All the data flow should be based on this object. 
    You can modify or update the values, but any event based interactions need to happen programmatically and mutations on this object need to happen in the Service.


The ATM view (Banks customer):
    As a user, I should be able to retrieve account information such as: 
        balance
        transaction history
        withdraw funds
        deposit funds.  
    This information should be displayed on screen and updated accordingly
    Add an input field for users to input the amount they wish to deposit/withdraw.  
        This field should only accept numbers. 
        The value of this field should be stored on the component property called value.  
        This will be used for deposit or withdrawal.
    Create a method called withdraw and connect it to the withdraw button.  
        The method should reduce the balance property on the BankService’s account object by the amount in the input field.
Run: npm test -- --testNamePattern=atm.withdraw
    Create a method for customer deposits and connect it to the deposit button.  
        This method should update the state on service.
Run: npm test -- --testNamePattern=atm.deposit
    When the withdraw or deposit buttons are pressed, as a user I should see 
        if the transaction was successful, 
        transaction details any 
        my updated balance.  
    Add this functionality and remember, more information is better.
    Add functionality to both the withdraw and deposit methods to update the list of transactions on the account object.
Run: npm test -- --testNamePattern=atm.transactions
    When the transaction history button is pressed I should see details on the 3 most recent transactions.
Run: npm test -- --testNamePattern=AtmComponent
    Add more features and styling to make it unique.  
    
If all tests are passing and there are no other observable bugs or mistakes, move on to the next section.

The Teller view (bank employee):
    Imagine this as a bank teller’s view on a customer account. 
    The information on the left should be relevant to the current customer. 
    If I were a teller looking into a customer’s account I would see what kind of information? 
        Base this on your static account object data.
    The balance and customer information should always be viewable in this component and should be up to date.  
    Performing transactions should update the transaction history.  
    As a teller I should be able to perform transactions at the customer’s request.
    Add an input field for the teller to input the amount they wish to deposit/withdraw.  
        This field should only accept numbers. 
        The value of this field should be stored on the component property called value.  
        This will be used for deposit or withdrawal.
    Create a method called withdraw and connect it to the withdraw button.  
        The method should reduce the balance property on the BankService’s account object by the amount in the input field.
Run: npm test -- --testNamePattern=teller.withdraw
    Create a method for customer deposits and connect it to the deposit button.  
        This method should update the state on service.
Run: npm test -- --testNamePattern=teller.deposit
    Add functionality to both the withdraw and deposit methods to update the list of transactions on the account object.
Run: npm test -- --testNamePattern=teller.transactions
    When the transaction history button is pressed I should see details on the customers past transactions
Run: npm test -- --testNamePattern=TellerComponent
    Add more features and styling to make it unique. 

If all tests are passing and there are no other observable bugs or mistakes, move on to the next section.

The Contact view: 
    This will be a page for users to contact the back or give feedback. 
    You should have already created this component in step 1.
    This page will have contact information for your back on the left hand column and a contact form on the right hand side.
    The contact form fields should utilize two way binding and write to some defined property on the service.
    The submit button should handle the form submission by alerting the contents of the form along with a message indicating that it was submitted properly. 
        Bonus: figure a way to add logic to determine if a user did not fill out all the required fields.
    In addition to alerting the contents of the form, navigate the user back to the ATM component programmatically.
    Add more features and styling to make it unique. 
Run: npm test. 
    Then follow the prompt to run all tests.  
    At this point all 14 tests should pass. 
    If not follow the message form the testing library to fix any errors.  
    Then check your app for any other buggy or undesired behavior.

Must Use: The following concepts must be used somehow in your application. This is how you will be assessed: 
    Routing
    Services
    Creating a component
    Ternary Statements
    1-way binding
    Event binding
    2-way binding
    *ngIF
    *ngFor
    Flexbox/CSS Grid & CSS
    Tips/Hints
    Use event binding to add functionality to your button
    Logic that is intensive or doesn’t handle UI interactions should live in the service. 
    Your Account object should be in the service and referenced from the components.
    Utilize all you’ve learned so far about the following to complete this challenge.
        structural directives, 
        interpolation, 
        routing, 
        services, 
        components  