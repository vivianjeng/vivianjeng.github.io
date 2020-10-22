---
layout: project
title: Video Stabilization
description: Image Stabilization Method based on Variational Mode Decomposition and Relative Entropy (Entropy 2017)
summary: Image Stabilization Method based on Variational Mode Decomposition and Relative Entropy (Entropy 2017)
category: Image Processing
---

[Github Repo](https://github.com/vivianjeng/Image-Stabilization-Method-using-VMD-and-RE)

## Implementation of "Image Stabilization Method based on Variational Mode Decomposition and Relative Entropy (Entropy 2017)"

*2018SS Digital Image Processing Final Project*

### Abstract
Cameras mounted on vehicles frequently suffer from image shake due to the vehicles’ motions. To remove jitter motions and preserve intentional motions, a hybrid digital image stabilization method is proposed that uses variational mode decomposition (VMD) and relative entropy (RE). In this paper, the global motion vector (GMV) is initially decomposed into several narrow-banded modes by VMD. REs, which exhibit the difference of probability distribution between two modes, are then calculated to identify the intentional and jitter motion modes. Finally, the summation of the jitter motion modes constitutes jitter motions, whereas the subtraction of the resulting sum from the GMV represents the intentional motions. The proposed stabilization method is compared with several known methods, namely, medium filter (MF), Kalman filter (KF), wavelet decomposition (MD) method, empirical mode decomposition (EMD)-based method, and enhanced EMD-based method, to evaluate stabilization performance. Experimental results show that the proposed method outperforms the other stabilization methods.

### Implementation
- **Feature matching:** We used *Scale-invariant feature transform (SIFT)* to obain feature points in each frame, and we found that there was no mismatching problem so we skipped *RANSAC*
- **Global motion vector:** We averaged all movement of all feature points to detect how video moves
- **Variational Mode Decomposition (VMD):** We chose $\alpha=100$ as described in this paper and extracted a desired stabler curve to illustrate the ideal motion
- **Relative Entropy (RE):** We computed relative entropy between each mode in VMD and chosed mode 1 and mode 2 as the result motion

### Conclusion
- We observed that input data has a lot of restrictions
- We modified the research method by adding noises to a stable video
- We then output a stablized video after applying the scheme this paper proposed

### Presentation video (in Chinese)
<iframe width="700" height="400" src="https://www.youtube.com/embed/clO5tRXlWKA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- Reference <br />
[Hao, D., Li, Q., & Li, C. (2017). Digital Image Stabilization Method Based on Variational Mode Decomposition and Relative Entropy. Entropy, 19(11), 623.](https://www.mdpi.com/1099-4300/19/11/623)