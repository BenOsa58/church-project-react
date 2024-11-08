- Create account in openweathermap - DONE
- create your HOME component - DONE
- Import component Home inside App.jsx - DONE
- Create Component ServiceDays - DONE
- INstall React bootstrap (install and paste link in html head) - DONE
- Create component NavBar.jsx , and choose a navbar from bootstrap, with at least 2 links (still not working) for Home and Service Days. - DONE
- In HOME, fetch the information of the current weather - DONE
- Install React router and create your router, with two routes, one for Home, and one for ServiceDays (follow spike)
- Go to your MyNavbar.jsx and modify the links with the path you defined in the routes
- Insert Weather :IN HOME : create 3 state variables. One for the City(data.name), one for the Temp(data.main.temp), one for the weather situation (sunny, clear sky, et...)(data.weather[0].description).
- Insert Weather2 : when you fetch the date STORE (or UPDATE) each of the state variables with the corresponding information

```javascript
const [userLocation, setUserLocation]=useState("")

 const fetchWeather= () => {
    //fetching the weather
    const data = await response.json();
    //we update a state variable ,named, for example userLocation, with the information about the location

    setUserLocation(data.name)
  }

  //DISCLAIMER : this is a generic example
```

- Insert Weather2 : use each of the 3 variables inside the JSX to render the value

- create a reviews page component: component should open a modal
  -Modal: should contain a form to put the -day of service - activity name -opinion.
- add a route in router
- add a link in navbar
-
