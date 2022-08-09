
const xhumlabels = [];
const yhum = [];

chartIt();
getData();
async function chartIt(){
	await getData();

const ctx = document.getElementById('humidity').getContext('2d');


const humidity = new Chart(ctx, {

    type: 'line',
    data: {
        labels: xhumlabels,
        datasets: [{
            label: 'Humidity [%]',
            data: yhum,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',

      
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
      
            ],
            borderWidth: 1
        }
		]
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
	const response = await fetch("https://www.giampaolocarducci.tk/pages/temperature_ext.csv");
	const data = await response.text();
	
	const table = data.split('\n').slice(1);
	table.forEach(row =>{
		const columns = row.split(',');
		const year = columns [0];
		const temp = columns[1];
		const hum = columns[2];
		xhumlabels.push(year);
		yhum.push(hum);

		console.log(year,temp,hum);

				
});

}
console.log(xhumlabels);
console.log(yhum);








