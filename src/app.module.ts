import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import UsersModule from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }), UsersModule, TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      username: "root",
      password: "",
      port: 3306,
      database: "test",
      entities: [],
      synchronize: true,
      // options:{
      //     encrypt:false, 
      //     enableArithAbort:true,
      //     requestTimeout: 999999,
      //     connectionTimeout: 999999
      // } 
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
