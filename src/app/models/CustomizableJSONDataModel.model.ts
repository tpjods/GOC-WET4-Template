/*
 *  File Description : This file is the data model used to 
 *  
 * 
 */
export interface CustomizableJSONDataModel {

  id?: string;

  // User Information
  firstName?: string;
  lastName?: string;
  level?: string;

  // Event Information
  roleTypeValue?: number;
  roleTypeName?: string;

    // Audit
  trackingNumber?: string;
  statusName?: string;

  createdBy?: string;
  createdOn?: string;

  reviewedBy?: string;
  reviewedOn?: string;
  reviewNotes?: string;

  strNotes?: any[];
}

