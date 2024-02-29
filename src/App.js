import './App.css';
import pika1 from "./assets/1-1.png"
import pika2 from "./assets/2-1.png"

function App() {
  return (
    <div className="App">
      <div class="card">
		    <div class="circle"></div>
		    <div class="content">
			    <h2>Pikapika~~~</h2>
			    <p>皮卡丘，是日本任天堂公司发行的掌机游戏系列《宝可梦》中登场宝可梦的一种，首次出现于第一世代游戏《宝可梦红·绿》。脸颊两边有着小小的电力袋。遇到危险时就会放电。</p>
			    <a href="https://baike.baidu.com/item/%E7%9A%AE%E5%8D%A1%E4%B8%98/931437">了解更多</a>
		    </div>
		    <img src={pika1} alt="pika1" />
	    </div>
	    <div class="card">
		    <div class="circle"></div>
		    <div class="content">
			    <h2>Kirakira~~~</h2>
			    <p>皮卡丘由Game Freak的西田敦子设计，并由杉森建定案，皮卡丘的形象是为数不多的几个与众不同的宝可梦形象之一。开发者增田顺一指出为了同时吸引日本观众和美国观众。</p>
			    <a href="https://baike.baidu.com/item/%E7%9A%AE%E5%8D%A1%E4%B8%98/931437">了解更多</a>
		    </div>
		    <img src={pika2} alt="pika2" />
	    </div>
    </div>
  );
}

export default App;
