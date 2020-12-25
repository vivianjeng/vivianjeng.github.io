---
layout: project
title: Anime Generative Model
description: Use a GAN model to generate anime characters
summary: Use a GAN model to generate anime characters
category: Machine Learning
---

[Github Repo](https://github.com/vivianjeng/MLDS2018SPRING/tree/master/hw3)

## Task Description
- Use a GAN model to generate random anime characters

<p style="text-align:center;">
<img src="img37.png" alt="Hello!" style="width: 80%;" />
</p>

## GAN

<p style="text-align:center;">
<img src="img38.png" alt="Hello!" style="width: 80%;" />
</p>

- **Generator**
  - `Conv2DTranspose`
  - `BatchNormalization`
  - `LeakyReLU`
- **Discriminator**
  - `Conv2D`
  - `BatchNormalization`
  - `LeakyReLU`

## Result

<p style="text-align:center;">
<img src="img41.jpg" alt="Hello!" style="width: 80%;" />
</p>


## Conditional GAN

- Use a conditional GAN model to generate a given text anime characters

<p style="text-align:center;">
<img src="img39.png" alt="Hello!" style="width: 100%;" />
</p>

<p style="text-align:center;">
<img src="img40.png" alt="Hello!" style="width: 100%;" />
</p>

- **Generator**
  - input: 128-dim noise, 12-dim (one-hot) hair color, 11-dim (one-hot) eyes color
  - 16 * residual block (input=image, output=`bn(conv(relu(bn(conv(image, 64, 3))), 64, 3))+image`)
  - 3 * upsampler (input=image, output = `relu(bn(pixel_shuffler(conv(image, 256, 3))))`)
- **Discriminator**
  - `conv`
  - `leaky_relu`
  - residual block = (input=image, output =`leaky_relu(seperable_conv(leaky_relu(seperable_conv(image)))+image)`)

## Result

<p style="text-align:center;">
<img src="img42.png" alt="Hello!" style="width: 100%;" />
</p>

