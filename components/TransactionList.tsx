import React from "react";
import { View, Text } from "./Themed";
import { MonthData } from "@/services/account";
import { Divider } from "react-native-paper";

type TransactionListProps = {
  monthTransactions: MonthData[];
};

const TransactionList = ({ monthTransactions }: TransactionListProps) => {
  return (
    <View darkColor="red">
      {monthTransactions.map((element) => {
        return (
          <><View key={element.description} darkColor="blue">
            <Text>{element.date}</Text>
            <Text>{element.currency}</Text>
            <Text>{element.description}</Text>
            <Text>{element.value}</Text>
            <Text>{element.category}</Text>
            <Text>{element.valueInDolars}</Text>
          </View><Divider /></>
        );
      })}
    </View>
  );
};

export default TransactionList;
