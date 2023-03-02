import Carousel from "./components/Carousel";

function App() {

    const pictures = [
        {
            theme: 'nature',
            src: 'https://mcdn.wallpapersafari.com/medium/27/23/Itye3W.jpg'
        },
        {
            theme: 'nature',
            src: 'https://mcdn.wallpapersafari.com/medium/64/66/s0DCKZ.jpg'
        },
        {
            theme: 'universe',
            src: 'https://mcdn.wallpapersafari.com/medium/53/36/funlTU.jpg'
        },
        {
            theme: 'city',
            src: 'https://www.ece.cmu.edu/images/stock-images/smart-cities-500x300.png'
        },
        {
            theme: 'food',
            src: 'https://www.nuffieldhealth.com/local/39/19/b70d17f7427caba2b9ef7a1a50a8/c-users-rennisona-desktop-turmeric-500x300.jpg'
        }
    ]

    return (
        <div
            className="App">
            <Carousel images={pictures}/>
        </div>
    );
}

export default App;
