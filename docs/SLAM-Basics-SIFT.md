# <span class="topic-label">SLAM Basics</span> | SIFT特征

## 0.概述

SIFT特征[^sift]（Scale Invariant Feature Transform）

## 1. 理论基础

### 1.1 尺度空间

图像$I(x,y)$的尺度空间定义为函数$L(x,y,\sigma)$，满足：
$$
L(x,y,\sigma)=G(x,y,\sigma)*I(x,y)
$$
其中$*$为卷积运算，$G(x,y,\sigma)$为Gaussian核，满足：
$$
G(x,y,\sigma)=\frac{1}{2\pi\sigma^2}\exp\left(-\frac{x^2+y^2}{2\sigma^2}\right)
$$

## 2. OpenCV实现

OpenCV 在 `features2d` 模块中提供了 SIFT 的检测与描述接口，可以直接用于关键点提取和匹配[^opencv_sift]。

[^sift]: D. G. Lowe, “Distinctive image features from scale-invariant keypoints,” International journal of computer vision, vol. 60, no. 2, pp. 91–110, 2004.

[^opencv_sift]: OpenCV Documentation. SIFT (Scale-Invariant Feature Transform). https://docs.opencv.org/
