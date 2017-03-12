module.exports = function (sequelize, DataTypes) {
	return sequelize.define('bleippo', {
		name: {
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
		location: {
			type: DataTypes.STRING,
			allowNull: false
		},
		skills: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	});
}
