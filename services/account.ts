import { GoogleSpreadsheet } from "google-spreadsheet";

export type MonthData = {
  date: string;
  currency: string;
  description: string;
  value: string;
  category: string;
  valueInDolars: string;
};

export type MoneyFlow = {
  day: string;
  moneyFlow: string;
  spent: string;
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

    const rows = await sheet.getRows<any>();
    const transactionsRows : MonthData[] = rows.map((row) => {
      return {
        date: row.get("date"),
        currency: row.get("currency"),
        description: row.get("description"),
        value: row.get("value"),
        category: row.get("category"),
        valueInDolars: row.get("valueInDolars"),
      };
    });

    const filteredTransactionsRows = transactionsRows.filter((row) => {
      return (
        row.date !== "" &&
        row.currency !== "" &&
        row.description !== "" &&
        row.value !== "" &&
        row.category !== "" &&
        row.valueInDolars !== ""
      );
    });

    const diaryFlowMoney : MoneyFlow[] = rows.map((row) => {
      return {
        day: row.get("Dia"),
        spent: row.get("Egresos en dolares"),
        moneyFlow: row.get("Saldo neto"),
      };
    });

    return {
      transactionsRows: filteredTransactionsRows,
      diaryFlowMoney
    };
  } catch (error) {
    console.log("api key:", process.env.EXPO_PUBLIC_GOOGLE_API_KEY);
    console.log("error", error);
  }
};
