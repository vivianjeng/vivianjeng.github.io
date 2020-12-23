---
layout: project
title: Text sentiment classification
description: Use an RNN model to determine whether a post is positive or negative
summary: Use an RNN model to determine whether a post is positive or negative
category: Machine Learning
---

[Github Repo](https://github.com/vivianjeng/ML2017FALL/tree/master/hw4)

## Problem description: 
Use an RNN model to determine whether a Twitter post is positive or negative, label 1 means positive and label 0 means negative.

<p style="text-align:center;">
<img src="img25.png" alt="Hello!" style="width: 100%;" />
</p>

## Word embedding
- Machine learns the meaning of words from reading a lot of documents without supervision
- word embedding method used in the project: `word2vec` model

## Compare the scores between a bag of words (BOW) and a RNN model

||"today is a good day, but it is hot"|"today is hot, but it is a good day" |
|--|--|--|
|BOW|0.49039897| 0.48992708|
|RNN|0.31660247|0.94093776|

- BOW only cares about the presence of the given vocabularies but not the order
- The score of the RNN model depends more on the order

## Semi-supervised learning
- An approach to machine learning that combines a small amount of labeled texts with a large amount of unlabeled texts during training


## Result
- Achieved 262/344 (Top $77\%$) rank in the Kaggle competition