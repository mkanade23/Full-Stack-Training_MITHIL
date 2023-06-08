
document.addEventListener('DOMContentLoaded', function () {
    const headerContent = () => {
        const header = document.getElementById("navbar-list");
        header.appendChild(headerLeft());
        header.appendChild(headerSearchbar());
        header.appendChild(locationContainer());
        header.appendChild(headerRight());
        return header;
    }
    headerContent();
});
const headerLeft = () =>{
    const headerLeft = document.createElement('div');
    headerLeft.className = "left"

    headerLeft.appendChild(headerButton());
    headerLeft.appendChild(headerWebsite1());
    headerLeft.appendChild(headerWebsite2());
    return headerLeft;
}
const headerButton = () => {
    const headerLeftButton = document.createElement("div");
    headerLeftButton.className = "toggle-button";


    const headerLeftBtn = document.createElement("btn");
    headerLeftBtn.className = "fa fa-bars";
    headerLeftButton.appendChild(headerLeftBtn);
    return headerLeftButton;

}
const headerWebsite1 = () => {
    const headerWebsiteLogo1 = document.createElement("div");
    headerWebsiteLogo1.className = "website-logo1";

    const headerWebsiteLogo1Img = document.createElement('img');
    headerWebsiteLogo1Img.setAttribute('src', "./logo.svg");
    headerWebsiteLogo1Img.setAttribute('alt', 'logo');

    headerWebsiteLogo1.appendChild(headerWebsiteLogo1Img);
    return headerWebsiteLogo1;
}

const headerWebsite2 = () => {
    const headerWebsiteLogo2 = document.createElement("div");
    headerWebsiteLogo2.className = "website-logo2";

    const headerWebsiteLogo2Img = document.createElement('img');
    headerWebsiteLogo2Img.setAttribute('src', "./logo2.png");
    headerWebsiteLogo2Img.setAttribute('alt', 'logo');

    headerWebsiteLogo2.appendChild(headerWebsiteLogo2Img);
    return headerWebsiteLogo2;
}
const headerSearchbar = () => {
    const searchbarContainer = document.createElement("div");
    searchbarContainer.className ="searchbar";
    const searchbarBox=document.createElement("input");
    searchbarBox.setAttribute("placeholder","Search for product");
    searchbarBox.setAttribute("type","text");

    const searchIcon= document.createElement('i');
    searchIcon.className='fa fa-search';
    searchIcon.setAttribute("style","color:black");

   searchbarContainer.appendChild(searchbarBox);
   searchbarContainer.appendChild(searchIcon);
    return searchbarContainer;
}

const locationContainer=()=>{
    const locationContainer=document.createElement("div");
    locationContainer.className="location-container";
    // locationContainer.setAttribute("style","font-size: 12px");
     
    const locationIcon=document.createElement("div");
    locationIcon.className="location-icon";
    

    const locationLogo=document.createElement("i");
    locationLogo.className="fas fa-map-marker-alt";

    const locationDeliveryInfo=document.createElement("div");
    locationDeliveryInfo.className="locationDeliveryInfo";
    // locationDeliveryInfo.setAttribute("style","color: rgb(14, 90, 167)");

    const locationDeliveryTitle=document.createElement("div");
    locationDeliveryTitle.className="delivery-title";
    locationDeliveryTitle.innerHTML="Deliver to";

    const locationDeliveryAddress=document.createElement("div");
    locationDeliveryAddress.className="delivery-address";
    locationDeliveryAddress.innerHTML="<b>Dubai Fetival City - D...</b>";

    const locationDeliveryAddressChange=document.createElement("div") ;
    locationDeliveryAddressChange.className="delivery-change";
    locationDeliveryAddressChange.innerHTML="<b>change</b>";





    locationContainer.appendChild(locationIcon);
    locationContainer.appendChild(locationDeliveryInfo);
    locationContainer.appendChild(locationDeliveryAddressChange);
    locationIcon.appendChild(locationLogo,);
      locationDeliveryInfo.appendChild(locationDeliveryTitle);
      locationDeliveryInfo.appendChild(locationDeliveryAddress);
    
    return locationContainer; 
}

const headerRight=()=>{
    const headerRight = document.createElement('div');
    headerRight.className = "right";
    headerRight.appendChild(Account());
    headerRight.appendChild(nationFlag());
    headerRight.appendChild(shoppingCart());
    return headerRight;

}
const Account=()=>{
    const accountId=document.createElement("div");
    accountId.className="userid";

    const accountIcon=document.createElement("div");
    accountIcon.className="account";

    const accountLogo=document.createElement("i");
    accountLogo.className="fa fa-user";
    accountLogo.setAttribute("style","color: rgb(14, 90, 167)")
   

    const loginData=document.createElement("div");
    loginData.className="login";
    loginData.innerHTML="<b>Login & Register</b>";

    accountId.appendChild(accountIcon);
    accountIcon.appendChild(accountLogo);
    accountId.appendChild( loginData);
    return accountId;
}
const nationFlag=()=>{
    const countryFlag=document.createElement("div");
    countryFlag.className="country";

    const flag=document.createElement("div");
    flag.className="flag";

const flagImage=document.createElement("img");
    flagImage.setAttribute("src","./icons8-united-arab-emirates-96.png");
    flagImage.setAttribute("alt","country-flag");
    flagImage.setAttribute("style","width:30px;height:30px")

    const arrowIcon=document.createElement("div");
    arrowIcon.className="arrow";
    arrowIcon.className="fas fa-chevron-down";
    arrowIcon.setAttribute("style","color: rgb(14, 90, 167)")

    countryFlag.appendChild(flag);
    flag.appendChild(flagImage);
    flag.appendChild(arrowIcon);
    return countryFlag;
}

