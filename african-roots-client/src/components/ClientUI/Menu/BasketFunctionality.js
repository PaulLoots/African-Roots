// import React, { Component }  from 'react';
// import { initStore, register, poke } from 'bazar'
// import 'bootstrap/js/src/modal'
// import jQuery from 'jquery'
// import axios from "axios";

// import Header from './Header';
// import Login from '../Home/Login';
// import CreateAccount from '../Home/CreateAccount';
// import Reciepts from './Reciepts';
// import MenuItemDetails from './MenuItemDetails';

// const menuItems = [
//   { name: "Apple Pancakes", image: "apple-pancakes.jpeg", text: "item 1", price: 61 },
//   { name: "FoodItem 2", image: "baked-pepper.jpg", text: "item 2", price: 25 },
//   { name: "FoodItem 3", image: "apple-pancakes.jpeg", text: "item 3", price: 49 },
//   { name: "FoodItem 4", image: "apple-pancakes.jpeg", text: "item 4", price: 80 }
// ];

// // initializing an empty bazar store
// initStore();

// const FoodItem = props => {
//   const { name, price, image } = props.menuItem;

//   const buy = () => poke("MenuItem", {
//     name,
//     type: "increment"
//   });

//   return (
//     <div className="col-6 col-sm-4 col-md-3 menuItem" data-aos="fade-up">
//     <div className="card" id="menuItemCard">
//         <div className="card-body" style={{backgroundImage: `url(meals-pictures/${image})`,backgroundSize: "cover",backgroundPosition: "center",padding: "0"}}>{/*Food Image*/}
//             <div className="cartTopHalf">
//                 <div className="row blurredRow">
//                     <div className="col foodNameBlock">
//                         <div className="blurredImg" style={{backgroundImage: `url(meals-pictures/${image})`}}></div>
//                         <h4 className="FoodNameLabelWhite">{/*Food Name*/}{name}</h4>
//                     </div>
//                 </div>
//             </div>
//             <div className="row detailsRow">
//                 <div className="col" style={{padding: "0"}}>
//                     <h4 className="FoodPriceLabelMoney">{/*Food Price*/}R {price}</h4>
//                     <div className="softLine textSoft"></div>
//                     <p className="addBasketBtn DarkGreen" onClick={() => buy()}><img src="assets/img/shopping-basket-4.svg" className="cartImg add"></img>Add to Basket</p>
//                 </div>
//             </div>
//         </div>
//     </div> 
//     </div>
//   );
// };

// const Shop = props => {
//   const items = () => {
//     return props.menuItems.map((menuItem, index) => {
//       return <FoodItem data-aos="fade-up" menuItem={menuItem} key={index} />;
//     });
//   };

//   return <div className="row" style={{margin: '0px'}}>{items()}</div>;
// };

// const Cart = props => {
//   let total = 0;
//   const purchases = props.items.map((item, index) => {
//     const { name, price, quantity } = item;
//     const currentImport = quantity * price;
//     total += currentImport;
//     return (
//         <li key={index}>
//             <div className="row cartItem">
//                 <div className="col-3 cartItemImg">{/*Food Image*/}</div>
//                 <div className="col cartItem">
//                     <div className="row">
//                     <div className="col">
//                         <p className="FoodNameLabelBlack">{/*Food Name*/}{name}</p>
//                     </div>
//                     </div>
//                     <div className="row">
//                     <div className="col cartItemPriceCol">
//                         <p className="FoodPriceLabelMoneyLeft">{/*Food Price*/}R {price}</p>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="col cartItem">
//                     <div className="row">
//                     <div className="col">
//                         <i className="la la-close float-right hoverItem" onClick={() => poke("MenuItem", { name, type: "remove" })}></i>
//                     </div>
//                     </div>
//                     <div className="row cartItemAmountSelect">
//                     <div className="col d-inline-flex cartItemAmountSelectCol">
//                         <i className="la la-minus float-left hoverItem" onClick={() => poke("MenuItem", { name, type: "decrement" })}></i>
//                         <p className="text-center FoodNameLabelBlack">{/*Food Amount*/}{item.quantity}</p>
//                         <i className="la la-plus float-right hoverItem" onClick={() => poke("MenuItem", { name, type: "increment" })}></i></div>
//                     </div>
//                     <span className="cartmenuItemImport"> R {currentImport}</span>
//                 </div>
//             </div>
//             <div className="cartItemDevider"></div>
//         </li>
//     );
//   });

//   return (

