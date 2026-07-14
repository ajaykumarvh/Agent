# AI Agent Orchestration Blueprint

This document outlines the natural-language routing logic designed for deployment within Google Workspace Studio. 

## Trigger Parameters
* **Event Source:** Google Drive
* **Event Action:** New File Added to Folder Path
* **Conditional Filter Guardrail:** Execute ONLY IF file format strictly matches `.pdf`. (This limit-shield protects the 400-run monthly quota).

## The AI Directive (Core Logic)
The following natural language command is designed to act as the behavioral brain for the Workspace Agent:

> "Analyze the inbound file metadata text fields using native intelligence. Extract the item name string, identify the user email address, and compare the numbers to our master log spreadsheet. Route a high-visibility summary approval card straight to our operations team chat channel window if values match compliance standards."
