// pegando dados do html

document.querySelector('.busca').addEventListener('submit', async (event)=>
{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input.length > 0)
    {
        showWarning('Carregando...');
        
        let chave = 'c7968266c8c6dc6ca6f8943ca1a23034';
        let chave2 = 'd06cdb298fafc83c520d5ab677fc477e';

        let url = `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${encodeURI(input)}&appid=c7968266c8c6dc6ca6f8943ca1a23034&units=metric&lang=pt_br`;
        
        let response = await fetch(url);
        let json = await response.json();

        console.log(json);
    }
})

function showWarning(msg) 
{
    document.querySelector('.aviso').innerHTML = msg;    
}