import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import toast from "react-hot-toast";

const ProductInfo = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [pricetype, setPricetype] = useState("new");
  const [numitem, setNumitem] = useState(1);
  const [value, setValue] = useState(5);

  const HouseboatData = [
    {
      id: 1,
      imageUrl: 'https://imgs.6sqft.com/wp-content/uploads/2018/04/27115149/Central-Park-Boathouse1.jpg',
      title: 'Deluxe Houseboat',
      price: {
        day: '₹ 1,000 per day',
        night: '₹ 2,500 per night (includes dinner & breakfast)'
      },
      description: 'Enjoy luxurious amenities and spacious cabins on our deluxe houseboat. Perfect for a weekend getaway or special occasion.'
    },
    // Add more dummy data here
  ];

  const increment = () => {
    setNumitem(numitem + 1);
  };

  const decrement = () => {
    if (numitem > 1) {
      setNumitem(numitem - 1);
    }
  };

  const addtocart = () => {
    if (selectedPackage) {
      // Implement your logic to add the item to the cart here
      console.log("Item added to the cart");
      toast.success("Added To Cart");
    }
  };

  return (
    <>
      {selectedPackage && (
        <div className="w-screen h-full">
          <div className="bg-gray-100 w-full md:h-[600px] h-[1200px] py-[2%] px-[2%] xl:px-[18%]">
            <div className="w-full py-3">
              <p className="text-gray-400 font-Poppins capitalize text-sm tracking-widest">
                / products / info / {selectedPackage.title}
              </p>
            </div>
            <div className="w-full h-full flex gap-16 flex-col md:flex-row items-center md:justify-between py-[3%]">
              <div className="w-[70%] md:w-[40%] h-[30%] md:h-[90%]">
                <div className="w-full h-full bg-white flex items-center justify-center">
                  <img
                    className="w-[60%] h-[60%]"
                    src={selectedPackage.imageUrl}
                    alt={selectedPackage.title}
                  />
                </div>
              </div>
              <div className="w-[90%] md:w-[50%] md:h-[90%]">
                <div className="w-full h-full flex flex-col gap-5">
                  <h1 className="text-3xl text-gray-800 font-Poppins">
                    {selectedPackage.title}
                  </h1>
                  <h1 className="text-[25px] text-gray-400">
                    {pricetype === "new"
                      ? selectedPackage.price.day
                      : selectedPackage.price.night}
                  </h1>

                  <FormControl
                    required
                    sx={{
                      minWidth: 100,
                      maxWidth: 200,
                      backgroundColor: "white",
                      marginY: "10px",
                    }}
                  >
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Buy new or Exchange
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      autowidth="true"
                      value={pricetype}
                      onChange={(e) => setPricetype(e.target.value)}
                      label="Buy new or Exchange"
                    >
                      <MenuItem value="new">Buy New</MenuItem>
                      <MenuItem value="old">Exchange</MenuItem>
                    </Select>
                  </FormControl>
                  <div className="flex gap-3">
                    <div className="relative">
                      <input
                        type="text"
                        value={numitem}
                        onChange={(e) => {
                          console.log(e.target.value);
                        }}
                        className="relative text-center py-3 w-[165px] rounded-s-full rounded-e-full border-2 focus:outline-none"
                      />
                      <RemoveIcon
                        sx={{ color: "lightgray" }}
                        onClick={decrement}
                        className="absolute left-2 top-[25%] cursor-pointer"
                      />
                      <AddIcon
                        sx={{ color: "lightgray" }}
                        onClick={increment}
                        className="absolute right-2 top-[25%] cursor-pointer"
                      />
                    </div>
                    <button
                      className="uppercase tracking-tight text-[15px] font-bold text-white bg-[#ff0e2c] rounded-s-full rounded-e-full py-3 text-center px-4 hover:scale-105 duration-300"
                      onClick={addtocart}
                    >
                      Add to basket
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 mt-5">
                    SKU: {selectedPackage.id}
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="text-gray-400">Description: </span>
                    {selectedPackage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-full h-[450px] px-[4%] xl:px-[12%]">
            <div className="md:w-[700px] w-full py-[5%]">
              <h1 className="font-bold font-Poppins tracking-wider text-lg mb-2 text-black">
                Rate this product
              </h1>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <h1 className="mt-3 font-bold font-Poppins tracking-wider text-lg mb-5 text-black">
                Write a Review
              </h1>
              <div className="md:w-[400px] w-full h-[150px] relative">
                <textarea className="w-full h-full focus:outline-none border-2 text-sm text-gray-500 bg-white p-3" />
                <button className="bg-[#ff0e2c] uppercase font-bold text-sm text-white py-2 px-3 absolute bottom-[-35%] right-0">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInfo;
