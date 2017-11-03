// Dependencies
var express = require('express');
var db = require('../models');
var departments = require('../config/departments');


exports.list = function(req, res){
	db.product.findAll().then(function(data){
		res.render("list", { products: data });
	});
}

exports.create = function(req, res){
	res.render("create", { department: departments});
}

exports.store = function(req, res){
	db.product.create({
		name: req.body.name,
		department: req.body.department,
		price: req.body.price ? parseFloat(req.body.price) : 0.00,
		stock: req.body.stock ? parseInt(req.body.stock) : 0,
		active: (req.body.active == 'on') ? true : false
	})	
	.then(function(){
		res.redirect('create');
	});
}

exports.delete = function(req, res){
	db.product.destroy({
		where: 
			{id: req.params.id}
	}).then(function(){
		res.json('ok');
		}
	);
}

exports.edit = function(req, res){
	db.product.findById(req.params.id)
		.then(function(data){
			for (var i = 0 in departments) {
				if(departments[i].value == data.department){
			  		departments[i].selected = true;
				} else {
					departments[i].selected = false;
				}
			}
			res.render("edit", { product: data, department: departments });
	});
}


exports.update = function(req, res){
	console.log(req.body.active);
	db.product.update({
		name: req.body.name,
		department: req.body.department,
		price: req.body.price ? parseFloat(req.body.price) : 0.00,
		stock: req.body.stock ? parseInt(req.body.stock) : 0,
		active: (req.body.active == 'on') ? true : false
	}, {where: {
		id: req.body.id
	}})
	.then(function(){
		res.redirect('/product');
	});
	
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