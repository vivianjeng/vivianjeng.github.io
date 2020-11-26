---
layout: project
title: Image sentiment classification
description: Use a CNN model to classify 7 types of sentiment
summary: Use a CNN model to classify 7 types of sentiment
category: Machine Learning
---

[Github Repo](https://github.com/vivianjeng/ML2017FALL/tree/master/hw3)

## Problem description: 
Use a CNN model to classify 7 types of sentiment, which are anger, fear, disgust, surprise, happiness, sadness, and neutral

<p style="text-align:center;">
<img src="img20.PNG" alt="Hello!" style="width: 100%;" />
</p>

## CNN model
- `Conv2D`: This layer creates a convolution kernel that is convolved with the layer input to produce a tensor of outputs
- `Activation('relu')`: Applies the rectified linear unit activation function $max(x, 0)$
- `ZeroPadding2D`: Zero-padding layer for 2D input
- `MaxPooling2D`: Max pooling operation for 2D spatial data
<p style="text-align:center;">
<img src="img21.PNG" alt="Hello!" style="width: 100%;" />
</p>


## Training and Testing Accuracy in a CNN model
<p style="text-align:center;">
<img src="img22.PNG" alt="Hello!" style="width: 80%;" />
</p>

## Compare the accuracy between a DNN and a CNN model
- A CNN model has better performance in feature detection of images than a DNN model.
<p style="text-align:center;">
<img src="img23.PNG" alt="Hello!" style="width: 80%;" />
</p>

## Confusion matrix between each class
- "Sad" is easily misunderstood as "neutral"
- "Digest" is easily misunderstood as "angry"
- "Fear" is easily misunderstood as "sad"
<p style="text-align:center;">
<img src="img24.PNG" alt="Hello!" style="width: 80%;" />
</p>


## Result
- Achieved 161/366 (Top $44\%$) rank in the Kaggle competition