"use server";

import * as z from "zod";

import { RegisterSchema } from "@/schemas/input";
// import { revalidatePath, revalidateTag } from "next/cache";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }
  return { success: "Email sent!" };
};
