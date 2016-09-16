// Include Main React dependencies

var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router

// Import routes
var routes = require('./config/routes');


// Import main.js

var Main = require('./Components/main.js');


ReactDOM.render(

	<div className ='main-container'>

		<Main />

	</div>,
	document.getElementByID('app')
)