# Fibonacci Sequence Generator - Documentation

This project generates a Fibonacci sequence based on a given number 'n'. It uses Django and Django Rest Framework on the backend, React.js on the frontend, and PostgreSQL for the database.

Sure, here's a more comprehensive version of the steps:

## Setting Up the Development Environment

1. Clone the repository to your local machine.

### Setting Up the Backend

2. Navigate to the backend folder ("server").

3. Install the required Python packages using pip. These requirements are listed in the `requirements.txt` file, which can be installed with the command: `pip install -r requirements.txt`.

4. Install PostgreSQL and create a new database.

5. In the Django project's `settings.py` file, update the `DATABASES` setting with the details of your PostgreSQL database. This includes the name of the database, the username, the password (if any), the host (usually 'localhost'), and the port (usually 5432).

6. Run the Django command `python manage.py makemigrations` to create the necessary migration files based on the models defined in the Django project.

7. Run the Django command `python manage.py migrate` to apply these migrations and create the necessary tables in the database.

8. Run the Django server with the command `python manage.py runserver`. By default, it will run on http://127.0.0.1:8000/.

### Setting Up the Frontend

9. Navigate to the frontend folder ("client").

10. Install the required Node.js packages using npm or yarn. These packages are listed in the `package.json` file, which can be installed with the command: `npm install` or `yarn`.

11. Start the React development server with the command `npm start` or `yarn start`. By default, it will run on http://localhost:3000/.

### Running the Application

12. Open your browser and navigate to http://localhost:3000/. You will see a form to input a number for which you want to generate the Fibonacci sequence.

13. Input a number and click "Submit". The application will then compute the Fibonacci sequence up to that number and display it.

14. The application also handles basic error cases such as non-integer inputs, negative numbers, and numbers greater than a certain limit. In these cases, an appropriate error message will be displayed.

### Note:

Make sure that both Django and React servers are running simultaneously in different terminals for the full application to work. Both servers need to communicate with each other; the Django server is used to compute and store the Fibonacci sequence, and the React server is used to display the user interface and communicate with the Django server.

This application also demonstrates good software engineering practices such as modularity (separation of the frontend and backend, separation of concerns within the backend and frontend), code readability, and basic error handling.

## Project Structure and Implementation Details

### Backend - Django

1. A new Django project was created and within it, a new app was created specifically for generating the Fibonacci sequence.

2. A new model was defined in `models.py` which represents a Fibonacci sequence for a number. The `number` field is the number input by the user, and the `fibonacci_sequence` field is the calculated Fibonacci sequence.

3. A new serializer was defined in `serializers.py`. This serializer converts model instances into JSON format to be used for API responses.

4. A helper function `fibonacci()` was created in `helpers.py` to calculate the Fibonacci sequence.

5. In `views.py`, a view was defined to handle POST requests. This view:

   - Validates the input data
   - Checks if the Fibonacci sequence for this number already exists in the database
   - If it does, it returns it
   - If it doesn't, it calculates the sequence, saves it in the database, and then returns it
   - Basic error handling was implemented to handle any potential errors

6. Finally, a URL route was defined for this view in `urls.py`.

### Frontend - React.js

1. A new React project was created.

2. A `Form` component was created. This component:

   - Contains a form where the user can enter a number
   - Sends a POST request to the backend when the form is submitted
   - Receives the Fibonacci sequence from the backend

3. A `Result` component was created to display the received Fibonacci sequence.

4. The `App` component uses React Router to navigate between the `Form` and `Result` components. A state variable `result` is used to pass the Fibonacci sequence from the `Form` component to the `Result` component.

5. Error handling was implemented in the `Form` component to handle any potential errors from the backend.

6. A route was added to redirect all unknown routes back to the form.

This application demonstrates a complete full-stack application with a Django backend, React.js frontend, and a PostgreSQL database. It adheres to principles of clean, modular code, with separation of concerns and single responsibility in mind. Basic error handling has been implemented to handle common errors. The application takes care of handling unique constraint in the database and also handles gibberish or wrong URL inputs by redirecting the user back to the form.

## Design and Implementation Approach

In developing this application, my primary focus was on designing and implementing it with attention to constraints, performance, and maintainability. The architecture I adopted is clean and modular, with a distinct separation of frontend and backend to ensure independent scalability. I added validations to restrict the inputs being processed which improves the robustness of the application. From a performance perspective, I implemented database caching to minimize redundant computations and improve efficiency. By leveraging the Django and React frameworks, I ensured the code structure is highly maintainable as it promotes readability and modularity. I avoided the use of obscure features and instead adhered to industry best practices in developing this solution. While the aesthetics of the application are minimal, it is important to note that the application's functionality and logic have been prioritized, underscoring my key focus on constraints, performance, and maintainability.

## References

1. https://stackpython.medium.com/how-to-start-django-project-with-a-database-postgresql-aaa1d74659d8
2. https://blog.logrocket.com/using-react-django-create-app-tutorial/
