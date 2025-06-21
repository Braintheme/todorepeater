import { UserModule } from '@modules/user/user.module';
import { CategoryModule } from '@modules/category/category.module';
import { TodoModule } from '@modules/todo/todo.module';
import { AuthModule } from '@modules/auth/auth.module';
import { CompletionModule } from '@modules/completion/completion.module';

export const appModules = [
  UserModule,
  CategoryModule,
  TodoModule,
  AuthModule,
  CompletionModule,
];
