---
layout: project
title: Reinforcement Learning
description: Policy gradient, Deep Q learning, Actor-Critic
summary: Policy gradient, Deep Q learning, Actor-Critic
category: Machine Learning
---

[Github Repo](https://github.com/vivianjeng/MLDS2018SPRING/tree/master/hw4)

## Policy gradient
- Play [an Atari game (Pong)](https://gym.openai.com/envs/Pong-v0/) using deep reinforcement learning 

<p style="text-align:center;">
<img src="img43.gif" alt="Hello!" style="width: 80%;" />
</p>

- **Algorithm:**
  - Update per step $t$: $\theta \leftarrow \theta+\alpha\nabla_\theta \log \pi_\theta (s_t, a_t) v_t$<br/>

    $s_t$: state, $a_t$: action, $v_t$: long-term value, $\pi_\theta(s,a) = P[a\|s, \theta]$ 

- **Result:** Baseline: 3 points

<p style="text-align:center;">
<img src="img44.png" alt="Hello!" style="width: 80%;" />
</p>

## Deep Q Learning
- Environment: [Breakout](https://gym.openai.com/envs/Breakout-v0/)

<p style="text-align:center;">
<img src="img45.gif" alt="Hello!" style="width: 80%;" />
</p>

- **Algorithm:**
  1. Take some action $a_i$ and observe $(s_i, a_i, s_i', r_i)$, add it to $\mathcal{B}$ (replay buffer)
  2. Sample mini-batch $\{s_j, a_j, s_j', r_j\}$ from $\mathcal{B}$ uniformly
  3. Compute $y_j = r\_j+\gamma\text{max}\_{a_j'}Q_{\phi'}(s_j',a_j')$ using *target* network $Q_{\phi'}$
  4. $\phi\leftarrow\phi-\alpha\sum_j\frac{dQ_{\phi'}}{d\phi}(s_j, a_j)(Q_\phi (s_j, a_j)-y_j)$
  5. Update $\phi'$: copy $\phi$ every $N$ steps

- **Result:** Baseline: 40 points

<p style="text-align:center;">
<img src="img46.png" alt="Hello!" style="width: 80%;" />
</p>

- Comparison between DQN and DDQN

<p style="text-align:center;">
<img src="img47.png" alt="Hello!" style="width: 80%;" />
</p>

## Actor-Critic
- Environment: Pong, Breakout
- **Algorithm:**
  1. Take an action $a\~\pi_\theta(a\|s)$, get $(s,a,s',r)$
  2. Update $\hat{V}_\phi^{\pi}$ using target $r+\gamma\hat{V}\_\phi^{\pi}(s')$
  3. Evaluate $\hat{A}^{\pi}(s,a)=r(s,a)+\gamma\hat{V}\_\phi^{\pi}(s')-\hat{V}\_\phi^{\pi}(s)$
  4. $\nabla_\theta J(\theta)\approx \nabla_\theta\log \pi_\theta (a\|s) \hat{A}^\pi (s,a)$
  5. $\theta\leftarrow \theta + \alpha \nabla_\theta J(\theta)$

- **Result:**
  - A2C: Pong 
  <p style="text-align:center;">
<img src="img48.png" alt="Hello!" style="width: 80%;" />
  </p>

  - A2C: Breakout 
  <p style="text-align:center;">
<img src="img49.png" alt="Hello!" style="width: 80%;" />
  </p>

  - ACKTR: Pong
  <p style="text-align:center;">
<img src="img50.png" alt="Hello!" style="width: 80%;" />
  </p>

  - ACKTR: Breakout
  <p style="text-align:center;">
<img src="img51.png" alt="Hello!" style="width: 80%;" />
  </p>