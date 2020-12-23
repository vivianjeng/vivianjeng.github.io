---
layout: project
title: Unsupervised Learning
description: Unsupervised Learning and Dimension Reduction
summary: Unsupervised Learning and Dimension Reduction
category: Machine Learning
---

[Github Repo](https://github.com/vivianjeng/ML2017FALL/tree/master/hw6)

## Principal Components Analysis (PCA) of colored faces
- The mean value of all 415 faces
<p style="text-align:center;">
<img src="img27.png" alt="Hello!" style="width: 100%;" />
</p>

- Use `numpy.linalg.svd` and `np.linalg.eig` to implement PCA
- The first four eigenfaces of the first four largest eigenvalues

<p style="text-align:center;">
<img src="img28.png" alt="Hello!" style="width: 100%;" />
</p>


## Visualization of Chinese word embedding
- Use `gensim` to implement word embedding
- Use `TSNE` to implement dimension reduction
- Plot the result 2D figure

<p style="text-align:center;">
<img src="img29.png" alt="Hello!" style="width: 100%;" />
</p>

## Image clustering
- Determine if two images come from the same dataset
- The result of different feature extraction methods

||Public set score|Private set score|
    |--|--|--|
    |TSNE to all vectors to 2 dimension|0.02954| 0.02910|
    |Autoencoder+DNN 128 64 epochs = 10, k-means|0.52631|0.52531|
    |Autoencoder+DNN 128 64 epochs = 200, k-means|0.96402|0.96237|
    
$$F1-\text{score}=2\cdot \frac{p\cdot r}{p+r}$$ 

where $p=\frac{tp}{tp+fp}$, $r=\frac{tp}{tp+fn}$ 
    
||prediction positive|prediction negative|
    |--|--|--|
    |ground true positive|true positive (tp)| false negative (fn)|
    |ground true negative|false positive (fp)|true negative (tn)|

- Visualize all features with their labels
<p style="text-align:center;">
<img src="img30.png" alt="Hello!" style="width: 100%;" />
</p>

## Result
- Achieved 225/333 (Top $68\%$) rank in the Kaggle competition