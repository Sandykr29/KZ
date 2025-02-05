import Joi from "joi";

export const validateRegister = (data: object) => {
  return Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate(data);
};

export const validateLogin = (data: object) => {
  return Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).validate(data);
};
