/**
 * Created by andreaterzani on 13/04/15.
 */
/**
 * Created by andrea.terzani on 07/04/2015.
 */

module.exports = function(app) {

    var mongoose = require('mongoose');
    var article = require('../models/articlemodel.js');
    var auth = require('./auth.js');

    var Article = mongoose.model('Article');



     app.get('/articles',function(req,res){

        Article.find(function(err, articles) {
            if (err) {
                return res.send(err);
            }

            res.json(articles);
        });
    });

    app.post('/articles',function(req, res) {
        var article = new Article(req.body);
        article.postedOn = new Date();
        article.save(function(err) {
            if (err) {
                return res.send(err);
            }

            res.send({ message: 'Article Added' });
        });
    });

    app.put('/articles/:id',function(req,res){

        console.log('Update for :'+ req.params.id);
        Article.findOne({ _id: req.params.id }, function(err, article) {
            if (err) {
                return res.send(err);
            }

            for (prop in req.body) {
                article[prop] = req.body[prop];
            }

            article.updatedOn=new Date();

            // save the movie
            article.save(function(err) {
                if (err) {
                    return res.send(err);
                }

                res.json({ message: 'Article updated!' });
            });
        });
    });

};