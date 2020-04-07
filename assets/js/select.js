let spots = {
  shin_chitose: ['札幌市', '登別温泉', '洞爺湖温泉', 'ニセコ'],
  haneda: ['東京都', '神奈川県', '埼玉県', '千葉県'],
  narita: ['東京23区', '武蔵野三鷹市'],
  chubu: ['愛知県', '静岡県', '岐阜県', '三重県', '松本市', '福井市', '金沢市', '京都府'],
  itami: ['滋賀県', '京都府', '大阪府', '奈良県', '和歌山県', '三重県', '岡山県'],
  kanku: ['滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県', '三重県', '岡山県'],
  kobe: ['大阪府', '兵庫県', '京都府', '滋賀県', '奈良県', '和歌山県', '三重県', '岡山県'],
  hukuoka: ['福岡県', '佐賀県', 'ハウステンボス', '熊本山鹿温泉', '大分県', 'シーガイア']
};

let company = ['tokyo', 'sapporo', 'nagoya', 'shiga', 'kyoto', 'osaka', 'kobe', 'fukuoka'];

let airport_val, pickup_val;

$(document).ready(function () {
  $('#airport').on('change', function () {
    let select = $('#pickup');
    let data = $('#airport option:selected').data('arr');
    airport_val = $(this).val();
    $('#mk-tel').css('display', 'none');
    $('#min-price').css('display', 'none');
    // select制御
    select.removeAttr('disabled');
    select.html('');
    if (airport_val != 0) {
      select.append('<option value="0">選択してください</option>');
      let arr = spots[data];
      arr.forEach(val => {
        select.append('<option val="' + val + '">' + val + '</option>');
      });
    } else {
      select.attr('disabled', 'disabled');
      select.html('<option value="0">---</option>');
    }
  });

  // MK会社決定
  $('#pickup').on('change', function () {
    pickup_val = $(this).val();
    let dom_company = $('#company');
    let lat = $('#lat');
    let lng = $('#lng');
    lat.val('');
    lng.val('');

    if (pickup_val != 0) {

      // 電話番号表示
      $('#mk-tel').css('display', 'block');
      if (airport_val == 1) { // 新千歳空港
        dom_company.val(company[1]); // 札幌MK
        $('#mk-company').text('札幌エムケイ');
        $('#mk-tel-num').attr('href', 'tel:011-777-5058');
        $('#mk-tel-num').children('span').text('011-777-5058');
      } else if (airport_val == 2) { // 中部国際空港
        if (pickup_val == '滋賀県') {
          dom_company.val(company[3]); // 滋賀MK
          $('#mk-company').text('滋賀エムケイ');
          $('#mk-tel-num').attr('href', 'tel:077-526-4141');
          $('#mk-tel-num').children('span').text('077-526-4141');
        } else if (pickup_val == '京都府') {
          dom_company.val(company[4]); // 京都MK
          $('#mk-company').text('京都エムケイ');
          $('#mk-tel-num').attr('href', 'tel:075-555-3195');
          $('#mk-tel-num').children('span').text('075-555-3195');
        } else {
          dom_company.val(company[2]); // 名古屋MK
          $('#mk-company').text('名古屋エムケイ');
          $('#mk-tel-num').attr('href', 'tel:052-913-8001');
          $('#mk-tel-num').children('span').text('052-913-8001');
        }
      } else if (airport_val == 3) { // 伊丹空港
        if (pickup_val == '滋賀県') {
          dom_company.val(company[3]); // 滋賀MK
          $('#mk-company').text('滋賀エムケイ');
          $('#mk-tel-num').attr('href', 'tel:077-526-4141');
          $('#mk-tel-num').children('span').text('077-526-4141');
        } else if (pickup_val == '京都府') {
          dom_company.val(company[4]); // 京都MK
          $('#mk-company').text('京都エムケイ');
          $('#mk-tel-num').attr('href', 'tel:075-555-3195');
          $('#mk-tel-num').children('span').text('075-555-3195');
        } else {
          dom_company.val(company[5]); // 大阪MK
          $('#mk-company').text('大阪エムケイ');
          $('#mk-tel-num').attr('href', 'tel:06-6452-4441');
          $('#mk-tel-num').children('span').text('06-6452-4441');
        }
      } else if (airport_val == 4) { // 関空
        if (pickup_val == '滋賀県') {
          dom_company.val(company[3]); // 滋賀MK
          $('#mk-company').text('滋賀エムケイ');
          $('#mk-tel-num').attr('href', 'tel:077-526-4141');
          $('#mk-tel-num').children('span').text('077-526-4141');
        } else if (pickup_val == '京都府') {
          dom_company.val(company[4]); // 京都MK
          $('#mk-company').text('京都エムケイ');
          $('#mk-tel-num').attr('href', 'tel:075-555-3195');
          $('#mk-tel-num').children('span').text('075-555-3195');
        } else {
          dom_company.val(company[5]); // 大阪MK
          $('#mk-company').text('大阪エムケイ');
          $('#mk-tel-num').attr('href', 'tel:06-6452-4441');
          $('#mk-tel-num').children('span').text('06-6452-4441');
        }
      } else if (airport_val == 5) { // 神戸空港
        dom_company.val(company[6]); // 神戸MK
        $('#mk-company').text('神戸エムケイ');
        $('#mk-tel-num').attr('href', 'tel:078-303-6001');
        $('#mk-tel-num').children('span').text('078-303-6001');
      } else if (airport_val == 6) { // 福岡空港
        dom_company.val(company[7]); // 福岡MK
        $('#mk-company').text('福岡エムケイ');
        $('#mk-tel-num').attr('href', 'tel:092-713-2229');
        $('#mk-tel-num').children('span').text('092-713-2229');
      } else if (airport_val == 8 || airport_val == 9) { // 成田・羽田
        dom_company.val(company[0]); // 東京MK
        $('#mk-company').text('東京エムケイ');
        $('#mk-tel-num').attr('href', 'tel:03-5547-5551');
        $('#mk-tel-num').children('span').text('03-5547-5551');
      }

      // 最低料金
      $('#min-price').css('display', 'block');
      let price = $('#min-price').children('p').children('span');
      if (airport_val == 1) {
        if (pickup_val == '札幌市') {
          price.text('6,700');
        } else if (pickup_val == '登別温泉') {
          price.text('21,200');
        } else if (pickup_val == '洞爺湖温泉') {
          price.text('27,600');
        } else if (pickup_val == 'ニセコ') {
          price.text('31,800');
        }
      } else if (airport_val == 2) {
        if (pickup_val == '愛知県') {
          price.text('7,000');
        } else if (pickup_val == '静岡県') {
          price.text('29,000');
        } else if (pickup_val == '岐阜県') {
          price.text('21,000');
        } else if (pickup_val == '三重県') {
          price.text('13,500');
        } else if (pickup_val == '松本市') {
          price.text('69,000');
        } else if (pickup_val == '福井市') {
          price.text('58,000');
        } else if (pickup_val == '金沢市') {
          price.text('73,000');
        } else if (pickup_val == '滋賀県') {
          price.text('25,300');
        } else if (pickup_val == '京都府') {
          price.text('22,000');
        }
      } else if (airport_val == 3) {
        if (pickup_val == '滋賀県') {
          price.text('11,100');
        } else if (pickup_val == '京都府') {
          price.text('6,700');
        } else if (pickup_val == '大阪府') {
          price.text('3,700');
        }
      } else if (airport_val == 4) {
        if (pickup_val == '滋賀県') {
          price.text('22,100');
        } else if (pickup_val == '京都府') {
          price.text('12,900');
        } else if (pickup_val == '大阪府') {
          price.text('3,200');
        } else if (pickup_val == '兵庫県') {
          price.text('10,500');
        } else if (pickup_val == '奈良県') {
          price.text('11,100');
        } else if (pickup_val == '和歌山県') {
          price.text('6,200');
        } else if (pickup_val == '三重県') {
          price.text('19,100');
        } else if (pickup_val == '岡山県') {
          price.text('32,500');
        }
      } else if (airport_val == 5) {
        if (pickup_val == '滋賀県') {
          price.text('15,700');
        } else if (pickup_val == '京都府') {
          price.text('10,900');
        } else if (pickup_val == '大阪府') {
          price.text('7,300');
        } else if (pickup_val == '兵庫県') {
          price.text('3,300');
        } else if (pickup_val == '奈良県') {
          price.text('11,700');
        } else if (pickup_val == '和歌山県') {
          price.text('15,900');
        } else if (pickup_val == '三重県') {
          price.text('22,000');
        } else if (pickup_val == '岡山県') {
          price.text('21,200');
        }
      } else if (airport_val == 6) {
        if (pickup_val == '福岡県') {
          price.text('3,300');
        } else if (pickup_val == '佐賀県') {
          price.text('9,100');
        } else if (pickup_val == 'ハウステンボス') {
          price.text('17,500');
        } else if (pickup_val == '熊本山鹿温泉') {
          price.text('12,800');
        } else if (pickup_val == '大分県') {
          price.text('11,200');
        } else if (pickup_val == 'シーガイア') {
          price.text('43,000');
        }
      } else if (airport_val == 8) {
        if (pickup_val == '東京都') {
          price.text('3,000');
        } else if (pickup_val == '神奈川県') {
          price.text('4,000');
        } else if (pickup_val == '埼玉県') {
          price.text('14,000');
        } else if (pickup_val == '千葉県') {
          price.text('9,000');
        }
      } else if (airport_val == 9) {
        if (pickup_val == '東京23区') {
          price.text('17,000');
        } else if (pickup_val == '武蔵野三鷹市') {
          price.text('24,000');
        }
      }

      // 位置情報
      if (pickup_val == '札幌市') {
        lat.val(43.0686645);
        lng.val(141.3485666);
      } else if (pickup_val == '登別温泉') {
        lat.val(42.4946769);
        lng.val(141.1418363);
      } else if (pickup_val == '洞爺湖温泉') {
        lat.val(42.5683639);
        lng.val(140.7776993);
      } else if (pickup_val == 'ニセコ') {
        lat.val(42.7927906);
        lng.val(140.5444543);
      } else if (pickup_val == '東京都') {
        lat.val(35.6812405);
        lng.val(139.7649361);
      } else if (pickup_val == '神奈川県') {
        lat.val(35.4710312);
        lng.val(139.624925);
      } else if (pickup_val == '埼玉県') {
        lat.val(35.8937993);
        lng.val(139.6315523);
      } else if (pickup_val == '千葉県') {
        lat.val(35.6129302);
        lng.val(140.1112894);
      } else if (pickup_val == '東京23区') {
        lat.val(35.6812405);
        lng.val(139.7649361);
      } else if (pickup_val == '武蔵野三鷹市') {
        lat.val(35.7027199);
        lng.val(139.5588404);
      } else if (pickup_val == '愛知県') {
        lat.val(35.1709194);
        lng.val(136.8793482);
      } else if (pickup_val == '静岡県') {
        lat.val(34.9721914);
        lng.val(138.3867118);
      } else if (pickup_val == '岐阜県') {
        lat.val(35.4095322);
        lng.val(136.7542769);
      } else if (pickup_val == '三重県') {
        lat.val(34.7340911);
        lng.val(136.5083147);
      } else if (pickup_val == '松本市') {
        lat.val(36.2308194);
        lng.val(137.9621665);
      } else if (pickup_val == '福井市') {
        lat.val(36.0616547);
        lng.val(136.2213569);
      } else if (pickup_val == '金沢市') {
        lat.val(36.5780486);
        lng.val(136.6459827);
      } else if (pickup_val == '京都府') {
        lat.val(34.9858534);
        lng.val(135.756578);
      } else if (pickup_val == '滋賀県') {
        lat.val(35.0033732);
        lng.val(135.862391);
      } else if (pickup_val == '奈良県') {
        lat.val(34.6808034);
        lng.val(135.8168025);
      } else if (pickup_val == '和歌山県') {
        lat.val(34.2321244);
        lng.val(135.1889214);
      } else if (pickup_val == '岡山県') {
        lat.val(34.6661256);
        lng.val(133.9155448);
      } else if (pickup_val == '福岡県') {
        lat.val(36.7083023);
        lng.val(136.9298097);
      } else if (pickup_val == '佐賀県') {
        lat.val(33.2641808);
        lng.val(130.2952081);
      } else if (pickup_val == 'ハウステンボス') {
        lat.val(33.0860054);
        lng.val(129.7862482);
      } else if (pickup_val == '熊本山鹿温泉') {
        lat.val(33.0125629);
        lng.val(130.6855572);
      } else if (pickup_val == '大分県') {
        lat.val(33.2326467);
        lng.val(131.6039087);
      } else if (pickup_val == 'シーガイア') {
        lat.val(31.9574453);
        lng.val(131.4677887);
      }
    } else {
      $('#mk-tel').css('display', 'none');
      $('#min-price').css('display', 'none');
    }
  });
});