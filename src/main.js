const data = [
  {
    id: 2,
    url: "https://a.wattpad.com/cover/101598820-288-k582048.jpg",
    name: "Вася"
  },
  {
    id: 1,
    url:
      "https://cs7.pikabu.ru/post_img/big/2018/07/17/8/1531833728129319373.jpg",
    name: "Марго"
  },
  {
    id: 4,
    url:
      "http://www.xa-xa.org/uploads/posts/2010-09/1285791620_1285707391_1.jpg",
    name: "Розо"
  },
  {
    id: 3,
    url: "https://f1.upet.com/DFOwu1HYVC.jpg",
    name: "Макс"
  },
  {
    id: 6,
    url: "https://cs4.pikabu.ru/post_img/2016/01/07/8/1452170055137768324.jpg",
    name: "Борис"
  },
  {
    id: 5,
    url: "https://cs.pikabu.ru/post_img/2013/12/09/7/1386586596_1922159988.jpg",
    name: "Супакэт"
  }
];

function showData() {
  let div = document.createElement("div");
  div.setAttribute("id", "wrapper");
  document.body.appendChild(div);

  var id_img = 0;
  for (let i = 0; i < data.length; ++i) {
    let item = document.createElement("div");
    item.setAttribute("id", "item");

    document.getElementById("wrapper").appendChild(item);

    let img = document.createElement("img");
    img.setAttribute("id", data[i].id);
    img.setAttribute("width", "50%");
    img.setAttribute("src", data[i].url);

    document.getElementById("item").appendChild(img);

    let title = document.createElement("span");
    title.setAttribute("id", "img-title");

    let title_value = document.createTextNode(data[i].name);
    title.appendChild(title_value);

    document.getElementById("item").appendChild(title);

    img.addEventListener("mouseover", function() {
      img.setAttribute("border", "1px solid black");
      let id_grid = img.getAttribute("id");
      if (id_img === id_grid) {
        id_img = 0;
      } else {
        id_img = id_grid;
      }
    });

    img.addEventListener("mouseout", function() {
      let id_grid = img.getAttribute("id");
      img.setAttribute("border", "none");
      if (id_img !== id_grid) {
        id_img = 0;
      } else {
        id_img = id_grid;
      }
    });
  }

  let button = document.createElement("button");

  button.setAttribute("id", "btn-submit");
  button.innerText = "Submit";

  document.body.appendChild(button);

  button.addEventListener("click", function() {
    alert(id_img);
  });
}
