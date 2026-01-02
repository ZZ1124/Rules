// 粉笔首页多张高清妹子图轮播（2026永久版，12张） - Quantumult X 专用

const images = [
"https://www.10wallpaper.com/wallpaper/1200x900/1608/Asian_girl_hat-Beauty_poster_wallpaper_1200x900.jpg"
];

const items = images.map((url, index) => ({
  id: 40000 + index,
  courseSetId: 2,
  content: "每日美图",
  imageUrl: url,
  url: null,
  redirectType: 1,
  ordinal: index + 1,
  createdTime: Date.now(),
  startTime: Date.now() - 3600000,
  endTime: 4070880000000,
  type: 0,
  bizType: 4
}));

const response = {
  code: 1,
  msg: "",
  data: {
    positionResourceType: 1,
    payload: {
      items: items,
      count: items.length
    }
  }
};

$done({
  status: "200",
  headers: { "Content-Type": "application/json;charset=utf-8" },
  body: JSON.stringify(response)
});
