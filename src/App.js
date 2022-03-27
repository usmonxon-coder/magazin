import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import "./App.css";
import Foter from "./components/Foter";
import Korzinka from "./components/Korzinka";
import Navbar from "./components/Navbar";
import PageNoteFound from "./components/PageNoteFound";
import Products from "./components/Products";
import Section from "./components/Section";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        imgUrl: "/images/1.jpg",
        Name: "samsung galaxy a12",
        Brand: "Samsung",
        Price: "180",
      },
      {
        id: 2,
        imgUrl: "/images/2.jpg",
        Name: "samsung galaxy s10",
        Brand: "Samsung",
        Price: "400",
      },
      {
        id: 3,
        imgUrl: "/images/3.jpg",
        Name: "Honor 10s",
        Brand: "Honor",
        Price: "550",
      },
      {
        id: 4,
        imgUrl: "/images/4.jpg",
        Name: "Samsung galaxy a52",
        Brand: "Samsung",
        Price: "300",
      },
      {
        id: 5,
        imgUrl: "/images/5.jpg",
        Name: "Samsung galaxy a32",
        Brand: "Samsung",
        Price: "500",
      },
      {
        id: 6,
        imgUrl: "/images/6.jpg",
        Name: "Iphone 13 pro",
        Brand: "Apple",
        Price: "1300",
      },
      {
        id: 7,
        imgUrl: "/images/7.jpg",
        Name: "Iphone 13 pro max",
        Brand: "Apple",
        Price: "1500",
      },
      {
        id: 8,
        imgUrl: "/images/8.jpg",
        Name: "Vivo v32",
        Brand: "Vivo",
        Price: "430",
      },
      {
        id: 9,
        imgUrl: "/images/9.jpg",
        Name: "Vivo y21s",
        Brand: "Vivo",
        Price: "360",
      },
      {
        id: 10,
        imgUrl: "/images/10.jpg",
        Name: "Vivo v30s",
        Brand: "Vivo",
        Price: "1200",
      },
      {
        id: 11,
        imgUrl: "/images/11.jpg",
        Name: "Realme v20",
        Brand: "Realme",
        Price: "620",
      },
      {
        id: 12,
        imgUrl: "/images/12.jpg",
        Name: "Realme v50",
        Brand: "Realme",
        Price: "580",
      },
    ],
    current: 1,
    currentProduct: 1,
    selectedProducts: [
      {
        id: 1,
        imgUrl: "/images/1.jpg",
        Name: "samsung galaxy a12",
        Brand: "Samsung",
        Price: "180",
        count: 1,
      },
    ],
    selectedProductsCount: 1,
    totalprice: 180,
    person: {
      name: "Bill gets",
      cardNumber: "12",
      password: "77",
      balance: 4000,
    },
    isMatch: false,
  };

  AddProduct = (item) => {
    let myItem = item;
    let product = this.state.selectedProducts;
    let id = item.id;
    let myindex = this.state.selectedProducts.findIndex(
      (item1) => item1.id === id
    );
    if (myindex !== -1) {
      product[myindex].count += this.state.current;
    } else {
      myItem.count = this.state.current;
      product.push(myItem);
    }
    this.setState({
      current: 1,
      selectedProducts: product,
    });
    this.changeNews();
  };

  currentchange = (id, status) => {
    if (status === "plus") {
      this.setState({
        current: this.state.current + 1,
      });
    } else if (status === "minus" && this.state.current > 1) {
      this.setState({
        current: this.state.current - 1,
      });
    }
  };

  delete = (id) => {
    let index = this.state.selectedProducts.findIndex((item) => item.id === id);
    let products = this.state.selectedProducts;
    products.splice(index, 1);
    this.setState({
      selectedProducts: products,
    });
    this.changeNews();
  };

  changeNews = () => {
    let products = this.state.selectedProducts;
    let price = 0;
    let counter = 0;
    for (let i = 0; i < products.length; i++) {
      price += products[i].count * products[i].Price;
      counter += products[i].count;
    }
    this.setState({
      totalprice: price,
      selectedProductsCount: counter,
    });
    localStorage.setItem("selectedProducts", JSON.stringify(products));
    localStorage.setItem("totalprice", JSON.stringify(price));
    localStorage.setItem("selectedProductsCount", JSON.stringify(counter));
  };

  changeNewscount = (status, index) => {
    let selectedProducts = this.state.selectedProducts;
    if (status === "plus") {
      selectedProducts[index].count += 1;
    } else if (status === "minus" && selectedProducts[index].count > 1) {
      selectedProducts[index].count -= 1;
    }
    this.setState({
      selectedProducts: selectedProducts,
    });
    this.changeNews();
  };
  cheekPay = (cardNumber, password) => {
    if (
      cardNumber === this.state.person.cardNumber &&
      password === this.state.person.password
    ) {
      if (this.state.person.balance >= this.state.totalprice) {
        let myPerson = this.state.person;
        myPerson.balance -= this.state.totalprice;
        this.setState({
          person: myPerson,
          totalprice: 0,
          selectedProducts: [],
          selectedProductsCount: 0,
          isMatch: true,
        });
        localStorage.setItem("selectedProducts", JSON.stringify([]));
        localStorage.setItem("totalprice", JSON.stringify(0));
        localStorage.setItem("selectedProductsCount", JSON.stringify(0));
        localStorage.setItem("balance", JSON.stringify(myPerson.balance));
        toast.success("Harid amalga owirildi");
      } else {
        toast.error("hisobingizda mablag yetarli emas");
      }
    } else {
      this.setState({
        isMatch: false,
      });
    }
  };

  componentDidMount = () => {
    // localStorage.setItem("balance", JSON.stringify(4000));
    let person = this.state.person;
    person.balance = JSON.parse(localStorage.getItem("balance"))
      ? JSON.parse(localStorage.getItem("balance"))
      : 0;
    this.setState({
      selectedProducts: JSON.parse(localStorage.getItem("selectedProducts"))
        ? JSON.parse(localStorage.getItem("selectedProducts"))
        : [],
      totalprice: JSON.parse(localStorage.getItem("totalprice"))
        ? JSON.parse(localStorage.getItem("totalprice"))
        : 0,
      selectedProductsCount: JSON.parse(
        localStorage.getItem("selectedProductsCount")
      )
        ? JSON.parse(localStorage.getItem("selectedProductsCount"))
        : 0,
      person: person,
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar
            selectedProductsCount={this.state.selectedProductsCount}
            selectedProducts={this.state.selectedProducts}
            totalprice={this.state.totalprice}
            person={this.state.person}
          />
          <Routes>
            <Route path="/" element={<Section />} />
            <Route
              path="/Products"
              element={
                <Products
                  mahsulot={this.state.products}
                  currentchange={(item, item2) =>
                    this.currentchange(item, item2)
                  }
                  current={this.state.current}
                  AddProduct={(item) => this.AddProduct(item)}
                />
              }
            />
            <Route
              path="/Korzinka"
              element={
                <Korzinka
                  current={this.state.current}
                  currentchange={this.currentchange}
                  delete={(nima) => this.delete(nima)}
                  totalprice={this.state.totalprice}
                  changeNewscount={(bir, ikki) =>
                    this.changeNewscount(bir, ikki)
                  }
                  cheekPay={(biri, ikki) => this.cheekPay(biri, ikki)}
                  selectedProducts={this.state.selectedProducts}
                  isMatch={this.state.isMatch}
                />
              }
            />
            <Route path="*" element={<PageNoteFound />} />
          </Routes>
          <Foter />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
