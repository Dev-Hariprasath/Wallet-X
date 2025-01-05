// models/index.js
const User = require('./User');
const Account = require('./Account');
const Transaction = require('./Transaction');

User.hasOne(Account, { foreignKey: 'userId' });
Account.belongsTo(User, { foreignKey: 'userId' });

Account.hasMany(Transaction, { foreignKey: 'senderAccountId' });
Account.hasMany(Transaction, { foreignKey: 'receiverAccountId' });

Transaction.belongsTo(Account, { foreignKey: 'senderAccountId' });
Transaction.belongsTo(Account, { foreignKey: 'receiverAccountId' });

module.exports = { User, Account, Transaction };
