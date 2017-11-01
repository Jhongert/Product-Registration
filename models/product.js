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
      			min: 0
			}
		},
		stock: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			validate: {
				min: 0
			}
		},
		active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	});

	return Product;
}