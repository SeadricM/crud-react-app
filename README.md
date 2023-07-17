# crud-react-app
 Plexxis Software Exercise

I created this application using vite + react.

This application has a button that retrieves all employees currently in the database, this is done from a REST API. Clicking this button will also display all employees below the button.
Below the list of employees are multiple text fields that allow the user to create a new employee by entering their name, code, profession, color, city, branch and assigned. 
After filling in this information, the Add Employee button is provided as a UI mechanism to add the employee to the database as well as updating the list currently displayed.
Within each employee field, there are UI mechanisms to update color, city, branch and assigned with a corresponding button to confirm the update. This update has an API endpoint
that immediately shows the change once the button is clicked. All buttons: Show Employees, Add Employee, Change Color, Change City, Change Branch, and Change Assigned all have API endpoints
and can show any changes made immediately.

I used MySQL as a database to store all the employees.

How to run:
Open the terminal and type in 'npm run dev'
This will display a localhost link that will open the webpage
In another terminal, type in 'node index.js', this connects the backend functionality for the application