const shoppingCart=()=>{
    const cart=document.createElement("div");
    cart.className="cart";

    
   


const cartIcon=document.createElement("i");
    cartIcon.className="fas fa-shopping-cart";

    cart.appendChild(cartIcon);
    return cart; 
}

 var cartCount =0;
 var isSpanAdded = false;
 const productIdMap=new Map();

function handleAddToCartClick(event) {
    const target = event.target;
    const column = target.closest('.col');
    const productIdElement = column.querySelector('.product-id');
    const productId = productIdElement.textContent;

    if(productIdMap.has(productId)){
        productIdMap.set(productId,  productIdMap.get(productId)+1);
    }else{
        productIdMap.set(productId,  1);

    }

    
      cartCount++;

     
      if(!isSpanAdded){
        const cartElement = document.getElementsByClassName("cart")[0];
      const cartCountElement = document.createElement('span');
        cartCountElement.id = "cart-count";
        cartCountElement.textContent = cartCount;
        cartElement.appendChild(cartCountElement);
        isSpanAdded=true;
      }else{
        const cartCountElement = document.getElementById('cart-count');
      cartCountElement.textContent = cartCount;
      }
 

        
        const existingRemoveButton = column.querySelector('.remove-from-cart');
        if (!existingRemoveButton) { 
         const removeButton = document.createElement('button');
        removeButton.textContent = '-';
        removeButton.className = 'remove-from-cart';
        removeButton.addEventListener('click', handleRemoveFromCartClick);
        const column = target.closest('.col')
        column.appendChild(removeButton);

        const productCount = document.createElement('span');
        productCount.id = "product-count";
          column.appendChild(productCount);
      }
      const productCount = column.querySelector('#product-count');
      productCount.textContent = productIdMap.get(productId);

    
  } 
  
  function handleRemoveFromCartClick(event) {
    const cartCountElement = document.getElementById("cart-count");
    const target = event.target;
  
    const column = target.closest('.col');
    const productIdElement = column.querySelector('.product-id');
    const productId = productIdElement.textContent;
    cartCount--;
    productIdMap.set(productId, productIdMap.get(productId)-1);
    const productCount = column.querySelector('#product-count');
      productCount.textContent = productIdMap.get(productId);
    if(productIdMap.get(productId)===0){
    column.removeChild(target);
    column.removeChild(productCount);
    }
    cartCountElement.textContent = cartCount;
 
  
  
  }


document.addEventListener('DOMContentLoaded', function () {

    const productContent = () => {
        for (let i = 0; i < 9; i++) {
            const container = document.getElementById('products-list');
            const productCard = document.createElement('div');
            productCard.className = 'col';
            container.appendChild(productCard);

            const productId = document.createElement('div');
            productId.className = 'product-id';
            productId.innerHTML =  i;
            productCard.appendChild(productId);

            const productImage = document.createElement('div');
            productImage.className = 'image';
            productCard.appendChild(productImage);
    

            const productImg = document.createElement('img');
            productImg.setAttribute('src', "./1901653_main.jpg_200Wx200H");
            productImg.setAttribute('alt', 'iphone');
            productImage.appendChild(productImg);

            const productName = document.createElement('div');
            productName.className = 'iphone-name';
            productCard.appendChild(productName);

            const productPhone = document.createElement('p');
            productPhone.innerHTML = 'Apple iPhone 14 256GB 5G Starlight';
            productName.appendChild(productPhone);

            const productCompany = document.createElement('div');
            productCompany.className = "company";
            productCompany.innerHTML = "Sold by BLUE HORIZON &amp; Delivered by Carrefour";
            productCard.appendChild(productCompany);

            const productPrice = document.createElement('p');
            productPrice.className = 'price';
            productPrice.innerHTML = '<b>AED 3477.55/peice</b>';
            productCard.appendChild(productPrice);

            const productBtn = document.createElement('div');
            productBtn.className = 'bttn';
            productCard.appendChild(productBtn)

            const productButton = document.createElement('button');
            productButton.className = "Add-To-Cart";
            productButton.innerHTML = "+";
            productButton.addEventListener('click', handleAddToCartClick);

            productBtn.appendChild(productButton);

        }
    }
    productContent();
});

