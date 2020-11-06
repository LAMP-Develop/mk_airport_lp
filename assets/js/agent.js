const agent_arr = [
  {
    name: 'JAL',
    src: './assets/images_min/logo_jal.png',
  },
  {
    name: '',
    src: '',
  },
  {
    name: '楽天トラベル',
    src: './assets/images_min/logo_rakuten.png',
  },
  {
    name: 'peach',
    src: './assets/images_min/logo_peach.png',
  },
];

$(function () {
  let agent = get_param("agent");
  if (agent != null) {
    $("#agent-logo img").attr("src", agent_arr[(agent-1)]['src']);
    $("#agent-logo img").attr("alt", agent_arr[(agent-1)]['name']);
    $("#agent-logo").css("display", "block");
    $(".meter-taxi, .sightseeing, .sky, .cta").css("display", "none");
  }
});

/**
 * Get the URL parameter value
 *
 * @param  name {string} パラメータのキー文字列
 * @return  url {url} 対象のURL文字列（任意）
 */
function get_param(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
