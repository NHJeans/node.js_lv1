/**
 * @swagger
 * tags:
 *   - name: Comment
 *     description: 댓글 관련 API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       properties:
 *         commentId:
 *           type: string
 *           description: 댓글의 고유 ID
 *         user:
 *           type: string
 *           description: 댓글 작성자
 *         content:
 *           type: string
 *           description: 댓글 내용
 *         createdAt:
 *           type: string
 *           description: 댓글 작성일
 *           format: date-time
 *     CommentInput:
 *       type: object
 *       properties:
 *         user:
 *           type: string
 *           description: 댓글 작성자
 *         password:
 *           type: string
 *           description: 댓글 비밀번호
 *         content:
 *           type: string
 *           description: 댓글 내용
 *     CommentEdit:
 *       type: object
 *       properties:
 *         password:
 *           type: string
 *           description: 댓글 비밀번호
 *         content:
 *           type: string
 *           description: 수정할 댓글 내용
 */

/**
 * @swagger
 * /posts/{postId}/comments:
 *   get:
 *     summary: 댓글 목록 조회
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 *
 *   post:
 *     summary: 댓글 등록하기
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommentInput'
 *     responses:
 *       200:
 *         description: 성공
 */

/**
 * @swagger
 * /posts/{postId}/comments/{commentId}:
 *   put:
 *     summary: 댓글 수정하기
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommentEdit'
 *     responses:
 *       200:
 *         description: 성공
 *
 *   delete:
 *     summary: 댓글 삭제하기
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 description: 댓글 비밀번호
 *     responses:
 *       200:
 *         description: 성공
 */
