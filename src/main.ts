import 'dotenv/config'; // Carga las variables de entorno
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita los pipes globales para validaciones
  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: false }));

  // Usa las variables de entorno para configurar puerto y host
  const port = process.env.PORT ? Number(process.env.PORT) : 3000;
  const host = process.env.HOST || 'localhost';

  // Inicia la app
  await app.listen(port, host);
  console.log(`🚀 App running on http://${host}:${port}`);
}

// Llama la función bootstrap y captura errores en caso de fallo
bootstrap().catch((err) => {
  console.error('❌ Error starting the application:', err);
});
