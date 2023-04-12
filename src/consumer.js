"use strict";

const { Kafka } = require("kafkajs");
const clientId = "my-app";
const topic = "message-log";

const consumer = Kafka.consumer({ groupId: clientId });

const consume = async () => {
    await consumer.connect()
    await consumer.subscribe({ topic })
    await consumer.run({
        eachMessage: ({ message }) => {
            console.log(`received message: ${message.value}`)
        },
    })
}

module.exports = consume
