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
import { VariedadesModule } from './tablas_basicas/variedades/empleados.module';
import { ChecklistEsquejesModule } from './calidad/checklist_esquejes/checklist_esquejes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'SQL1003.site4now.net',
      port: 1433,
      username: 'db_ab848f_florapp_admin',
      password: 'Deliflor2025.',
      database: 'db_ab848f_florapp',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Solo para desarrollo, no en producción
      options: {
        encrypt: true, // Para SmarterASP
      },
    }),
    UsersModule,
    AuthModule,
    RolesModule,
    CalidadEsquejesModule,
    EmpleadosModule,
    VariedadesModule,
    ChecklistEsquejesModule,
  ],
  controllers: [AppController],
  providers: [AppService /*, CalidadEsquejesService*/],
})
export class AppModule {}
