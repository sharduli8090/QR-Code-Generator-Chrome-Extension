document.getElementById("btn").addEventListener("click", generate);


function generate(){
	let url = document.getElementById('inputB').value;
document.getElementById('inputB').value="";
document.getElementById('inputB').style.display='none';
document.getElementById('btn').style.display='none';

let arr = url.split("");
for(let i=0;i<arr.length;i++){
	if(arr[i]==':'){
		arr[i]='%3A';
	}
	if(arr[i]=='/'){
		arr[i]='%2F';
	}
}
let newURL ='https://codzz-qr-cods.p.rapidapi.com/getQrcode?type=url&value=';

for(let i=0;i<arr.length;i++){
	newURL += arr[i];
}

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

let temp;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
		temp = JSON.parse(this.responseText);
		console.log(temp.url);
		let img = document.createElement('img');
		img.src = temp.url;
		document.getElementById('main').appendChild(img);
		document.getElementById('downloader').href = temp.url;
		// document.getElementById('downloader').download = 'QRCodeCreativstan';
	}
});

xhr.open("GET", newURL);
xhr.setRequestHeader("X-RapidAPI-Key", "060a0e62b3msh3b4dceebd52177fp1e5142jsn9222f9a719e6");
xhr.setRequestHeader("X-RapidAPI-Host", "codzz-qr-cods.p.rapidapi.com");

xhr.send(data);

setTimeout(function(){
	document.getElementById('downloadBtn').style.display='block';
},3000);

}
// : %3A
// / %2F
