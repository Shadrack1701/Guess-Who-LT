import prisma from "../../../lib/prisma";

// /api/quiz
const handle = async (req, res) => {
    if (req.method === 'POST') {
        const result = await prisma.quiz.create({
            data: {answers: JSON.stringify(req.body)},
        });
        res.json(result);
    } else if (req.method === 'GET') {
        const result = await prisma.quiz.findMany();
        res.json(result);
    } else {
        res.status(404).send('Not Found');
    }
}

export default handle;