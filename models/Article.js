var mongoose = require('mongoose');



var Schema = mongoose.Schema

//Define and setup Article Schema

var ArticleSchema = new Schema ({

	title:{
		type: String,
		required: true

	},
	link:{
		type: String,
		required:true
	}
	date:{
		type:Date

	}


});

//Create the model for Article
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;