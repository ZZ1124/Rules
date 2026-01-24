# Rules - iOS 净化规则集合

本仓库主要提供 iOS 设备上使用的 **Quantumult X (QX)** 规则文件，专注于 **全面净化**、去广告、去开屏、去会员弹窗等功能。目前主要维护 **酷狗概念版** 的净化规则（苹果端）。

## 主要规则

### 酷狗概念版 最新版
- 版本：5.1.41
- 版本日期：2026-01-26 更新
- 目标：最大程度去除广告、启动页广告、会员弹窗、推荐内容、各种骚扰推送，实现接近纯净的音乐播放体验
- 适用：酷狗概念版 最新版本（iOS）
- 下载规则：
  https://github.com/ZZ1124/Rules/raw/main/QX/Kugou_gnb_new.conf

### 酷狗概念版 旧版
- 版本：2.4.5
- 目标：针对旧版 2.4.5 的完整净化规则（去广告、去开屏、去弹窗等）
- 适用：酷狗概念版 2.4.5（iOS）—— **旧版 App 下载地址**  
  https://github.com/ZZ1124/html/raw/main/Kggnb.html  
  （打开页面后可找到 ipa 下载链接或安装指引）

## 使用方法（Quantumult X）

1. 打开 Quantumult X → 进入「规则」或「配置文件」部分
2. 添加远程规则订阅：
   - 最新版：`https://github.com/ZZ1124/Rules/raw/main/QX/Kugou_gnb_new.conf`
   - 旧版（2.4.5）：`https://github.com/ZZ1124/Rules/raw/main/QX/Kugou_gnb_old.conf`
3. 类型选择「REJECT」或「SCRIPTING」等，根据规则实际需要（大部分为 reject 或 rewrite）
4. 保存并更新，建议开启 MITM（若规则中有 hostname）并安装证书
5. 优先级：建议把酷狗规则放在较高优先级，避免被其他通用规则覆盖

## 注意事项

- 规则仅适配 **苹果 iOS 端** 酷狗概念版（Kugou 音乐概念版）
- 旧版 2.4.5 可能已无法在 App Store 正常下载，建议使用提供的 html 页面获取历史版本 ipa
- 规则会不定期更新以适配 App 新版本，建议关注仓库或 Star
- 净化效果受 App 版本、QX 更新情况、网络环境影响，如遇失效可 issue 反馈

## 相关链接

- 仓库规则目录：`/QX/`
- 旧版 App 下载页：https://github.com/ZZ1124/html/blob/main/Kggnb.html

感谢使用，如有问题欢迎提交 Issue。