import {PrismaClient} from "@prisma/client";

export abstract class BaseService {
  prisma: PrismaClient;

  public constructor() {
    this.prisma = new PrismaClient();
  }
}