const Spreadsheet = require('edit-google-spreadsheet');

const loadSpreadsheet = () => {
  Spreadsheet.load({
    debug: true,
    spreadsheetId: '12Jfhki-DHTp1LmyMLWhU1WIYbi9LySEWO38KO-6L5Mo',
    worksheetName: 'Sheet1',
    accessToken: {
      type: 'Bearer',
      token: 'ya29.GlvABRfZQQ6DBSUfvniDZUsZIaDtBtFaAL9r8TqZxEfmXuCY33lEOfCgnpd5SyNgLajRBjpAUJAlBbm4uuxMQVODMQnaILxnBhtLzjZVBKOYVz8_pRXeIJ4498n7'
    },
  }, (err, sheet) => {
    console.log(sheet.raw)
    sheet.add({ 3: { 5: "hello!" } });

    sheet.send(function(err) {
      if(err) throw err;
      console.log("Updated Cell at row 3, column 5 to 'hello!'");
    });
  })
}

loadSpreadsheet();
