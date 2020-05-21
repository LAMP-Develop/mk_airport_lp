$(document).ready(function () {
  let logo = $("#agent-logo");
  let agent = get_param("agent");
  let referrer = document.referrer;
  console.log("Referrer:" + referrer);

  if (agent != null) {
    logo.css("display", "block");
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
