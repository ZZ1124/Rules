var body = $response.body;
var obj = JSON.parse(body);
// 修改三个可见性字段为 0
if (obj.data) {
    obj.data.ylikestory_visible = 0;
    obj.data.musicstation_visible = 0;
    obj.data.listen_visible = 0;
}
body = JSON.stringify(obj);
$done({ body });
