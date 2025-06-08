import type { Prisma } from '@/generated/prisma';
import { prisma } from '..';

const categories: Prisma.CategoriesCreateInput[] = [
  {
    name: 'Despesas Fixas',
    description: 'Despesa recorrente com valor previsível, como aluguel ou mensalidades.',
  },
  {
    name: 'Despesas Essenciais',
    description: 'Despesa necessária para atender às necessidades básicas, como moradia, alimentação e transporte.',
  },
  {
    name: 'Despesas Variáveis',
    description: 'Despesa com valor ou frequência variável, como contas de consumo ou lazer.',
  }
];

async function seedCategories(): Promise<void> {
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const categoryAlreadyExists = await prisma.categories.findFirst({
      select: { name: true, },
      where: {
        name: category.name
      }
    });

    if(categoryAlreadyExists) {
      console.log(`Seed | Categories | Category ${category.name} already exists`);
      continue;
    }

    await prisma.categories.create({
      data: {
        name: category.name,
        description: category.description,
      }
    });
  }
}

seedCategories();
