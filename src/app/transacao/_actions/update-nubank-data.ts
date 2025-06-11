'use server';

import { env } from "@/app/_lib/env";
import { pluggy } from "@/app/_lib/integrations/pluggy";
import { revalidatePath } from "next/cache";

async function updateNubankData() {
  await pluggy.updateItem(env.PLUGGY_ITEM_ID);

  revalidatePath('/transacao');
}

export { updateNubankData };
