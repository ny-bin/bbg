---
title: 'React-Slick使ってみた'
date: '2020-05-04'
img: 'blogIcon/piece.svg'
---

## react-slick とは？？

スライダー&カルーセルを実装するモジュール
スライダー&カルーセル??ってなる人もいると思うのでサンプル張っておきます

![image](https://firebasestorage.googleapis.com/v0/b/qin-salon-prod-post-images/o/9Gai9c7YUs.gif?alt=media&token=e16e4f94-bbd9-4907-8860-91e4013e8f42)

元々、jQuery のプラグインとして提供されていたものをモジュールにしたものだそう
スライダーカルーセルを実装するその他の選択肢としては Swiper というものもありましたが、実装の手軽さから react-slick で行いました。

実装自体は簡単ですが、スタイルの適用で少しはまったところがあったのでメモとして置いておきます。

## 導入

```
yarn add react-slick
or
npm install react-slick --save
```

CSS は別途「slick-carousel」というものを導入して適用しないとスタイルが変更されません。

## 実装

実際に実装したものを記載。
公式のサンプルもたくさんあったので張っておきます。
https://react-slick.neostack.com/docs/example/simple-slider

```
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SimpleProfile } from './simple-profile';
import { SimpleBlog } from './simple-blog';
export const Slider = () => {
  const settings = {
    dots: true,
    fade:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slider = {
    background: 'rgb(70,86,99)',
    borderRadius: '30px',
    marginRight:auto,
    marginLeft:auto,
    width:85%
  };
  return (
    <div className="pb-12">
      <Slider style={slider} {...settings}>
        <div>
          <SimpleProfile />
        </div>
        <div>
          <SimpleBlog />
        </div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
      </Slider>
    </div>
  );
};
```

const settings={}で定義している部分でスライダーの設定項目を自分で好きなように調整でき、
その下の const slider={}でスタイルを設定しています。
このとき、先ほども述べたように
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
この二つを import しないとスタイルが適用されません。

また、今回は width でサイズ指定して、位置も中央に寄せていますがデフォルトではなぜかスクリーンをはみ出てしまっていたのでこのスタイルにしています。
![image](https://firebasestorage.googleapis.com/v0/b/qin-salon-prod-post-images/o/ZOFsFGMvBx.png?alt=media&token=f4764e2f-f576-439c-a084-e65e94d8d7b7)

## 結果

上記の実装でできたものがこちら
![image](https://firebasestorage.googleapis.com/v0/b/qin-salon-prod-post-images/o/OEzSv5OOVm.gif?alt=media&token=daec6fd7-d7fa-4ffc-8786-ca57ed33f178)

レスポンシブにも対応しているので中身のカードもうまく対応させておけば簡単に実装できました。
ぜひ使ってみてください～！！
