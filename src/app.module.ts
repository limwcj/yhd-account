import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { DateScalar } from './common/scalars/date.scalar';
import { AccountResolverModule } from './resolvers/account/account.resolver.module';
import { AppResolver } from './resolvers/app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'schema.graphql'),
      debug: true,
      playground: true,
      introspection: true,
      context: ({ req }) => ({ req }),
    }),
    AccountResolverModule,
  ],
  providers: [DateScalar],
  controllers: [AppResolver],
  exports: [],
})
export class AppModule {}
