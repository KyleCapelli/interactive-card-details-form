import * as yup from "yup";

const cardRules = /^[0-9]+$/;
const monthRules = /^(0[1-9]|1[0-2])$/;
const yearRules = /^[0-9]|[0-9]$/;
const cvcRules = /^[0-9]|[0-9]|[0-9]$/;

export const formSchema = yup.object().shape({
  name: yup.string().required("Can't be blank"),
  number: yup
    .string("Wrong format, numbers only")
    .required("Can't be blank")
    .min(16, "Incorrect number of digits")
    .max(16, "Incorrect number of digits")
    .matches(cardRules, { message: "Wrong format, numbers only" }),
  month: yup
    .string("Invalid month")
    .required("Can't be blank")
    .min(2, "Invalid month")
    .max(2, "Invalid month")
    .matches(monthRules, { message: "Invalid month" }),
  year: yup
    .string("Invalid year")
    .required("Can't be blank")
    .min(2, "Invalid year")
    .max(2, "Invalid year")
    .matches(yearRules, { message: "Invalid year" }),
  cvc: yup
    .string("Invalid CVC")
    .required("Can't be blank")
    .min(3, "Invalid CVC")
    .max(3, "Invalid CVC")
    .matches(cvcRules, { message: "Invalid CVC" }),
});
