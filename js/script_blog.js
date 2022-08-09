





//// // // 
//// // // 
//// // // 
// TO USE lateral sliding menu!!!!!
// // // // 

// function openRightMenu() {
//   document.getElementById("rightMenu").style.display = "block";
// }

// function closeRightMenu() {
//   document.getElementById("rightMenu").style.display = "none";
// }

//// // // 
//// // // // 
//// // // // 
//// // // // 



// $(".accept").click(function(){
//    $(".cookie").hide();

 //   checkCookie();
  
//  });

//$(".acceptpartial").click(function(){
//    $(".cookie").hide();

//    checkCookie();
  
 // });


function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
  } else {
    user = prompt(" This website uses cookies. Further information on the types of cookies can be found under the respective categories. Individual cookies can also be activated there. The cookie settings can be adjusted at any time via the link in the footer of this website", "Enter user name or click on accept");
      if (user != "" && user != null) {
      setCookie("username", user, 365);
}
  }
}

const xlabels = [];
const ytemps = [];

chartIt();
getData();
async function chartIt(){
	await getData();
const ctx = document.getElementById('myChart').getContext('2d');
const xlabels=[];
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xlabels,
        datasets: [{
            label: 'External temperature',
            data: ytemps,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
      
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
      
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})
}


async function getData(){
	const response = await fetch('temperature_ext.csv');
	const data = await response.text();
	
	const table = data.split('\n').slice(1);
	table.forEach(row =>{
		const columns = row.split(',');
		const year = columns [0];
		xlabels.push(year);
		const temp = columns[1];
		ytemps.push(temp);
		console.log(year,temp);	
});
}
