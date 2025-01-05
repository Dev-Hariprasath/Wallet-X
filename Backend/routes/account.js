const express = require('express');
const { Account, User, Transaction } = require('../models');
const { authMiddleware } = require('../middleware/authMiddleware');
const { sequelize } = require('../config/db');

const router = express.Router();

router.get('/info', authMiddleware, async (req, res) => {
    try {
        const user = await User.findByPk(req.userId, { include: Account });
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json({
            accountId: user.Account.id,
            firstName: user.firstName,
            lastName: user.lastName,
            balance: user.Account.balance
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/transfer', authMiddleware, async (req, res) => {
    try {
        const { to, amount } = req.body;
        const sender = await Account.findOne({ where: { userId: req.userId } });
        const receiver = await Account.findOne({ where: { userId: to } });

        if (!receiver) return res.status(404).json({ message: "Receiver not found" });
        if (sender.balance < amount) return res.status(400).json({ message: "Insufficient funds" });

        await sequelize.transaction(async (t) => {
            await sender.decrement('balance', { by: amount }, { transaction: t });
            await receiver.increment('balance', { by: amount }, { transaction: t });
            await Transaction.create({
                senderAccountId: sender.id,
                receiverAccountId: receiver.id,
                amount
            }, { transaction: t });
        });

        res.json({ message: "Transfer successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
