import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { MoneyFlow, MonthData, getMonthData } from "@/services/account";
import { useEffect, useState } from "react";
import TransactionList from "@/components/TransactionList";
import { Avatar, Card, IconButton } from "react-native-paper";
import DateWizard from "date-wizard-pro";


const Statistic = ({ title, value }: { title: string; value: string }) => {
  return (
    <Card.Title
      title={title}
      subtitle={value}
      left={(props) => <Avatar.Icon {...props} icon="folder" />}
    />
  );
};

const Statistics = ({ data }: { data: any }) => {
  return (
    <View darkColor="gray" style={{ display: "flex", flexDirection: "row" }}>
      <View style={{flexGrow: 1}} darkColor="gray">
        <Statistic title={"Spent: USD"} value={data?.spent}></Statistic>
      </View>
      <View style={{flexGrow: 1}} darkColor="gray">
        <Statistic title={"Flow: USD"} value={data?.moneyFlow}></Statistic>
      </View>
    </View>
  );
};

export default function TabOneScreen() {
  const [selectedDay, setSelectedDay] = useState<string>(DateWizard.getTodayDate());
  const [dayData, setDayData] = useState<any>({ date: "" });
  const [diaryFlowMoney, setDiaryFlowMoney] = useState<MoneyFlow[]>([]);
  const [monthTransactions, setMonthTransactions] = useState<MonthData[]>([]);
  useEffect(() => {
    getMonthData().then((x) => {
      if (x) {
        setMonthTransactions(x.transactionsRows);
        setDiaryFlowMoney(x.diaryFlowMoney);
      }
    });
  }, []);

  useEffect(() => {
    const selectedDayData = diaryFlowMoney.find(
      (x) => x.day === DateWizard.getTodayDate()
    );
    setDayData(selectedDayData);
  }, [diaryFlowMoney]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedDay}</Text>
      <Statistics data={dayData}></Statistics>
      <View style={styles.separator} lightColor="#eee" darkColor="yellow" />
      <TransactionList monthTransactions={monthTransactions}></TransactionList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
