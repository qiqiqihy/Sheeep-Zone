# SLAM Basics | SIFT特征点（Scale Invariant Feature Transform）

## 1. 理论基础

SIFT（Scale-Invariant Feature Transform）由 David G. Lowe 提出，核心目标是在尺度、旋转和一定光照变化下保持特征点描述的稳定性[^lowe2004]。

在经典视觉 SLAM 流程中，局部特征（如 SIFT）通常用于前端的数据关联与匹配，是估计相机位姿和构建地图的重要基础[^slam14].

## 2. OpenCV实现

OpenCV 在 `features2d` 模块中提供了 SIFT 的检测与描述接口，可以直接用于关键点提取和匹配[^opencv_sift]。

## 参考文献

[^lowe2004]: Lowe, D. G. Distinctive Image Features from Scale-Invariant Keypoints. *International Journal of Computer Vision* (IJCV), 2004.

[^slam14]: Durrant-Whyte, H., & Bailey, T. Simultaneous Localization and Mapping: Part I. *IEEE Robotics & Automation Magazine*, 2006.

[^opencv_sift]: OpenCV Documentation. SIFT (Scale-Invariant Feature Transform). https://docs.opencv.org/
