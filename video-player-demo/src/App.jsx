import {useState} from "react";
import "./App.css";

export default function App(){
  const [play,setPlay]=useState(false);
  const [speed,setSpeed]=useState(1);
  const [quality,setQuality]=useState(false);

  return <div className="player">
    <img className="bg" src="/scene.jpg"/>
    <div className="mask"/>

    <header>
      <div className="left">
        <span className="back">‹</span>
        <b>美丽中国 第一集 锦绣华南</b>
        <span>56分钟</span>
        <button>详情 ＞</button>
      </div>
      <div className="right"><span>◎</span><span>▣</span><span>↗</span><span>⋯</span></div>
    </header>

    <div className="popup">
      <b>◎　瞬影</b>
      <p>保存前后3秒精彩片段</p>
    </div>

    <div className="control">
      <div className="timeline">
        <span>10:26</span><div className="bar"></div><span>45:33</span>
      </div>
      <div className="bottom">
        <span onClick={()=>setPlay(!play)}>{play?"Ⅱ":"▶"}</span>
        <div className="actions">
          <span onClick={()=>setSpeed(speed===2?1:speed+0.5)}>倍速 {speed}x</span>
          <span onClick={()=>setQuality(!quality)}>清晰度</span>
          <span>选集</span><span>⛶</span>
        </div>
      </div>
    </div>

    {quality && <div className="quality">1080P<br/>4K</div>}
  </div>
}
