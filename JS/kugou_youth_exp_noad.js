let body = JSON.parse($response.body);

if (body.data && body.data.olexp_params) {
  body.data.olexp_params.flash_ad_show = 0;   // 关闭开屏广告
  body.data.olexp_params.popup_show = 0;      // 关闭弹窗
  body.data.olexp_params.use_scid = 0;        // 可选，关闭其他个性化
  // order_type 保持原样或改0，根据需要
}

if (body.data && body.data.olexp_ids) {
  body.data.olexp_ids = "";  // 清空实验ID，防止随机开启广告组
}

$done({ body: JSON.stringify(body) });
