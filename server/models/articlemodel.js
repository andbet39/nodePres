/**
 * Created by andrea.terzani on 09/04/2015.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var ArticleSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    content: {
        type: String,
        trim: true
    },
    postedOn: {
        type: Date,
        trim: true
    },
    updatedOn: {
        type: Date,
        trim: true
    }
});

mongoose.model('Article', ArticleSchema);
