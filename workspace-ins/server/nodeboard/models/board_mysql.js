// get the client
const mysql = require('mysql2/promise');

// create the connection to database
const pool = mysql.createPool({
  connectionLimit: 10,
  host: '106.246.114.78',
  user: 'node',
  password: 'node',
  database: 'board',
  port: 33306
});

module.exports = {
	// 게시물 목록 조회
	list: async function(){
    let sql = `select * from board order by no desc`;
		const [ list ] = await pool.query(sql);
    return list;

    // connection.query(sql, function(err, results, fields){
    //   if(err) console.error(err);
    //   cb(results);
    // });
	},
	// 게시물 상세 조회
	show: async function(no){
    let sql = `select * from board where no = ?`;    
    const [ article ] = await pool.query(sql, [no]);

    let sql2 = `update board set view=view+1 where no=?`;
    await pool.query(sql2, [no]);
    
    return article[0];
	},
	// 게시물 등록
	create: async function(article){
    let sql = `insert into board set ?`;
    const [ result ] = await pool.query(sql, article);
		return result.insertId;
	},
	// 게시물 삭제
	remove: async function(no){
    let sql = `delete from board where no = ?`;
		await pool.query(sql, [no]);
	}
};














