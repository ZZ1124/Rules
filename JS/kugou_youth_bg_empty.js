let body = JSON.parse($response.body);

if (body.data && Array.isArray(body.data.list)) {
  body.data.list = [];  // 清空背景图片列表
  body.data.total = 0;  // 总数设为0
}

$done({ body: JSON.stringify(body) });
