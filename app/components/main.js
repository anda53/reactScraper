var react = require("react");


//Create the main compnent

var Main = react.createClass({
	render: function(){
		return{
			<div className= "maincontainer">
				<div className="row">
					<div className="jumbotron">
						<h1>New York Times Scraper</h1>
					</div>
				</div>

				<div className = "row">
					<Search/>
				</div>

				<div className="row">
					<Saved/>
				</div>
			</div>
		}
	}

})