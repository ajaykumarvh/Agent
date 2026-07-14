---

## 🚀 How to Run & Test This Project (Live Demo Instructions)

Want to see this automation generate a PDF automatically in your own Google Drive? Follow these 5 quick steps:

### Prerequisites
1. A Google Account (Drive, Docs, Sheets).

### Step-by-Step Setup
1. **Clone the Database:** Create a Google Sheet with two tabs: `Master_Logs` and `Team_Directory`.
2. **Create the Document Template:** Create a blank Google Doc, add your layout, and include placeholders: `<<Item_Name>>` and `<<Operational_Status>>`.
3. **Deploy the Code:** 
   * Open **Extensions > Apps Script** in your Google Sheet.
   * Paste the code from `backend_factory.js`.
   * Replace `YOUR_DOC_TEMPLATE_ID` and `YOUR_DRIVE_FOLDER_ID` with your own file IDs.
4. **Enable the Event Trigger:**
   * Go to **Triggers (Alarm Clock icon)** in Apps Script.
   * Add a new trigger: `createOfficialPDF` | `From spreadsheet` | `On change`.
5. **Test the Pipeline:** Add a new row to your `Master_Logs` sheet (or via AppSheet). Check your Google Drive folder—the PDF will generate automatically!

---

## 📸 Automated Execution Evidence

| AppSheet Frontend Form | Automated Execution Log | Generated PDF Output |
| :---: | :---: | :---: |
| *(Insert AppSheet Screenshot)* | *(Insert Execution Log Screenshot)* | *(Insert Generated PDF Screenshot)* |
