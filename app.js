const mysql = require("mysql");
const schedule = require("node-schedule");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
});

connection.connect();

connection.query("CREATE DATABASE IF NOT EXISTS nodeschedules");

connection.query("USE nodeschedules");

connection.query("CREATE TABLE IF NOT EXISTS latihan_schedule (id INT NOT NULL AUTO_INCREMENT,waktu_sekarang TIMESTAMP NULL,PRIMARY KEY (id))");

schedule.scheduleJob(" */5 * * * *", function () {
	connection.query("INSERT INTO latihan_schedule (waktu_sekarang) VALUES(now())");
	console.count("Record telah ditambah ke database");
});
