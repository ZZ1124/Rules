let body = JSON.parse($response.body);

if (body.data && Array.isArray(body.data.info)) {
  body.data.info = [];  // 清空推荐歌曲列表，让板块为空或隐藏
}

$done({ body: JSON.stringify(body) });
