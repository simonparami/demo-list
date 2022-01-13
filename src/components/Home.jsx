import React, { useState } from 'react';

function Home() {
  const Ttslink = 'https://demo.parami.ai:8301/tts?text=';
  const [text,setText] = useState('你好');
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="demo-list">
          <h1>TTS</h1>
          <a href={Ttslink+text}>https://demo.parami.ai:8301/tts?text={text}</a>
            <input type="text" property="" onChange={(e) => setText(e.target.value)} value={text} />
            {/* <button onClick={()=>jumpPath(Ttslink+text)}>submit</button> */}
            {/* onChange={(e) => setText(e.target.value)} */}


          <h2>Other Demo</h2>
          <div>
            <h3>ASR</h3>
            <a href="https://demo.parami.ai/echo" target='_blank' rel="noreferrer">https://demo.parami.ai/echo (mixed)</a>
            <a href="https://demo.parami.ai/echo" target='_blank' rel="noreferrer">https://demo.parami.ai/echo-hk (cantonese)</a>
            <a href="https://demo.parami.ai/echo" target='_blank' rel="noreferrer">https://demo.parami.ai/echo-tw (mandarin)</a>
            <a href="https://demo.parami.ai/echo" target='_blank' rel="noreferrer">https://demo.parami.ai/echo-en (english)</a>
          </div>
          <div>
            <h3>NLP</h3>
            <a href="https://demo.parami.ai/echo" target='_blank' rel="noreferrer">https://demo.parami.ai/meaning</a>
            <a href="https://demo.parami.ai/echo" target='_blank' rel="noreferrer">https://demo.parami.ai/data/collect/qa</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;