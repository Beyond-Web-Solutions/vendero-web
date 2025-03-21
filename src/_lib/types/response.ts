import { typeToFlattenedError } from "zod";

export type ServerActionResponse<
  Schema = object,
  Response = undefined,
> = Promise<
  | ({
      ok: true | false;
    } & ServerActionValidationError<Schema>)
  | ServerActionSuccess<Response>
>;

type ServerActionSuccess<Data = undefined> = {
  ok: true;
} & (Data extends undefined ? object : { data: Data });

type ServerActionValidationError<T> = {
  ok: false;
  errors: typeToFlattenedError<T>;
};
