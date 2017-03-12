module.exports = function(sequelize, DataTypes) {
	return sequelize.define('memory', {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 250]
			}			
		},
		image: {
			type: DataTypes.STRING, //image url possibly stored on Cosmic?
			alloNull: true
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		uploadedBy: {
			type: DataTypes.CHAR,
			allowNull: false
			// defaultValue: function() {
   //    			return bleippoID
   //  		}
		}
	});
};