import logo from './logo.svg';
import picture1 from './assets/1.png';
import picture2 from './assets/2.png';
import picture3 from './assets/3.jpg';
import picture4 from './assets/4.jpg';
import picture5 from './assets/5.jpg';
import picture6 from './assets/6.jpg';
import picture7 from './assets/7.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container' >
          <ul>
            <li>
              Home
            </li>
            <li>
              News
            </li>
            <li>
              Contact
            </li>
            <li className='about'>
              About
            </li>
          </ul>
          <h1 className='title'>
            Abused Piglet Thrown Down At Animal Shelter Has Supernatural Transformation
          </h1>
          <div>
            <a href='https://reactjs.org' target={'_blank'}>
              <img src={picture1} className='picture picture-1' />
            </a>
            <div className='description'>
              You may never know why some people oppress animals or sometimes other people; it is good to know that merciful people are still existent. A story, that was shared by the Dodo speaks about the people at Sale Ranch Sanctuary, who saved a pigâs life. Cherry Blossom, the pig, was finally thrown at animal shelter in California which cares for dogs and cats in first place, before that she lived in harsh situations, writes thepetneeds.com
            </div>
          </div>

          <div>
            <a href='https://reactjs.org' target={'_blank'}>
              <img src={picture2} className='picture' />
            </a>
            <div className='description'>
              Cherry Blossom wasnât even expected to survive, but at least, she completely recovered.            </div>
          </div>

          <div>
            <a href='https://reactjs.org' target={'_blank'}>
              <img src={picture3} className='picture' />
            </a>
            <div className='description'>
              Cherry Blossom was abandoned at a shelter placed near Temecula, California. It is claimed by the man who dropped her off that she was lost. Jen Sale, CEO, and founder of Sale Ranch Sanctuary said that they suspected that she was owned and some developed situations caused this incorrect care. He also added that she had one of the most severe types of mange, which is sarcoptic mange. It can be fatal, if it is not treated.            </div>
          </div>

          <div>
            <a href='https://reactjs.org' target={'_blank'}>
              <img src={picture4} className='picture' />
            </a>
            <div className='description'>
              The shelter workers think that who really brought Cherry Blossom in was the rancher. He just dropped her off while she needed care. Jen Sale added. As the shelter doesnât care for pigs, they called the nearby farm sanctuary.            </div>
          </div>

          <div>
            <a href='https://reactjs.org' target={'_blank'}>
              <img src={picture5} className='picture' />
            </a>
            <div className='description'>
              Sale, who has worked with livestock for a long time, said that the pig lived in very harsh conditions, and also she had a lot of pain. But, she was very cute with us (Sale and her husband), we would come to medicine her, and she quickly knew that we were helping her. She is an ideal image for how loving and forgiving animals are. Cherry began receiving laser light therapy and healing cream rubs as a veterinarian advised. After 2 months she became better, and her hair started growing, and the skin is really good. Sale said that the pigâs personality is also growing, she plays with the ball, she loved her little clay hole, she also behaves with all.            </div>
          </div>

          <div>
            <a href='https://reactjs.org' target={'_blank'}>
              <img src={picture6} className='picture' />
            </a>
            <div className='description'>
              She plays with our dogs, she is a sweetheart, and all she wants is to get the attention of the people. Sale also added that weâre blessed and grateful as we were able to bring her and take care of her to be healthy.            </div>
          </div>

          <div>
            <a href='https://reactjs.org' target={'_blank'}>
              <img src={picture7} className='picture' />
            </a>
            <div className='description'>
              She plays with our dogs, she is a sweetheart, and all she wants is to get the attention of the people. Sale also added that weâre blessed and grateful as we were able to bring her and take care of her to be healthy.            </div>
          </div>

          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </div>
      </header>
    </div>
  );
}

export default App;
