import prisma from "../../../lib/prisma";

// POST /api/quiz
const handle = async (req, res) => {
    const result = await prisma.quiz.create({
        data: {answers: JSON.stringify(req.body)},
    });
    res.json(result);
}

export default handle;