//     <div className="col cartContainer ccDown" id="cartContainer" >
//         <div className="row d-lg-none cartHead" id="cartHeadBtn">
//             <div className="col-12 cartTab">
//                 <div id="tabDown" ></div><img src="assets/img/Shivron.svg" id="tabUp" ></img></div>
//             <div className="col-4 noPadding">
//                 <p className="basketHead"><img src="assets/img/shopping-basket-7.svg" className="cartImg2"></img>Basket</p>
//             </div>
//             <div className="col">
//                 <p className="cartAmountTxt" >{/*Cart Item Amount*/}{purchases.length}</p>
//             </div>
//             <div className="col-4 noPadding" id="basketTotalColumn" >
//                 <p className="basketTotal">{/*Cart Total*/}R {total}</p>
//             </div>
//         </div>
//         <div className="row cartContent">
//             <div className="col-12 d-none d-lg-block cartHeadColumn">
//                 <p className="text-right cartAmountTxt" >{/*Cart Item Amount*/}{purchases.length} Items</p>
//             </div>
//             <div className="col-12 cartBody">

//             <ul>{purchases.length === 0 ? "No items in Cart" : purchases}</ul>

//                 <div className="heightStopper"></div>
//             </div>
//             <div className="col-12 CartTotalSection">
//                 <div className="row">
//                     <div className="col">
//                         <p className="FoodNameLabelBlack">Total</p>
//                     </div>
//                     <div className="col">
//                         <p className="text-right cartTotalPriceLabel">{/*Cart Total*/}R {total}</p>
//                     </div>
//                 </div>
//                 <div className="row" id="loginToOrder">{/*Before Login*/}
//                     <div className="col"><button className="btn btn-dark btn-lg btnLogin" type="button" id="loginToOrderBtn" data-toggle="modal" data-target="loginModal">Login to Order</button></div>
//                 </div>
//                 <div className="row d-none" id="orderBtnRow">{/*After Login*/}
//                     <div className="col-4 helloTxtCol">
//                         <h6 className="text-left d-lg-flex">Hello, {/*User Name*/}Paul</h6>
//                     </div>
//                     <div className="col-8"><button className="btn btn-dark btn-lg btnLogin" type="button" id="orderBtn">Order</button></div>
//                 </div>
//             </div>
//         </div>
//     </div>     
//   );
// };

// class MenuItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         menuItems: menuItems.map(e => ({
//             ...e,
//             quantity: 0
//         }))
//         };

//         register({
//         id: "MenuItem",
//         sync: () => this.state,
//         onPoke: arg => {
//             const { name, type } = arg;
//             const { menuItems } = this.state;
//             this.setState({
//             menuItems: menuItems.map(e => {
//                 const { quantity } = e;
//                 return e.name === name
//                 ? {
//                     ...e,
//                     quantity: (() => {
//                         if (type === "increment") return quantity + 1;
//                         else if (type === "remove") return 0;
//                         return quantity - 1;
//                     })()
//                     }
//                 : e;
//             })
//             });
//         }
//         });

//         this.changeView = this.changeView.bind(this);
//     }

//     changeView = where => this.setState({ view: where });

//             componentDidMount() {

//                 let url = 'https://dev-african-roots.herokuapp.com/api/meals';
//                 return axios(url, {
//                     method: 'GET',
//                     mode: 'no-cors',
//                     headers: {
//                       'Access-Control-Allow-Origin': '*',
//                       'Content-Type': 'application/json',
//                     },
//                     withCredentials: false,
//                     credentials: 'same-origin',
//                   }).then(response => {
//                     console.log(response);
//                   })
//           }
    

//     render() {
//         const { view = "shop", menuItems } = this.state;

//         const quantity = menuItems.map(e => e.quantity).reduce((a, b) => a + b);

//         const inCart = menuItems.filter(e => e.quantity > 0);

//         return (
//             <div>
//                 <div className="background" style={{backgroundSize: '200px',backgroundImage: `url(assets/img/Asset%203.svg)`}}></div>
//                 {/*Nav*/}
//                 <Header />
//                 {/*/Nav*/}


//                 {/*Body Container*/}
//                 <div className="container">
//                     <div className="row">

//                     {/*Menu Cards Container*/}
//                     <div className="col-12 col-lg-8 cardsContainer">
//                     {/* <div className="row" style={{margin: '0px'}}> */}

//                     {/*Menu Card*/}
//                     {/* <MenuItem /> */}
//                     <Shop menuItems={menuItems} />
//                     {/*/Menu Card*/}
//                     {/* </div> */}
//                     </div>
//                     {/*/Menu Cards Container*/}

//                     {/* Cart Container */}
//                     {/* <Cart /> */}
//                     <Cart items={inCart} />
//                     {/* /Cart Container */}

//                     {/* Receipts Container */}
//                     <Reciepts />
//                     {/* /Receipts Container */}
//                     </div>
//                 </div>

//                 {/* /Body Container */}

//                 {/*Menu Item Details Modal*/}
//                 <MenuItemDetails />
//                 {/*/Menu Item Details Modal*/}

//                 {/*Log In Modal*/}
//                 <Login />
//                 {/*/Log In Modal*/}

//                 {/*Sign Up Modal*/}
//                 <CreateAccount />
//                 {/*/Sign Up Modal*/}

//             </div>
            
//         );
//     }
// }

// export default MenuItem;