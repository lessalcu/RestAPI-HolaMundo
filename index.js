const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns a Hello World message from the REST API
 *     responses:
 *       200:
 *         description: Successful response with the message "Hello World from REST API!"
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Hello World from REST API!
 */
router.get('/', (req, res) => {
    res.send('Hello World from REST API!');
});

module.exports = router;