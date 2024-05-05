import { GoogleSpreadsheet } from "google-spreadsheet";

export const getMonthData = async () => {
  try {
    const sheetId = process.env.EXPO_PUBLIC_MONTH_DATA_SHEET_ID || "";
    const doc = new GoogleSpreadsheet(sheetId, {
      apiKey: process.env.EXPO_PUBLIC_GOOGLE_API_KEY || "",
    });
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    return rows
  } catch (error) {
    console.log("api key:", process.env.EXPO_PUBLIC_GOOGLE_API_KEY);
    console.log("error", error);
  }
};
