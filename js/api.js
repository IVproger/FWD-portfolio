console.log("Hello world!!!");

// Using URLSearchParams to pass the email into request
const email = 'i.golov@innopolis.university'; 
const param = new URLSearchParams();
param.append('email', email);

const button = document.getElementById("button_API");
button.addEventListener("click", async() =>{
    //  Workinh with two APIs to take the data
    const res = await fetch(`https://fwd.innopolis.university/api/hw2?${param}`);
    const comicId = await res.json();
   
    const res1 = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
    const data = await res1.json();
    console.log(data);

    // Cleaning up the data for loading the picture and sourse information
    const{alt} = data;
    const{safe_title} = data;
    const{img} = data;
    const{day} = data;
    const{month} = data;
    const{year} = data;const date = new Date(year, month, day);
    const dateOfLoading = date.toLocaleDateString();
   

    // Creating element and show the result in web page
    const image = document.createElement('img');
    image.src = img;
    image.alt = alt;

    const titleElement = document.createElement('h2');
    titleElement.innerText = safe_title;

    const dateElement = document.createElement('p');
    dateElement.innerText = "Date of loading: "+dateOfLoading;

    const container = document.getElementById('comic-container');
    container.appendChild(titleElement);
    container.appendChild(image);
    container.appendChild(dateElement);
})