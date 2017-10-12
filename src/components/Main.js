require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ImgFigure from './ImgFigure.js'

// 获取图片相关数据
let imageData = require('../data/imageDatas.json');

let imgData = (function getImageUrl(imageDataArr) {
  let imgDatas = [];
  imageDataArr.forEach((item) => {
    let singleImage = item;
    singleImage.imageUrl = require('../images/' + singleImage.fileName);
    imgDatas.push(singleImage);
  });
  return imgDatas;
})(imageData);

class AppComponent extends React.Component {
  render() {
    let controllerUnits = [];
    let imgFigures = [];
    imgData.forEach((value) => {
      imgFigures.push(<ImgFigure data={value}/>);
    });
    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
