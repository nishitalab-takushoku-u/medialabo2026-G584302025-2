// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  kaisu +=1;
  p = document.querySelector('span#kaisu');
  p.textContent = kaisu;
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新

  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  let i = document.querySelector('input[name="kazu"]');
  i.getAttribute('name');
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso =Number(i.value);
  let i2 = document.querySelector('span#yosou2');
  i2.textContent = yoso ;
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
  p2 = document.querySelector('p#result');
  if(kaisu<3){
    if(kotae === yoso){
      p2.textContent = '正解です。おめでとう!';
    }else if(kotae < yoso){
      p2.textContent = 'まちがい。答えはもっと小さいですよ。';
    }else if(kotae > yoso){
      p2.textContent = 'まちがい。答えはもっと大きいですよ。';
    }
  }else if(kaisu === 3){
    if(kotae === yoso){
      p2.textContent = '正解です。おめでとう!';
    }else{
      p2.textContent = 'まちがい。残念でした、答えは '+ kotae +'です。';
    }
  }else{
    p2.textContent = '答えは '+ kotae +' でした．すでにゲームは終わっています';
  }
  // ここまで: 正解判定する
}
// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
b = document.querySelector('button#yosou');
b.addEventListener('click',hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
