module.exports = function(sequelize, DataTypes){
	var Product = sequelize.define("product", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
      			notEmpty: {
        			msg: "Enter the name of the product."
      			}
			}
		},
		
		department: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
      			notEmpty: {
        			msg: "Enter the department."
      			}
			}
		},
		price: {
			type: DataTypes.FLOAT(11,2),
			defaultValue: 0.00,
			validate: {
      			min: {
      				args: 0.00,
        			msg: "Price must be 0 or greater."
      			}
			}
		},
		stock: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			validate: {
				min: {
					args: 0,
        			msg: "Stock must be 0 or greater."
				}
			}
		},
		active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	});

	return Product;
}