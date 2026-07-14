/**
 * Google Apps Script: Automated Document Compilation Factory
 * Architecture: Event-driven background utility
 * Trigger: On Change (Fires automatically when AppSheet submits a new row)
 */

function createOfficialPDF() {
  try {
    // 1. Establish environmental targets
    var templateId = "YOUR_DOC_TEMPLATE_ID"; 
    var folderId = "YOUR_DRIVE_FOLDER_ID"; 

    // 2. Access the secure database layer (Google Sheets)
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Master_Logs");
    var lastRow = sheet.getLastRow();
    var rowData = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    // 3. Extract the clean data variables
    var logId = rowData[0];
    var itemName = rowData[1];
    var status = rowData[3];

    // 4. Clone the master template into a temporary file
    var templateFile = DriveApp.getFileById(templateId);
    var targetFolder = DriveApp.getFolderById(folderId);
    var copiedFile = templateFile.makeCopy("Temp_Log_" + logId, targetFolder);
    
    // 5. Inject variables into the document structure
    var doc = DocumentApp.openById(copiedFile.getId());
    var body = doc.getBody();
    body.replaceText("<<Item_Name>>", itemName);
    body.replaceText("<<Operational_Status>>", status);
    doc.saveAndClose(); 
    
    // 6. Render as an immutable PDF and archive
    var pdfBlob = copiedFile.getAs('application/pdf');
    targetFolder.createFile(pdfBlob).setName("Official_Log_" + logId + ".pdf");
    
    // Clean up temporary assets
    copiedFile.setTrashed(true); 
    
    // 7. Push success state to the system flight recorder
    Logger.log("SUCCESS: Transaction cleared without data anomalies. PDF created for " + itemName);

  } catch (error) {
    // Prevent silent pipeline crashes by intercepting the runtime error
    Logger.log("CRITICAL EXCEPTION TRACKED: " + error.toString());
  }
}
