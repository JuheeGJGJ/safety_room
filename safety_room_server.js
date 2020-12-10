var express = require('express');
var app = express();
fs = require('fs');

mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'mypassword',
    database: 'mydb'
})
connection.connect();

app.get ('/safety_room/graph', function (req, res) {
	console.log ("got app.get('/graph')");
	
	var html = fs.readFile('./graph.html', function (err, html) {
		html = " "+ html
		console.log('read file');

		if (req.query.view == "table1") {
			console.log ("table1 distance graph\n");

			var qstr = 'select * from safety_room_t1';
			connection.query(qstr, function(err, rows, cols) {
				if (err) {
					console.error (err);
					processs.exit();
				}

				var data = "";
				var comma = "";
				var time;
				for (var i=0; i< rows.length ; i++) {
					r = rows[i];
					year = r.time.getYear() + 1900;
					hour = r.time.getHours() + 9;
					data += comma + "[new Date (" + year + "," + r.time.getMonth() + "," + r.time.getDate() + "," + hour + "," + r.time.getMinutes() + "," + r.time.getSeconds() + "),"+ r.action + ","+ r.distance1 + "," + r.distance2 + "," +r.distance3 +"]";
					comma = ",";
				}

				var header = "['Date/Time', 'Action','Distance1', 'Distance2', 'Distance3']";
				html = html.replace("<%HEADER%>", header);
				html = html.replace("<%DATA%>", data);

				res.writeHeader(200, {"Content-Type": "text/html"});
				res.write(html);
				res.end();
			});
		} 
		else if (req.query.view == "table2") {
			console.log ("table2 distance graph\n");

			var qstr = 'select * from safety_room_t2';
			connection.query(qstr, function(err, rows, cols) {
				if (err) {
					console.error (err);
					processs.exit();
				}

				var data = "";
				var comma = "";
				var time;
				for (var i=0; i< rows.length ; i++) {
					r = rows[i];
					year = r.time.getYear() + 1900;
					hour = r.time.getHours() + 9;
					data += comma + "[new Date (" + year + "," + r.time.getMonth() + "," + r.time.getDate() + "," + hour + "," + r.time.getMinutes() + "," + r.time.getSeconds() + "),"+ r.action + ","+ r.distance1 + "," + r.distance2 + "," +r.distance3 +"]";
					comma = ",";
				}

				var header = "['Date/Time', 'Action','Distance1', 'Distance2', 'Distance3']";
				html = html.replace("<%HEADER%>", header);
				html = html.replace("<%DATA%>", data);

				res.writeHeader(200, {"Content-Type": "text/html"});
				res.write(html);
				res.end();
			});
		} 
		else if (req.query.view == "table3") {
			console.log ("table3 distance graph\n");

			var qstr = 'select * from safety_room_t3';
			connection.query(qstr, function(err, rows, cols) {
				if (err) {
					console.error (err);
					processs.exit();
				}

				var data = "";
				var comma = "";
				var time;
				for (var i=0; i< rows.length ; i++) {
					r = rows[i];
					year = r.time.getYear() + 1900;
					hour = r.time.getHours() + 9;
					data += comma + "[new Date (" + year + "," + r.time.getMonth() + "," + r.time.getDate() + "," + hour + "," + r.time.getMinutes() + "," + r.time.getSeconds() + "),"+ r.action + ","+ r.distance1 + "," + r.distance2 + "," +r.distance3 +"]";
					comma = ",";
				}

				var header = "['Date/Time', 'Action','Distance1', 'Distance2', 'Distance3']";
				html = html.replace("<%HEADER%>", header);
				html = html.replace("<%DATA%>", data);

				res.writeHeader(200, {"Content-Type": "text/html"});
				res.write(html);
				res.end();
			});
		} 
		else if (req.query.view == "table4") {
			console.log ("table4 distance graph\n");

			var qstr = 'select * from safety_room_t4';
			connection.query(qstr, function(err, rows, cols) {
				if (err) {
					console.error (err);
					processs.exit();
				}

				var data = "";
				var comma = "";
				var time;
				for (var i=0; i< rows.length ; i++) {
					r = rows[i];
					year = r.time.getYear() + 1900;
					hour = r.time.getHours() + 9;
					data += comma + "[new Date (" + year + "," + r.time.getMonth() + "," + r.time.getDate() + "," + hour + "," + r.time.getMinutes() + "," + r.time.getSeconds() + "),"+ r.action + ","+ r.distance1 + "," + r.distance2 + "," +r.distance3 +"]";
					comma = ",";
				}

				var header = "['Date/Time', 'Action','Distance1', 'Distance2', 'Distance3']";
				html = html.replace("<%HEADER%>", header);
				html = html.replace("<%DATA%>", data);

				res.writeHeader(200, {"Content-Type": "text/html"});
				res.write(html);
				res.end();
			});
		} 
		else if (req.query.view == "table5") {
			console.log ("table5 distance graph\n");

			var qstr = 'select * from safety_room_t5';
			connection.query(qstr, function(err, rows, cols) {
				if (err) {
					console.error (err);
					processs.exit();
				}

				var data = "";
				var comma = "";
				var time;
				for (var i=0; i< rows.length ; i++) {
					r = rows[i];
					year = r.time.getYear() + 1900;
					hour = r.time.getHours() + 9;
					data += comma + "[new Date (" + year + "," + r.time.getMonth() + "," + r.time.getDate() + "," + hour + "," + r.time.getMinutes() + "," + r.time.getSeconds() + "),"+ r.action + ","+ r.distance1 + "," + r.distance2 + "," +r.distance3 +"]";
					comma = ",";
				}

				var header = "['Date/Time', 'Action','Distance1', 'Distance2', 'Distance3']";
				html = html.replace("<%HEADER%>", header);
				html = html.replace("<%DATA%>", data);

				res.writeHeader(200, {"Content-Type": "text/html"});
				res.write(html);
				res.end();
			});
		}
	});
});

