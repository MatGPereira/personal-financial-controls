'use server';

import { prisma } from "@/db";

async function fetchCategories() {
  return await prisma.categories.findMany({
    include: {
      Expenses: {
        where: {
          userId: 1,
        },
      },
    },
  });
}

export {
  fetchCategories
};
