import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import add_to_cart from "../../assets/img/add_to_cart.png";

const Cart = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View
          style={{
            flex: 5,
            marginTop: 90,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>ADD TO CART</Text>
        </View>
        <View
          style={{
            flex: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
            eros nisl, non vestibulum risus luctus ac. Nullam dapibus est lorem,
            sed varius massa scelerisque volutpat. Suspendisse potenti.
            Phasellus a nunc dolor.
          </Text>
        </View>
        <View style={{ flex: 45 }}>
          <Image
            source={add_to_cart}
            style={{
              width: 380,
              height: 290,
              resizeMode: "contain",
              marginLeft: 18,
            }}
          />
        </View>
        <View
          style={{
            flex: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 40,
              paddingRight: 40,
              backgroundColor: "steelblue",
              borderRadius: 10,
              // marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            // backgroundColor: "lavender",
            flex: 10,
            flexDirection: "row",
            marginTop: 10,
            paddingVertical: 32,
          }}
        >
          <View
            style={{ flexDirection: "row", marginLeft: 150, marginTop: 10 }}
          >
            <View
              style={{
                backgroundColor: "grey",
                width: 10,
                height: 15,
                borderColor: "red",
                borderRadius: 10,
                marginHorizontal: 2,
              }}
            ></View>
            <View
              style={{
                backgroundColor: "blue",
                width: 20,
                height: 15,
                // borderColor: "red",
                borderRadius: 10,
                marginHorizontal: 2,
              }}
            ></View>
            <View
              style={{
                backgroundColor: "grey",
                width: 10,
                height: 15,
                borderRadius: 10,
                marginHorizontal: 2,
              }}
            ></View>
          </View>
          <TouchableOpacity
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "lightgrey",
              borderRadius: 10,
              marginBottom: 20,
              marginLeft: 100,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default Cart;
