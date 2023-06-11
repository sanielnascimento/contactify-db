import validData from "./validData.middlewares";

import uniqEmail from "./uniqEmail.middlewares";
import minData from "./minData.middlewares";

import errors from "./errors.middlewares";
import token from "./token.middlewares";

import ownerVerify from "./ownerVerify.middlewares";

export default { errors, minData, validData, uniqEmail, token, ownerVerify };