app.get ('/safety_room/update', function (req, res) {
	r = req.query;
	console.log (`update : ${JSON.stringify(r)}`);

	table = r.table;
	action = r.action;
	distance1 = r.distance1;
	distance2 = r.distance2;
	distance3 = r.distance3;

	if (table == "table1") {
		connection.query (`insert into safety_room_t1 (action, distance1, distance2, distance3) values (${action}, ${distance1}, ${distance2}, ${distance3})`, function (err, rows, cols) {
			if (err) {
				console.error (err);
				process.exit();
			}
			//else console.log (`current distance1 : ${distance1}`);
		});
		
		now = new Date();
		time = now.getFullYear() + "-" + (1 + now.getMonth()) + "-" +  now.getDate() + " " + (9 + now.getHours()) + " : " + now.getMinutes();
		res.send (`action = ${action} distance1 = ${distance1} distance2=${distance2} distance3 = ${distance3} at time = ${time}`);
	}
	else if (table == "table2") {
		connection.query (`insert into safety_room_t2 (action, distance1, distance2, distance3) values (${action}, ${distance1}, ${distance2}, ${distance3})`, function (err, rows, cols) {
			if (err) {
				console.error (err);
				process.exit();
			}
			//else console.log (`current distance1 : ${distance1}`);
		});
		
		now = new Date();
		time = now.getFullYear() + "-" + (1 + now.getMonth()) + "-" +  now.getDate() + " " + (9 + now.getHours()) + " : " + now.getMinutes();
		res.send (`action = ${action} distance1 = ${distance1} distance2=${distance2} distance3 = ${distance3} at time = ${time}`);
	}
	else if (table == "table3") {	
		connection.query (`insert into safety_room_t3 (action, distance1, distance2, distance3) values (${action}, ${distance1}, ${distance2}, ${distance3})`, function (err, rows, cols) {
			if (err) {
				console.error (err);
				process.exit();
			}
			//else console.log (`current distance1 : ${distance1}`);
		});
		
		now = new Date();
		time = now.getFullYear() + "-" + (1 + now.getMonth()) + "-" +  now.getDate() + " " + (9 + now.getHours()) + " : " + now.getMinutes();
		res.send (`action = ${action} distance1 = ${distance1} distance2=${distance2} distance3 = ${distance3} at time = ${time}`);
	}
	else if (table == "table4") {
		connection.query (`insert into safety_room_t4 (action, distance1, distance2, distance3) values (${action}, ${distance1}, ${distance2}, ${distance3})`, function (err, rows, cols) {
			if (err) {
				console.error (err);
				process.exit();
			}
			//else console.log (`current distance1 : ${distance1}`);
		});
		
		now = new Date();
		time = now.getFullYear() + "-" + (1 + now.getMonth()) + "-" +  now.getDate() + " " + (9 + now.getHours()) + " : " + now.getMinutes();
		res.send (`action = ${action} distance1 = ${distance1} distance2=${distance2} distance3 = ${distance3} at time = ${time}`);
	}
	else if (table == "table5") {
		connection.query (`insert into safety_room_t5 (action, distance1, distance2, distance3) values (${action}, ${distance1}, ${distance2}, ${distance3})`, function (err, rows, cols) {
			if (err) {
				console.error (err);
				process.exit();
			}
			//else console.log (`current distance1 : ${distance1}`);
		});
		
		now = new Date();
		time = now.getFullYear() + "-" + (1 + now.getMonth()) + "-" +  now.getDate() + " " + (9 + now.getHours()) + " : " + now.getMinutes();
		res.send (`action = ${action} distance1 = ${distance1} distance2=${distance2} distance3 = ${distance3} at time = ${time}`);
	}
});


