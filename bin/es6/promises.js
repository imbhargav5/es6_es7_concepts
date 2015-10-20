export default function(){
	function timeout(duration = 0) {
	    return new Promise((resolve, reject) => {
	        setTimeout(resolve, duration);
	    });
	}

	var p = timeout(1000).then(() => {
	    return timeout(2000);
	}).then(() => {
	    throw new Error("hmm");
	}).catch(err => {
		console.log(err);
	    return Promise.all([timeout(100), timeout(200)]);
	});

	p.then(()=>{
		console.log("hey");
	});

}