import { useState } from 'react'
import './App.css'
import Carmy from './assets/16plus.png'
import Cjoa from './assets/17promax.png'
import Curs from './assets/15promax.png'
import Slider1 from './assets/14.png'
import Slider2 from './assets/15.png'
import Slider3 from './assets/16.jpg'
import Slider4 from './assets/17.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Slider1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider4} alt="Slide 4" />
            </SwiperSlide>      
          </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Cjoa} alt="" className="img-card" />
              <h2 className="titulo-card">iPhone 17 Pro Max</h2>
              <p className="desc">Representa o ápice da linha, combinando sofisticação, exclusividade e desempenho elevado, ideal para quem busca uma experiência tecnológica de ponta.</p>
              <p className="preco">R$ 15.529,36</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (1.309)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">iPhone 16 Plus</h2>
              <p className="desc">Apresenta-se como uma escolha equilibrada, com tela ampla e usabilidade confortável, adequado para quem prioriza praticidade sem abrir mão de qualidade.</p>
              <p className="preco">R$ 9.199,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (956)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">iPhone 15 Pro Max</h2>
              <p className="desc">Destaca-se pelo refinamento e pela potência, unindo design premium e alto desempenho em um dispositivo elegante.</p>
              <p className="preco">R$ 11.110,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (853)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/_-AS5DtDeqs?autoplay=1&mute=1&controls=0&loop=1&playlist=_-AS5DtDeqs&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>
        
        <footer>

          <img src="" alt="" className="logo-footer" />

          <div className="social-icons">
            <div className="icon">
              <img src="" alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src="" alt="" id="discord" />
            </div>
            <div className="icon">
              <img src="" alt="" id="x" />
            </div>
            <div className="icon">
              <img src="" alt="" id="youtube" />
            </div>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App
