import Joi from "joi";

const AdminCreateStudentSchema = Joi.object({
  TalabaRasmi: Joi.string().required(),

  FISh: Joi.string().min(2).max(100).required().messages({
    "any.required": "FISh talab qilinadi",
  }),

  TugilganSanasi: Joi.string().required().messages({
    "any.required": "Tug'ilgan sanasi talab qilinadi",
  }),

  Jinsi: Joi.string().valid("erkak", "ayol").messages({
    "any.required": "Jinsi haqida malumot talab qilinadi",
  }),

  Manzil: Joi.string().required().messages({
    "any.required": "Manzil talab qilinadi",
  }),

  ManzilVaqtincha: Joi.string().required().messages({
    "any.required": "Vaqtinchalik manzili talab qilinadi" 
  }),
  Yonalish: Joi.string().required().messages({
    "any.required": "Yo'nalish talab qilinadi "
  }),
  OqishTili: Joi.string().required().messages({
    "any.required": "O'qish tili talab qilinadi"
  }),
  Darajasi: Joi.string().required().messages({
    "any.required": "Darajasi talab qilinadi"
  }),
  TalimShakli: Joi.string().required().messages({
    "any.required": "Talim shakli talab qilinadi"
  }),
  Kurs: Joi.string().required().messages({
    "any.required": "Kurs talab qilinadi"
  }),
  Guruh: Joi.string().required().messages({
    "any.required": "Guruh talab qilinadi"
  }),
  Tyutor: Joi.string().required().messages({
    "any.required": "Tyutor talab qilinadi"
  }),
  Stipendiya: Joi.string().required().messages({
    "any.required": "Stipendiya talab qilinadi"
  }),
  Qabul_turi: Joi.string().required().messages({
    "any.required": "Qabul turi talab qilinadi"
  })
});

export default AdminCreateStudentSchema;
