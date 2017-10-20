//function onOpen(){
  //var id = "(spread sheet id)";
  //var spreadSheet = SpreadsheetApp.openById(id);
  //var sheet = spreadSheet.getSheetByName("(sheet name)"); 
  //var lastRow = sheet.getLastRow();
  //for(var i = lastRow; i > 1; i--){
    //if(sheet.getRange(i,6).getValue() == false){
      //sheet.deleteRow(i);
    //}
  //}
//}

//処理メニュー表示
function showMenu(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menu = [
    {name: "データ整理", functionName: "sheetorder"},
    {name: "会計準備チェック", functionName: "check"},
    {name: "残高計算", functionName: "sumprice"},
  ];
  ss.addMenu("処理メニュー", menu);
}

//用途が空欄の行削除
function sheetorder(){
  var id = "(spread sheet id)";
  var spreadSheet = SpreadsheetApp.openById(id);
  var sheet = spreadSheet.getSheetByName("(sheet name)"); 
  var lastRow = sheet.getLastRow();
  for(var i = lastRow; i > 3; i--){
    if(sheet.getRange(i,6).getValue() == false){
      sheet.deleteRow(i);
    }
  }
}

function sumprice(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("(sheet name)");
  var sheet1 = ss.getSheetByName("(another sheet name)");
  var lastRow = sheet.getLastRow();
  var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, now = 0;
  for(var i = lastRow; i > 3; i--){
    var range1 = sheet.getRange(i,3);
    var range2 = sheet.getRange(i,7);
    switch(range1.getValue()){
      case "収入":
      sum1 += range2.getValue();
      break
      case "支出":
      sum2 += range2.getValue();
      break
      case "貸出":
      sum3 += range2.getValue();
      break
      case "返金":
      sum4 += range2.getValue();
      break
    }
    //if(range1.getValue()==="支出" )
  }
  var range3 = sheet1.getRange("A3");
  var range4 = sheet1.getRange("B3");
  var range5 = sheet1.getRange("C3");
  var range6 = sheet1.getRange("D3");
  var range7 = sheet1.getRange("B4");
  var range8 = sheet1.getRange("D4");
  var range9 = sheet.getRange("G2");
  range3.setValue(sum1);
  range4.setValue(sum2);
  range5.setValue(sum3);
  range6.setValue(sum4);
  range7.setValue(sum1 - sum2);
  sumin = sum1 + sum4;
  sumout = sum2 + sum3; 
  range8.setValue(sumin - sumout);
  range9.setValue(sumin - sumout);
  //口座残高が０以下になると文字を赤にする
  if(range7.getValue() < 0){
    range9.setFontColor("red");
  }else{
    range9.setFontColor("black");
  }
}  

function check(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("(sheet name)");
  var lastRow = sheet.getLastRow();
  for(var i = lastRow; i > 3; i--){
    var range = sheet.getRange(i,5);
    var range1 = sheet.getRange(i,8);
    var range2 = sheet.getRange(i,9);
    var range3 = sheet.getRange(i,3);
    var range4 = sheet.getRange(i,11);
    if(range.getValue() === "Tom"){
      range1.setValue("Tom");
    }
    if(range.getValue() === "Sam"){
      range1.setValue("Sam");
    }
     if(range3.getValue() === "収入" || range3.getValue() === "返金"){
      range1.setValue("○");
      range4.setValue("○");
    }
  }
}

function groupsum(){
  // ブックを取得、シートも取得、会計報告の最終行番号も取得
  var id = "1oTf6I9n41opJXMiXNrJb6ZkZQ-RmKR0Tr9jpZO6uu2g";
  var spreadSheet = SpreadsheetApp.openById(id);
  var sheet = spreadSheet.getSheetByName("(sheet name)"); 
  var sheet1 = spreadSheet.getSheetByName("(another sheet name)"); 
  var lastRow = sheet.getLastRow();

for(var i = lastRow; i > 3; i--){
    // 「(sheet name)」の分類と金額のセルを取得
    var range = sheet.getRange(i,3);
    var range1 = sheet.getRange(i,7);
    // 分類セルの値を取得
    var class = range.getValue();
    // 値が「支出」のものの操作
 if(class =="支出"){
    // 班のセルを取得
    var range = sheet.getRange(i,4);
    // sumを3個初期値０で定義
　　var sum0 = 0;
    var sum1 = 0;
    var sum2 = 0;
    
    // 班ごとに支出の中の合計をsumに代入
    switch(range.getValue()){
      case "Group1":
      sum0 += range1.getValue();
      break
      case "Group2":
      sum1 += range1.getValue();
      break
      case "Group3":
      sum2 += range1.getValue();
      break
    }
　　}
}

}

function onEdit(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("(sheet name)");
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange(2,1);
  var sum = 0;
  for(var i = lastRow; i > 3; i--){
    var range1 = sheet.getRange(i,9);
    var range2 = sheet.getRange(i,5);
    var range3 = sheet.getRange(i,11);
    if(range1.getValue() == false && range.getValue() === range2.getValue() && range3.getValue() != false){
      var range3 = sheet.getRange(i,7);
      var value = range3.getValue();
      sum += value;
      //range3.setBackground("yellow");
    }
  }
  var range4 = sheet.getRange(2,2);
  range4.setValue(sum);
}


//function havemoney(){
  //var ss = SpreadsheetApp.getActiveSpreadsheet();
  //var sheet = ss.getSheetByName("(sheet name)");
  //var range = sheet.getValue("J1");
  //var sum = ;
  
//}
//function onEdit(e){
 // e.range.setComment("Edited by: " + e.user);
//}
