import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const pool=mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    port: process.env.DB_PORT || 3306,
    database:process.env.DB_TABLE || 'umc_wb',
    password:process.env.DB_PASSWORD || 'password',
    waitForConnections: true,
    //Pool에 획득할 수 있는 connection이 없을 때,
    //true면 요청을 queue에 넣고 connection을 사용할 수 있게되면
    // 요청을 실행하며, false이면 즉시 오류를 내보내고 다시 요청
    connectionLimit:10,
    queueLimit:0,

});