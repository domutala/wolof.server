import _name from "@/data/user/update/name";
import _get from "../get";

interface Params {
  id: string;
  name: string;
}

/**
 * @author domutala
 */
export default async (params: Params) => {
  await _name(params);
  return await _get({ id: params.id });
};
