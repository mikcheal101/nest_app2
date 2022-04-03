import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');
  // app.enableCors({
  //   origin: 'http://localhost:4200',
  // });
  // await app.listen(8001);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://lnnwsxzd:Fj03awolW9qubz06gjZFGH_766e3a2tm@sparrow.rmq.cloudamqp.com/lnnwsxzd',
        ],
        queue: 'main_queue',
        queueOptions: { durable: false },
      },
    },
  );

  app.listen();
}
bootstrap();
