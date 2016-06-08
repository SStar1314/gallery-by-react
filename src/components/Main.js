require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//let yeomanImage = require('../images/yeoman.png');

// 获取图片相关的数据
var imageData = require('../data/imageData.json');
// 将图片名信息转成图片URL路径信息
function generatorImageURL(imageDataArr) {
	for (var i = 0, j = imageDataArr.length; i < j; i ++) {
		var singleImageData = imageDataArr[i];
		singleImageData.imageURL = require('../images' + singleImageData.fileName);
		imageDataArr[i] = singleImageData;
	}
	return imageDataArr;
}

imageData = generatorImageURL(imageData);

class AppComponent extends React.Component {
  render() {
    return (
    	<section className="stage">
    		<section className="img-sec">

    		</section>
    		<nav className="controller-nav">
    		</nav>
    	</section>

      
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
