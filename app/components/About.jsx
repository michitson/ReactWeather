var React = require('react');

var About = (props) => {
    return(
      <div>
        <h1>About component</h1>
        <p>This is a weather application built on React</p>
        <p>
          Here area a couple of the tools that were used:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/React">React</a> This was the javascript framework used
          </li>
          <li>
            <a href="http://www.openweathermap.org">Open Weathermap</a> API for obtaining weather data
          </li>
          <li></li>
        </ul>
      </div>
    );
};

module.exports = About;
