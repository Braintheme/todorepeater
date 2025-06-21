import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtUser } from '@common/interfaces/jwt-user.interface';

import { Request } from 'express';

export const User = createParamDecorator(
  (field: keyof JwtUser | undefined, ctx: ExecutionContext): unknown => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const user = request.user as JwtUser;
    return field ? user?.[field] : user;
  },
);
