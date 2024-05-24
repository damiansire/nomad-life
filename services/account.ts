import { GoogleSpreadsheet } from "google-spreadsheet";

export type MonthData = {
  date: string;
  currency: string;
  description: string;
  value: string;
  category: string;
  valueInDolars: string;
};

export const getMonthData = async () => {
  try {
    const sheetId = process.env.EXPO_PUBLIC_MONTH_DATA_SHEET_ID || "";
    const apiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY || "";
    const doc = new GoogleSpreadsheet(sheetId, {
      apiKey,
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows<MonthData>();
    return rows.map((row) => {
      return {
        date: row.get("date"),
        currency: row.get("currency"),
        description: row.get("description"),
        value: row.get("value"),
        category: row.get("category"),
        valueInDolars: row.get("valueInDolars"),
      };
    });
  } catch (error) {
    console.log("api key:", process.env.EXPO_PUBLIC_GOOGLE_API_KEY);
    console.log("error", error);
  }
};
