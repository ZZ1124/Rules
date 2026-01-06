let body = {
  "status": 1,
  "data": {
    "total": 0,
    "list": []
  },
  "error_code": 0,
  "error_msg": ""
};

$done({ body: JSON.stringify(body) });
