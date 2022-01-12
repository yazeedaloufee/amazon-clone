import { createSlice } from "@reduxjs/toolkit";

const sideNavContentSlice = createSlice({
  name: "sideNavContent",
  initialState: [],
  reducers: {
    add(state, action) {
      return action.payload;
    },
  },
});

export default sideNavContentSlice.reducer;
export const { add } = sideNavContentSlice.actions;
export const get = () => {
  return async (dispatch) => {
    const res = await fetch("https://amazon-navbar.herokuapp.com/fetch");
    const sideNavData = await res.json();
    dispatch(add(data));
  };
};
const data = [
  {
    entries: [
      {
        title: "Best Sellers",
      },
      {
        title: "New Releases",
      },
      {
        title: "Movers and Shakers",
      },
    ],
    _id: "60ab69680a5705404d68d9f9",
    title: "Trending",
    type: {
      _id: "61de29652a0fd5001505f5c7",
      rows: false,
      dropDown: false,
    },
  },
  {
    entries: [
      {
        title: "Prime Video",
        entries: [
          {
            title: "Prime Video",
            entries: [
              {
                title: "All Videos",
              },
              {
                title: "Included with Prime",
              },
              {
                title: "Prime Video Channels",
              },
              {
                title: "Rent or Buy",
              },
              {
                title: "Watchlist",
              },
              {
                title: "Purchases & Rentals",
              },
              {
                title: "Watch Anywhere",
              },
            ],
          },
        ],
      },
      {
        title: "Amazon Music",
        entries: [
          {
            title: "Stram Music",
            entries: [
              {
                title: "Amazon Music Unlimited",
              },
              {
                title: "Amazon Music HD",
              },
              {
                title: "Amazon Music Prime",
              },
              {
                title: "Free Streaming Music",
              },
              {
                title: "Open Web Player",
              },
              {
                title: "Amazon Music Apps",
              },
            ],
          },
          {
            title: "Buy Music",
            entries: [
              {
                title: "Buy Music",
                entries: [
                  {
                    title: "CDs & Vinyl",
                  },
                  {
                    title: "Download Store",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Apps for Android",
        entries: [
          {
            title: "Apps For Android",
            entries: [
              {
                title: "All Apps and Games",
              },
              {
                title: "Games",
              },
              {
                title: "Amazon Coins",
              },
              {
                title: "Amazon Apps",
              },
              {
                title: "Your Apps and Subscriptions",
              },
            ],
          },
        ],
      },
    ],
    _id: "60ab69ee0a5705404d68d9fc",
    title: "Digital Content And Devices",
    type: {
      _id: "61de29652a0fd5001505f5c8",
      rows: true,
      dropDown: false,
    },
  },
  {
    entries: [
      {
        title: "Amazon Fresh",
        entries: [
          {
            title: "Amazon Fresh",
            entries: [
              {
                title: "All Amazon Fresh",
              },
              {
                title: "Bread & Bakery",
              },
              {
                title: "Fresh Vegetables",
              },
              {
                title: "Fresh Fruits",
              },
              {
                title: "Meat & Seafood",
              },
            ],
          },
        ],
      },
      {
        title: "Books",
        entries: [
          {
            title: "Books",
            entries: [
              {
                title: "Books",
              },
              {
                title: "Kindle Books",
              },
            ],
          },
          {
            title: "Audible Audiobooks",
            entries: [
              {
                title: "Audible Membership",
              },
              {
                title: "Audible Audiobooks & More",
              },
            ],
          },
        ],
      },
      {
        type: "DROPDOWN",
      },
      {
        title: "Home, Garden, Pets & DIY",
      },
      {
        title: "Toys, Children & Baby",
      },
      {
        title: "Clothes, Shoes, Jewellery and Accessories",
      },
      {
        title: "Sports & Outdoors",
      },
      {
        title: "Food & Grovery",
      },
      {
        title: "Health & Beauty",
      },
      {
        title: "Car & Motorbike",
      },
      {
        title: "Business, Industry & Science",
      },
    ],
    _id: "60ab6a260a5705404d68d9fd",
    title: "Shop By Department",
    type: {
      _id: "61de29652a0fd5001505f5c9",
      rows: true,
      dropDown: true,
    },
  },
  {
    entries: [
      {
        title: "Gift Cards & Top Up",
      },
      {
        title: "Find a Gift",
      },
      {
        title: "Handmade",
      },
      {
        type: "DROPDOWN",
      },
      {
        title: "Home Services",
      },
      {
        title: "Prime Wardrobe",
      },
      {
        title: "Amazon Storefronts",
      },
      {
        title: "Amazon Business",
      },
      {
        title: "Amazon Second Chance",
      },
    ],
    _id: "60ab6a410a5705404d68d9fe",
    title: "Programs & Features",
    type: {
      _id: "61de29652a0fd5001505f5ca",
      rows: true,
      dropDown: true,
    },
  },
  {
    entries: [
      {
        title: "Your Account",
      },
      {
        title: "Currency Settings",
      },
      {
        title: "Customer Service",
      },
      {
        title: "Sign In",
      },
    ],
    _id: "60ab6a570a5705404d68d9ff",
    title: "Help & Settings",
    type: {
      _id: "61de29652a0fd5001505f5cb",
      rows: false,
      dropDown: false,
    },
  },
];
