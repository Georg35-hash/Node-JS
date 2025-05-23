const fs = require('fs')

fs.mkdir('myFolder', err => {
	if (!err) {
		console.log('directory created');
	} else {
		console.log(err);
	}
});

fs.rmdir('myFolder', data => {
	if (!data) {
		console.log('directory removed');
	} else {
		console.log(data);
	}
});
