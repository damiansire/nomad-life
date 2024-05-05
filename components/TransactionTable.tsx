import React from "react";
import { View, Text } from "./Themed";
import { MonthData } from "@/services/account";

type TransactionTableProps = {
  monthTransactions: MonthData[];
};

const TransactionTable = ({ monthTransactions }: TransactionTableProps) => {
  return (
    <View>
      <View>
        <Text>date</Text>
        <Text>currency</Text>
        <Text>description</Text>
        <Text>value</Text>
        <Text>category</Text>
      </View>
      {monthTransactions.map((element) => {
        return (
          <View key={element.description}>
            <Text>{element.date}</Text>
            <Text>{element.currency}</Text>
            <Text>{element.description}</Text>
            <Text>{element.value}</Text>
            <Text>{element.category}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default TransactionTable;
