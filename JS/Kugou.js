/**
 * 酷狗概念版：个人中心全量字段控制脚本
 * 0 = 隐藏/禁用/清空数值
 * 1 = 显示/开启/保留数值
 */

const settings = {
    // === [ 1. 核心视觉可见性开关 (Visible 系列) ] ===
    "follow_visible": 0,      // 关注的人列表
    "fanslist_visible": 0,    // 粉丝列表
    "box_visible": 0,         // 音乐盒/盲盒入口
    "album_visible": 0,       // 个人相册
    "timbre_visible": 0,      // 音效/音色展示
    "selflist_visible": 0,    // 个人清单
    "nft_visible": 0,         // NFT/数字藏品
    "yaicreation_visible": 0, // AI 创作/绘画
    "likemusic_visible": 0,   // 我喜欢的音乐列表
    "usermedal_visible": 0,   // 用户勋章墙
    "musical_visible": 0,     // 乐器/歌单详情
    "mv_visible": 0,          // MV 作品展示
    "lting_visible": 0,       // 听歌排行榜/足迹
    "pictorial_visible": 0,   // 动态画报
    "comment_visible": 0,     // 评论模块
    "applet_visible": 0,      // 小程序入口
    "assets_visible": 0,      // 虚拟资产/钱包
    "ai_song_visible": 0,     // AI 歌曲/翻唱
    "visitor_visible": 0,     // 最近访客
    "lvideo_visible": 0,      // 长视频
    "online_visible": 0,      // 在线状态/是否在线
    "student_visible": 0,     // 学生身份认证标识
    "sound_visible": 0,       // 声音/电台板块
    "collectlist_visible": 0, // 收藏的歌单
    "kuelf_visible": 0,       // 酷狗精灵 (虚拟宠物/助手)
    "kuqun_visible": 0,       // 酷群/社交群组
    "faxingka_visible": 0,    // 发行卡/数字专辑
    "visible": 1,             // 个人主页整体可见性 (通常保持1)
    "mcard_visible": 0,       // 磁卡/个性化名片装饰
    "followlist_visible": 0,  // 关注名单公开性
    "ychannel_visible": 0,    // 频道/电台展示
    "radio_visible": 0,       // 电台模块
    "ylikestory_visible": 0,  // 喜欢的故事
    "musicstation_visible": 0,// 音乐站
    "listen_visible": 0,      // 正在听/听歌模块
    "live_visible": 0,        // 直播入口
    "info_visible": 0,        // 详细个人信息资料
    "ypublishstory_visible": 0,// 发布的故事
    "svideo_visible": 0,      // 短视频/视频号
    "ksong_visible": 0,       // K歌板块
    "listenmusic_visible": 0, // 听歌详情/实时听歌
    "myplayer_visible": 0,    // 播放器个性化样式
    "singletrack_visible": 0, // 单曲作品展示
    "share_visible": 0,       // 分享/转发功能

    // === [ 2. 身份、认证与状态标识 (Status/Auth) ] ===
    "singer_status": 0,       // 歌手身份 (0:普通用户, 1:歌手)
    "star_status": 0,         // 明星身份标识
    "actor_status": 0,        // 演员身份标识
    "biz_status": 0,          // 商务认证状态
    "tme_star_status": 0,     // TME(腾讯音乐)星级认证
    "real_auth": 0,           // 实名认证状态
    "face_auth": 0,           // 人脸识别认证状态
    "is_star": -1,            // 是否是明星 (-1代表否)
    "kq_talent": 0,           // 酷狗达人标识
    "avatar_review": 0,       // 头像审核状态
    "risk_symbol": 0,         // 风险账号标识 (正常应为0)
    "iden": 0,                // 身份特征识别码

    // === [ 3. 会员与权益相关 (VIP) ] ===
    "singvip_valid": 0,       // K歌会员有效性
    "bookvip_valid": 0,       // 听书/小说会员有效性
    "vip_type": 1,            // 会员类型等级
    "svip_level": 0,          // SVIP 等级数字
    "svip_score": 0,          // SVIP 积分/成长值
    "y_type": 0,              // 某种特定的会员类型标识

    // === [ 4. 社交计数与数值 (设为0则界面显示为0或不显示) ] ===
    "follows": 0,             // 关注数
    "fans": 0,                // 粉丝数
    "friends": 0,             // 好友数
    "nvisitors": 0,           // 新访客数
    "hvisitors": 0,           // 历史总访客数
    "visitors": 0,            // 访客总计
    "knock_cnt": 0,           // “敲一敲”次数
    "top_number": 0,          // 榜单/排名数字
    "duration": 0,            // 某种时长/连续在线时间

    // === [ 5. 个人资料与地理位置 (可选隐藏) ] ===
    "loc": "",                // 归属地 (原:浙江)
    "province": "",           // 省份 (原:广东)
    "city": "",               // 城市 (原:深圳市)
    "gender": 1,              // 性别 (1男, 2女)
    "constellation": -1       // 星座 (-1为不显示)
};

// 脚本处理逻辑
let body = $response.body;
if (body) {
    try {
        let obj = JSON.parse(body);
        if (obj.data) {
            // 1. 遍历并修改第一层 data 里的所有开关
            Object.keys(settings).forEach(key => {
                if (obj.data.hasOwnProperty(key)) {
                    obj.data[key] = settings[key];
                }
            });

            // 2. 深度处理嵌套的会员信息 (union_vipinfo)
            if (obj.data.union_vipinfo) {
                obj.data.union_vipinfo.is_vip = 0; // 彻底关闭 VIP 视觉标识
                if (obj.data.union_vipinfo.ext_vip) {
                    obj.data.union_vipinfo.ext_vip.forEach(item => {
                        item.is_vip = 0;      // 关闭子项 VIP
                        item.is_paid_vip = 0; // 关闭付费标识
                        item.svip_level = 0;  // 等级清零
                    });
                }
            }

            // 3. 处理勋章 (medal)
            if (obj.data.medal) {
                obj.data.medal = { "ktv": {}, "fx": {} }; // 抹掉勋章数据
            }

            // 4. 处理“敲一敲”等提醒 (knock)
            if (obj.data.knock) {
                obj.data.knock = []; // 清空动态提示
            }
        }
        $done({ body: JSON.stringify(obj) });
    } catch (e) {
        $done({}); // 报错则原样返回
    }
} else {
    $done({});
}
