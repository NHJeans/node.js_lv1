/**
 * @swagger
 * tags:
 *   name: Board
 *   description: 게시판 관련 API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: 게시글의 고유 ID
 *         user:
 *           type: string
 *           description: 작성자 이름
 *         title:
 *           type: string
 *           description: 게시글 제목
 *         content:
 *           type: string
 *           description: 게시글 내용
 *         createdAt:
 *           type: string
 *           description: 작성일
 *           format: date-time
 *     PostInput:
 *       type: object
 *       properties:
 *         user:
 *           type: string
 *           description: 작성자 이름
 *         password:
 *           type: string
 *           description: 비밀번호
 *         title:
 *           type: string
 *           description: 게시글 제목
 *         content:
 *           type: string
 *           description: 게시글 내용
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: 게시글 목록 조회
 *     tags: [Board]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *
 *   post:
 *     summary: 게시글 등록하기
 *     tags: [Board]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PostInput'
 *     responses:
 *       200:
 *         description: 성공
 */

/**
 * @swagger
 * /posts/{postId}:
 *   get:
 *     summary: 게시글 상세 조회
 *     tags: [Board]
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
 *               $ref: '#/components/schemas/Post'
 *
 *   put:
 *     summary: 게시글 수정하기
 *     tags: [Board]
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
 *             $ref: '#/components/schemas/PostInput'
 *     responses:
 *       200:
 *         description: 성공
 *
 *   delete:
 *     summary: 게시글 삭제하기
 *     tags: [Board]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 성공
 */
