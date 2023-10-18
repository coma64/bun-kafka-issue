import {Kafka, logLevel} from "kafkajs";

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092'],
    logLevel: logLevel.DEBUG,
});

const producer = kafka.producer();

await producer.connect()
await producer.send({
    topic: 'test-topic',
    messages: [
        { value: 'Hello KafkaJS user!' },
    ],
});

await producer.disconnect();

console.log('done')
