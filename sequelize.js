const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres://qrynwfqaijslzg:9951aa97d2cd13a29439bdc4858c2fe60214c1bd50507e018d5bc2742bfd7e2e@ec2-54-155-208-5.eu-west-1.compute.amazonaws.com:5432/d2ik62si8f0ura',
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        }
    })

sequelize.sync().then(function () {}).then(
    console.log("Synced.")
);
module.exports = sequelize;