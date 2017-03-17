module.exports = function(sequelize, DataTypes) {
	return sequelize.define('memory', {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 250]
			}			
		},
		imageUrl: {
			type: DataTypes.STRING, //image url possibly stored on Cosmic?
			alloNull: true
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		date: {
			type: DataTypes.DATEONLY, //YYYY-MM-DD format? Not posting for some reason
			allowNull: false
		},
		uploadedBy: {
			type: DataTypes.STRING,
			allowNull: true
			// defaultValue: function() {
   //    			return bleippoID
   //  		}
		}
	});
};