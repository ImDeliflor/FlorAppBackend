// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersModule } from './users/users.module';
// import { AuthModule } from './auth/auth.module';
// import { RolesModule } from './roles/roles.module';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: '123456',
//       database: 'indrive_db',
//       entities: [__dirname + '/**/*.entity{.ts,.js}'],
//       synchronize: true,
//     }),
//     UsersModule,
//     AuthModule,
//     RolesModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { CalidadEsquejesModule } from './calidad/calidad_esquejes/calidad_esquejes.module';
//import { CalidadEsquejesService } from './calidad/calidad_esquejes/calidad_esquejes.service';
import { EmpleadosModule } from './tablas_basicas/empleados/empleados.module';
import { VariedadesModule } from './tablas_basicas/variedades/variedades.module';
import { ChecklistEsquejesModule } from './calidad/checklist_esquejes/checklist_esquejes.module';
import { CalidadSiembraModule } from './calidad/calidad_siembra/calidad_siembra.module';
import { RendimientoSiembraModule } from './calidad/rendimiento_siembra/rendimiento_siembra.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      // options: { encrypt: true },
      ssl: {
        rejectUnauthorized: false,
      },
    }),

    UsersModule,
    AuthModule,
    RolesModule,
    CalidadEsquejesModule,
    EmpleadosModule,
    VariedadesModule,
    ChecklistEsquejesModule,
    CalidadSiembraModule,
    RendimientoSiembraModule,
  ],
  controllers: [AppController],
  providers: [AppService /*, CalidadEsquejesService*/],
})
export class AppModule {}