app.get ('/safety_room/data', function (req, res) {
	r = req.query;
	table = r.table;
	
	if (table == "table1") {
		var qstr = 'select * from safety_room_t1 order by time desc';
	//	where time >= NOW() - INTERVAL 24 HOUR order by time desc';
		connection.query(qstr, function(err, rows, cols) {
			if (err) {
				console.error (err);
				process.exit();
			}

			console.log (rows.length + " records");
			html = "";

			for (var i=0; i< rows.length ; i++) {
				r = rows[i];
				r.time.setHours (r.time.getHours() + 9);
				html += JSON.stringify (r) + '<br>';
			}

			res.send (html);
		});
	}
	else if (table == "table2") {
		var qstr = 'select * from safety_room_t2 order by time desc';
	//	where time >= NOW() - INTERVAL 24 HOUR order by time desc';
		connection.query(qstr, function(err, rows, cols) {
			if (err) {
				console.error (err);
				process.exit();
			}

			console.log (rows.length + " records");
			html = "";

			for (var i=0; i< rows.length ; i++) {
				r = rows[i];
				r.time.setHours (r.time.getHours() + 9);
				html += JSON.stringify (r) + '<br>';
			}

			res.send (html);
		});
	}
	else if (table == "table3") {
		var qstr = 'select * from safety_room_t3 order by time desc';
	//	where time >= NOW() - INTERVAL 24 HOUR order by time desc';
		connection.query(qstr, function(err, rows, cols) {
			if (err) {
				console.error (err);
				process.exit();
			}

			console.log (rows.length + " records");
			html = "";

			for (var i=0; i< rows.length ; i++) {
				r = rows[i];
				r.time.setHours (r.time.getHours() + 9);
				html += JSON.stringify (r) + '<br>';
			}

			res.send (html);
		});
	}
	else if (table == "table4") {
		var qstr = 'select * from safety_room_t4 order by time desc';
	//	where time >= NOW() - INTERVAL 24 HOUR order by time desc';
		connection.query(qstr, function(err, rows, cols) {
			if (err) {
				console.error (err);
				process.exit();
			}

			console.log (rows.length + " records");
			html = "";

			for (var i=0; i< rows.length ; i++) {
				r = rows[i];
				r.time.setHours (r.time.getHours() + 9);
				html += JSON.stringify (r) + '<br>';
			}

			res.send (html);
		});
	}
	else if (table == "table5") {
		var qstr = 'select * from safety_room_t5 order by time desc';
	//	where time >= NOW() - INTERVAL 24 HOUR order by time desc';
		connection.query(qstr, function(err, rows, cols) {
			if (err) {
				console.error (err);
				process.exit();
			}

			console.log (rows.length + " records");
			html = "";

			for (var i=0; i< rows.length ; i++) {
				r = rows[i];
				r.time.setHours (r.time.getHours() + 9);
				html += JSON.stringify (r) + '<br>';
			}

			res.send (html);
		});
	}
});

var server = app.listen (8000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log ('listening at http://%s:%s', host, port);
});
