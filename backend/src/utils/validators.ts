import { NextFunction, Request, Response } from "express";
import { body, ValidationChain, validationResult } from "express-validator";

const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validations) {
      const errors = await validation.run(req);
      if (!errors.isEmpty()) {
        break;
      }
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) return next();
    return res.status(422).json({ errors: errors.array() });
  };
};

const loginValidator = [
  body("email").trim().isEmail().withMessage("Email is required."),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password should contain minimum 6 characters."),
];

const signupValidator = [
  body("name").notEmpty().withMessage("Name is required."),
  ...loginValidator,
];

export { validate, signupValidator, loginValidator };
