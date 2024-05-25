import React from "react";
import { View } from "./Themed";
import { MonthData } from "@/services/account";
import { Avatar, Card, Divider, IconButton } from "react-native-paper";
import { Text } from "react-native-paper";

type TransactionListProps = {
  monthTransactions: MonthData[];
};

const CategoryIcon = (props: any) => {
  const categoryIcons: { [key: string]: string } = {
    Antojos: "candy",
    Transporte: "train-car",
    Comida: "food",
    ComidaSana: "food-apple",
    Alquile: "home",
  };
  let iconId = categoryIcons[props.category] ?? "folder";

  return <Avatar.Icon {...props} icon={iconId} />;
};

const TransactionList = ({ monthTransactions }: TransactionListProps) => {
  return (
    <View  style={{ width: "100%" }}>
      {monthTransactions.map((element, index) => {
        return (
          <View key={index} darkColor="gray">
            <Card.Title 
              title={element.description}
              left={(props) => (
                <CategoryIcon {...props} category={element.category} />
              )}
              right={(props) => {
                return (
                  <View darkColor="gray">
                    <Text variant="headlineSmall">
                      {" "}
                      USD {parseFloat(element.valueInDolars).toFixed(2)}
                    </Text>
                  </View>
                );
              }}
            />
            <Divider />
            
          </ View>
        );
      })}
    </View>
  );
};

export default TransactionList;
