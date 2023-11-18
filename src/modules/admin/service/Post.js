import { AdminCreateStudentModel } from "../../../model/AdminCreateStudentModel.js";

const createStudent = async ({ body }) => {
  const {
    FISh,
    TugilganSanasi,
    Jinsi,
    Manzil,
    ManzilVaqtincha,
    Yonalish,
    OqishTili,
    Darajasi,
    TalimShakli,
    Kurs,
    Guruh,
    Tyutor,
    Stipendiya,
    Qabul_turi: qabulTuri,
  } = body;

  if (
    !FISh ||
    !TugilganSanasi ||
    !Jinsi ||
    !Manzil ||
    !ManzilVaqtincha ||
    !Yonalish ||
    !OqishTili ||
    !Darajasi ||
    !TalimShakli ||
    !Kurs ||
    !Guruh ||
    !Tyutor ||
    !Stipendiya ||
    !qabulTuri
  ) {
    return;
  }

  const createdStudentData = await AdminCreateStudentModel.create({
   ...body
  });

  return createdStudentData;
};

export default createStudent;
