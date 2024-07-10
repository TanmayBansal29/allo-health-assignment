<h3>Overview About Client Side Code: </h3>

<p>I have used Vite as bundler for this project which I installed using the npm create @vite/latest</p>
<p>
  I have used react-redux and redux toolkit for the central state management, where i have created different reducers for a slice to handle the functionality
</p>
<p>
  Also used the concept of custom hooks to create a custom hoom for fetching the data from server api to make code more readable and maintainable
</p>
<p>
  Different components are created like 
  <ul>
    <li>Login</li>
    <li>SignUp</li>
    <li>FilterList</li>
    <li>MealBox</li>
    <li>MealList</li>
    <li>PassengeSelected</li>
    <li>PassengerMeal</li>
  </ul>

  These components are handling different functionalities over the application joined together in the pages directory to form a structure
</p>

<p>
  Implemented the routing using the react-router-dom from where I got BrowserRouter as HOC, Routes, Route to define the routes and useNavigate() hook to created navigations
</p>
<p>
  Used Tailwind CSS to provide the styling to the components and imported buttons from Material UI
</p>
