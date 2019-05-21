(function () {
    'use strict';

    {
        const btn = document.querySelector('button');
        const speech = new webkitSpeechRecognition(); // 音声認識のためのオブジェクト取得
        speech.lang = 'en-US'; // 音声認識の言語設定

        // ボタンを押した時の処理
        btn.addEventListener('click', () => {
            // console.log('button clicked!');
            btn.disabled = true; // 二度押ししても動かないようにする
            speech.start(); // 音声認識の開始
        });

        speech.onresult = (e) => {
            // console.log(e);
            speech.stop(); // 音声認識の終了

            if (e.results[0].isFinal) {
                console.log(e.results[0][0].transcript); // 認識結果の表示
                document.body.style.background = e.results[0][0].transcript; // 背景色の変更
            };
        };

        // 音声認識の連続起動
        speech.onend = () => {
            speech.start();
        };

        // 認識中のボタン表示
        speech.onsoundstart = () => {
            btn.textContent = 'Processing...';
        };

        // 認識後のボタン表示
        speech.onsoundend = () => {
            btn.textContent = 'Waiting...';
        };        
    }
})();