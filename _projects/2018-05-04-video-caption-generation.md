---
layout: project
title: Video Caption Generation
description: Given a short video, predict the caption 
summary: Given a short video, predict the caption 
category: Machine Learning
---

[Github Repo](https://github.com/vivianjeng/MLDS2018SPRING/tree/master/hw2)

## Task Description
- Given a short video, predict the corresponding caption that depicts the video

<p style="text-align:center;">
<img src="img33.png" alt="Hello!" style="width: 100%;" />
</p>

## Model

<p style="text-align:center;">
<img src="img34.png" alt="Hello!" style="width: 100%;" />
</p>

- encoder + decoder
- uni-directional LSTM
- `LuongAttention`: Allow model to peek at different sections of inputs at each decoding time step

<p style="text-align:center;">
<img src="img35.png" alt="Hello!" style="width: 100%;" />
</p>

- `ScheduledEmbeddingTrainingHelper`: To solve “exposure bias” problem, When training, we feed (groundtruth) or (last time step’s output) as input at odds

<p style="text-align:center;">
<img src="img36.png" alt="Hello!" style="width: 100%;" />
</p>

## Evaluation
- **BLEU@1**: 


$\text{BP=}\begin{cases}
            1 & \text{if } c > r \newline
            e^{1-r/c} & \text{if } c\leq r 
          \end{cases}$

$\text{Precision = correct words / candidate length}$

$\text{BLEU@1 = BP}\times \text{Precision}$

- Attention:


| |without attention model | `LuongAttention` | `BahdanauAttention` | 
|--|:--:|:--:|:--:|
| $\text{BLEU@1 score}$  | 0.5994 | 0.6059 | 0.5867 |

- Schedule sampling:


| |without schedule sampling | `ScheduledEmbeddingTrainingHelper` | 
|--|:--:|:--:|
| $\text{BLEU@1 score}$  | 0.5994 | 0.6478 |

- Attention + Schedule sampling:
     $\text{BLEU@1 score = 0.6510}$

