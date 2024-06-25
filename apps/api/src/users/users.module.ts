import { Module } from '@nestjs/common'
import {} from './users.service'
import {} from './users.resolver'
import {} from ''

@Module({
    providers: [UsersResolver, UsersService, PrismaService],
})
export class UsersModule {}