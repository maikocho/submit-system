function myFunction(form){
  var id = "(spread sheet id)";
  var spreadSheet = SpreadsheetApp.openById(id);
  var sheet = spreadSheet.getSheetByName("(sheet name that you add the data to)"); //"会計"
  var lastRow = sheet.getLastRow();
  var d = new Date();

  var range = sheet.getRange(lastRow + 1, 1);  
  range.setValue(d);
  var range = sheet.getRange(lastRow + 1, 2);  
  range.setValue(form.date);  
  var range = sheet.getRange(lastRow + 1, 3);  
  range.setValue(form.category);  
  var range = sheet.getRange(lastRow + 1, 4);  
  range.setValue(form.group);  
  var range = sheet.getRange(lastRow + 1, 5);  
  range.setValue(form.name);  
  var range = sheet.getRange(lastRow + 1, 6);  
  range.setValue(form.why);
  var range = sheet.getRange(lastRow + 1, 7);  
  range.setValue(form.price);

  var range = sheet.getRange(lastRow + 2, 1);  
  range.setValue(d);
  var range = sheet.getRange(lastRow + 2, 2);  
  range.setValue(form.date1);  
  var range = sheet.getRange(lastRow + 2, 3);  
  range.setValue(form.category1);  
  var range = sheet.getRange(lastRow + 2, 4);  
  range.setValue(form.group);  
  var range = sheet.getRange(lastRow + 2, 5);  
  range.setValue(form.name);  
  var range = sheet.getRange(lastRow + 2, 6);  
  range.setValue(form.why1);
  var range = sheet.getRange(lastRow + 2, 7);  
  range.setValue(form.price1);

  var range = sheet.getRange(lastRow + 3, 1);  
  range.setValue(d);
  var range = sheet.getRange(lastRow + 3, 2);  
  range.setValue(form.date2);  
  var range = sheet.getRange(lastRow + 3, 3);  
  range.setValue(form.category2);  
  var range = sheet.getRange(lastRow + 3, 4);  
  range.setValue(form.group);  
  var range = sheet.getRange(lastRow + 3, 5);  
  range.setValue(form.name);  
  var range = sheet.getRange(lastRow + 3, 6);  
  range.setValue(form.why2);
  var range = sheet.getRange(lastRow + 3, 7);  
  range.setValue(form.price2);
 
  var range = sheet.getRange(lastRow + 4, 1);  
  range.setValue(d);
  var range = sheet.getRange(lastRow + 4, 2);  
  range.setValue(form.date3);
  var range = sheet.getRange(lastRow + 4, 3);  
  range.setValue(form.category3);    
  var range = sheet.getRange(lastRow + 4, 4);  
  range.setValue(form.group);  
  var range = sheet.getRange(lastRow + 4, 5);  
  range.setValue(form.name);  
  var range = sheet.getRange(lastRow + 4, 6);  
  range.setValue(form.why3);
  var range = sheet.getRange(lastRow + 4, 7);  
  range.setValue(form.price3);

  var range = sheet.getRange(lastRow + 5, 1);  
  range.setValue(d);
  var range = sheet.getRange(lastRow + 5, 2);  
  range.setValue(form.date4);
  var range = sheet.getRange(lastRow + 5, 3);  
  range.setValue(form.category4);    
  var range = sheet.getRange(lastRow + 5, 4);  
  range.setValue(form.group);  
  var range = sheet.getRange(lastRow + 5, 5);  
  range.setValue(form.name);  
  var range = sheet.getRange(lastRow + 5, 6);  
  range.setValue(form.why4);
  var range = sheet.getRange(lastRow + 5, 7);  
  range.setValue(form.price4);
  
 // if you separate sheets , add the codes below
  var group = ["group1","group2","group3"];
  var groupid = ["(group1's id)","(group2's id)","(group3's id)"];
  
  for(var i=0;i<3;i++){
    if(form.group == group[i]){
      var id = groupid[i];
      var spreadSheet = SpreadsheetApp.openById(id);
      var sheet = spreadSheet.getSheetByName("(sheet name that you add the data to)"); 
      var lastRow = sheet.getLastRow();
      
      var range = sheet.getRange(lastRow + 1, 1);  
      range.setValue(d);
      var range = sheet.getRange(lastRow + 1, 2);  
      range.setValue(form.date);  
      var range = sheet.getRange(lastRow + 1, 3);  
      range.setValue(form.category);  
      var range = sheet.getRange(lastRow + 1, 4);  
      range.setValue(form.group);  
      var range = sheet.getRange(lastRow + 1, 5);  
      range.setValue(form.name);  
      var range = sheet.getRange(lastRow + 1, 6);  
      range.setValue(form.why);
      var range = sheet.getRange(lastRow + 1, 7);  
      range.setValue(form.price);

      var range = sheet.getRange(lastRow + 2, 1);  
      range.setValue(d);
      var range = sheet.getRange(lastRow + 2, 2);  
      range.setValue(form.date1);  
      var range = sheet.getRange(lastRow + 2, 3);  
      range.setValue(form.category1);  
      var range = sheet.getRange(lastRow + 2, 4);  
      range.setValue(form.group);  
      var range = sheet.getRange(lastRow + 2, 5);  
      range.setValue(form.name);  
      var range = sheet.getRange(lastRow + 2, 6);  
      range.setValue(form.why1);
      var range = sheet.getRange(lastRow + 2, 7);  
      range.setValue(form.price1);

      var range = sheet.getRange(lastRow + 3, 1);  
      range.setValue(d);
      var range = sheet.getRange(lastRow + 3, 2);  
      range.setValue(form.date2);  
      var range = sheet.getRange(lastRow + 3, 3);  
      range.setValue(form.category2);  
      var range = sheet.getRange(lastRow + 3, 4);  
      range.setValue(form.group);  
      var range = sheet.getRange(lastRow + 3, 5);  
      range.setValue(form.name);  
      var range = sheet.getRange(lastRow + 3, 6);  
      range.setValue(form.why2);
      var range = sheet.getRange(lastRow + 3, 7);  
      range.setValue(form.price2);
 
      var range = sheet.getRange(lastRow + 4, 1);  
      range.setValue(d);
      var range = sheet.getRange(lastRow + 4, 2);  
      range.setValue(form.date3);
      var range = sheet.getRange(lastRow + 4, 3);  
      range.setValue(form.category3);    
      var range = sheet.getRange(lastRow + 4, 4);  
      range.setValue(form.group);  
      var range = sheet.getRange(lastRow + 4, 5);  
      range.setValue(form.name);  
      var range = sheet.getRange(lastRow + 4, 6);  
      range.setValue(form.why3);
      var range = sheet.getRange(lastRow + 4, 7);  
      range.setValue(form.price3);
      
      var range = sheet.getRange(lastRow + 5, 1);  
      range.setValue(d);
      var range = sheet.getRange(lastRow + 5, 2);  
      range.setValue(form.date4);
      var range = sheet.getRange(lastRow + 5, 3);  
      range.setValue(form.category4);    
      var range = sheet.getRange(lastRow + 5, 4);  
      range.setValue(form.group);  
      var range = sheet.getRange(lastRow + 5, 5);  
      range.setValue(form.name);  
      var range = sheet.getRange(lastRow + 5, 6);  
      range.setValue(form.why4);
      var range = sheet.getRange(lastRow + 5, 7);  
      range.setValue(form.price4);
  
    }
  }
}


function doGet() {  
  var html = HtmlService.createTemplateFromFile('reportInput');  
  return html.evaluate();  
}  
