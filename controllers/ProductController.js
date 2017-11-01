// Dependencies
var express = require('express');
var db = require('../models');

exports.index = function(req, res){
	db.product.findAll().then(function(data){
		res.render("index", { products: data });
	});
}

exports.create = function(req, res){
	res.send('create');
}

exports.delete = function(req, res){
	res.send('create');
}
exports.update = function(req, res){
	
}
exports.detail = function(req, res){
	
}

// router.post('/burgers/insert', function(req, res){
// 	db.Burger.create({
// 		burger_name: req.body.burger_name
// 	}).then(function(){
// 		res.redirect('/');
// 	});
// });

// router.post('/customer/insert', function(req, res){
// 	db.Customer.create({
// 		name: req.body.name,
// 		BurgerId: req.body.burgerId
// 	}).then(function(){
// 		db.Burger.update({
// 		devoured: true
// 	}, {
// 		where: {
// 			id: req.body.burgerId
// 		}
// 	}).then(function(){
// 		res.redirect('/');
// 	});
// 	})
	
// });

// Export router