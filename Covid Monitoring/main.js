function dangerAlert() {
    // Check if O2/Temp is irregular
    var patientVitalsRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Charts").getRange("F2");
    var patientVitals = patientVitalsRange.getValue();
    // Check mortality
    if (patientVitals == "TRUE") {
        // Fetch the email address
        var emailRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("docRegs").getRange("B2");
        var emailAddress = emailRange.getValues();
        // Send Alert Email.
        var message = 'This is your Alert email!'; // Second column
        var subject = 'Your Google Spreadsheet Alert';
        MailApp.sendEmail(emailAddress, subject, message);
    }
}