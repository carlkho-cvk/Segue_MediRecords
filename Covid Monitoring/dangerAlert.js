function dangerAlert() {
  // Check if O2/Temp is irregular
  var patientVitalsRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Charts").getRange("F2");
  var patientVitals = patientVitalsRange.getValue();
  var ui = SpreadsheetApp.getUi();
  // Check totals sales
  if (patientVitals == "TRUE") {
    ui.alert('WARNING for Patient X!');
  }
}