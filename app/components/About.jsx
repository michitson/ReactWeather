var React = require('react');

var About = (props) => {
    return(
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is a weather application built with React</p>
        <p>
          Here are a couple of the tools that were used:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/React">React</a> This was the javascript framework used
          </li>
          <li>
            <a href="http://www.openweathermap.org">Open Weathermap</a> API for obtaining weather data
          </li>
          <li>
            <a href='http://foundation.zurb.com'>Foundation</a> Tools used to layout and style the application
          </li>
        </ul>
      </div>
    );
};

module.exports = About;
