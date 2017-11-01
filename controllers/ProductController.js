// Dependencies
var express = require('express');
var db = require('../models');

exports.list = function(req, res){
	db.product.findAll().then(function(data){
		res.render("list", { products: data });
	});
}

exports.create = function(req, res){
	res.render("create");
}

exports.store = function(req, res){
	db.product.create({
		name: req.body.name,
		department: req.body.department,
		price: req.body.price ? parseFloat(req.body.price) : 0.00,
		stock: req.body.stock ? parseInt(req.body.stock) : 0,
		active: (req.body.active == 'true') ? true : false
	})	
	.then(function(){
		res.redirect('create');
	});
}



exports.delete = function(req, res){
	res.send('create');
}
exports.update = function(req, res){
	
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