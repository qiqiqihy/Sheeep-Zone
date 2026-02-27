# <span class="topic-label">SLAM Basics</span> | SIFT特征

## 0.概述

SIFT特征[^sift]（Scale Invariant Feature Transform）

## 1. 理论基础

### 1.1 尺度空间

图像$I(x,y)$的尺度空间定义为函数$L(x,y,\sigma)$，满足：

\[
L(x,y,\sigma)=G(x,y,\sigma)*I(x,y)
\]

其中$*$为卷积运算，$G(x,y,\sigma)$为Gaussian核，满足：

\[
G(x,y,\sigma)=\frac{1}{2\pi\sigma^2}\exp\left(-\frac{x^2+y^2}{2\sigma^2}\right)
\]

### 1.2 候选特征点检测

尺度空间中的候选特征点定义为DoG函数（Difference of Gaussian）的局部极值，DoG函数$D(x,y,\sigma)$由尺度空间中相差常数因子$k$的两层计算，即：

\[
\begin{aligned}
D(x,y,\sigma)&=(G(x,y,k\sigma)-G(x,y,\sigma))*I(x,y)\\[5pt]
             &=L(x,y,k\sigma)-L(x,y,\sigma)
\end{aligned}
\]

采用DoG函数的原因有二：一是DoG函数可以简单地由尺度空间$L(x,y,\sigma)$计算，而$L(x,y,\sigma)$的获取是描述尺度空间必须进行的计算；二是DoG函数为尺度归一化LoG（Laplacian of Gaussian）函数$\sigma^2\nabla^2G$的近似，后者的局部极值被验证相较于梯度、Hessian和Harris响应函数可以产生最稳定的图像特征。

??? note "DoG函数近似尺度归一化LoG函数推导"
    Gaussian核$G(x,y,\sigma)$为热扩散方程的解，即有：

    \[
    \frac{\partial G}{\partial\sigma}=\sigma\nabla^2G\triangleq\sigma\left(\frac{\partial^2G}{\partial x^2}+\frac{\partial^2G}{\partial y^2}\right)
    \]

    因此有：

    \[
    \sigma\nabla^2G=\frac{\partial G}{\partial\sigma}\approx\frac{G(x,y,k\sigma)-G(x,y,\sigma)}{k\sigma-\sigma}
    \]

    \[
    \Rightarrow G(x,y,k\sigma)-G(x,y,\sigma)\approx(k-1)\sigma^2\nabla^2G
    \]

    \[
    \Rightarrow D(x,y,\sigma)\approx\sigma^2\nabla^2G*I(x,y)
    \]

    由于$k-1$为常数，其不影响局部极值位置，当$k\to1$时，近似误差$\to0$。

DoH函数的构造如[图1](#fig-doh)所示，首先将初始图像与Gaussian核卷积，在尺度空间中生成由常数因子$k$分隔的图像。

<figure id="fig-doh" markdown="span">
    ![fig-doh](images/sift-doh.png){width="500"}
    <figcaption>DoH函数构造</figcaption>
</figure>

<figure id="fig-doh-test1" markdown="span">
    ![fig-doh](images/sift-doh.png){width="500"}
    <figcaption>测试自动编号1</figcaption>
</figure>

<figure id="fig-doh-test2" markdown="span">
    ![fig-doh](images/sift-doh.png){width="500"}
    <figcaption>测试自动编号2</figcaption>
</figure>

## 2. OpenCV实现

OpenCV 在 `features2d` 模块中提供了 SIFT 的检测与描述接口，可以直接用于关键点提取和匹配[^opencv_sift]。

[^sift]: D. G. Lowe, “Distinctive image features from scale-invariant keypoints,” International journal of computer vision, vol. 60, no. 2, pp. 91–110, 2004.

[^opencv_sift]: OpenCV Documentation. SIFT (Scale-Invariant Feature Transform). https://docs.opencv.org/
