var sum = 0;
for (n = 2; n < process.argv.length; n++){
	sum = sum + parseInt(process.argv[n]);
}
console.log(sum);
