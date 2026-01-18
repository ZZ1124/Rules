let emptyBody = {
  "error_msg": "",
  "data": { "list": [], "total": 0 },
  "status": 1,
  "error_code": 0
};
$done({ body: JSON.stringify(emptyBody) });
