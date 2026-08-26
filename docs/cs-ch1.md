# <span class="topic-label topic-label--cs">深入理解计算机系统</span> | Ch1.计算机系统漫游

## 1. 信息

系统中的信息由二进制位（位、比特、bit）表示。上下文决定二进制位承载信息的含义。
- 8个二进制位组成字节（byte）
- 系统中的文件分为文本文件和二进制文件。文本文件多由ASCII字符组成。

## 2. 由源文件到可执行文件

以源文件`hello.c`为例：
```c
// file hello.c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

```mermaid
flowchart LR
    A("hello.c<br/>文本") -->|"**预处理器**<br/>解#"| B("hello.i<br/>文本")
    B -->|"**编译器**<br/>转汇编"| C("hello.s<br/>文本")
    C -->|"**汇编器**<br/>转指令"| D("hello.o<br/>可重定位/二进制")
    D -->|"**链接器**<br/>合并"| E("hello<br/>可执行/二进制")
```