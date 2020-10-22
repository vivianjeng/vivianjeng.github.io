---
layout: project
title: Unity games with Gesture Recognition
description: Use Unity and Leap motion to build a racing game with gesture recognition
summary: Use Leap motion to play racing game with hands
category: Human Computer Interaction
---

[Github Repo](https://github.com/vivianjeng/line-fresh-chatbot)

*2018SS Virtual Reality Final Project*

## Introduction
We implemented a gesture recognition scheme in an existed [Unity game](/projects/unity-games), to improve user experience and make this game more challenging

## Functionality
- **Racing game:** A 2v2 racing game. there are some objects on the road, they randomly cause cars to speed up, slow down, jump, or rotate.
- **Guesture Recognition:** In Unity, [Leap Motion](https://developer.leapmotion.com/) would detect hand and finger motions as input. Because Leap Motion could differentiate *open palm* and *close fist* better than other guestures, we chose *right hand fist as speedup, right open hand as slowdown; left hand fist as right-turn, left open hand as left-turn*.

![img12](img12.png)

## Difficulties
- Hands have to be close enough to Leap Motion device, and there should not be any other object in front of Leap Motion
- The delay between guestures and reactions of cars is not negligible

## Future work
- Create a more intuitive way to control cars
- If combining with Google VR Cardboard, we might have better user experience in VR games