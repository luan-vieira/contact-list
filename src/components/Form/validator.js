import * as z from "zod";

export const schema = z.object({
  name: z.string().nonempty("O nome é obrigatório!"),
  email: z.string().nonempty("O email é obrigatório!").email("Email inválido!"),
  phone: z
    .string()
    .nonempty("O telefone é obrigatório!")
    .min(11, "Minimo de 11 digitos!")
    .regex(
      new RegExp(
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
      ),
      "Número invalido!"
    ),
});
