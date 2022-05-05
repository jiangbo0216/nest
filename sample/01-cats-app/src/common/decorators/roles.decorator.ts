import { SetMetadata } from '@nestjs/common';

//# 用来配合 role.guard.ts 来进行用户鉴权, 但是 cat-app 没有鉴权的模块(没有给 request.user 赋值)
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
