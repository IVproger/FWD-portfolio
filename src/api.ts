import moment from 'moment';

interface ComicData {
    alt: string;
    safe_title: string;
    img: string;
    day: number;
    month: number;
    year: number;
  }
  
  const email = 'i.golov@innopolis.university';
  const param = new URLSearchParams();
  param.append('email', email);
  
  const button = document.getElementById("button_API") as HTMLButtonElement;
  button.addEventListener("click", async () => {
    try {
      const res = await fetch(`https://fwd.innopolis.university/api/hw2?${param}`);
      const comicId = await res.json();
  
      const res1 = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
      const data: ComicData = await res1.json();
    
      const { alt, safe_title, img, day, month, year } = data;
      const date = new Date(year, month, day);
      const dateOfLoading = date.toLocaleDateString();
      const timeAgo = moment(date).fromNow();


      const image = document.createElement('img') as HTMLImageElement;
      image.src = img;
      image.alt = alt;

  
      const titleElement = document.createElement('h2') as HTMLHeadingElement;
      titleElement.innerText = safe_title;
  
      const dateElement = document.createElement('p') as HTMLParagraphElement;
      dateElement.innerText = `Date of loading: ${dateOfLoading} (${timeAgo})`;
  
      const container = document.getElementById('comic-container') as HTMLElement;
      if (container != null) {
        container.appendChild(titleElement);
        container.appendChild(image);
        container.appendChild(dateElement);
      } else {
        console.log("Error, container undefined");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  });
  