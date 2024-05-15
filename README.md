Installation Guide

1- npx create-next-app@latest

2- npm i prisma --save-dev

3- npx prisma init --datesource-provider mongodb

4- Update .env file with your MONGODB URL

5- Add your new schemas to @/prisma/schema.prisma

6- npx prisma generate

7- Create an utils file & implement {PrismaClient} == PrismaClient()

8- npx prisma generate

9- npx prisma db push