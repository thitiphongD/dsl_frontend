"use server";
import { schemaLogin, schemaRegister } from "@/app/schemas/auth.schema";

export async function loginUserAction(prevState: any, formData: FormData) {
  const validatedFields = schemaLogin.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Register.",
    };
  }

  return {
    ...prevState,
    data: "OK",
    // data: validatedFields.data, // กรณีอยาก log -hv,
  };
}

export async function registerUserAction(prevState: any, formData: FormData) {
  const validatedFields = schemaRegister.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Register.",
    };
  }

  return {
    ...prevState,
    data: "OK",
  };
}
