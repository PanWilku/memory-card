type ImageInfo = {
    id: string;
    url: string;
  }


export default function fetchImages(setImgArr: React.Dispatch<React.SetStateAction<ImageInfo[] | null>>): void {
    const apiKey = import.meta.env.VITE_APP_CAT_API_KEY
    fetch("https://api.thecatapi.com/v1/images/search?limit=20", {
      headers: { "x-api-key": apiKey }
    })
      .then((response) => response.json())
      .then((response) => {
        const data = response.map((item: any) => ({
          id: item.id,
          url: item.url
        }));
        setImgArr(data);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      });
  }