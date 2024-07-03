import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex p-7">
        <div className="flex flex-col justify-center place-items-center w-1/4 m-5">
          <h1 className="p-5 text-2xl">About</h1>
          <p>
            Voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illoinventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo eaque ipsa quae ab illo
          </p>
        </div>
        <div className="flex flex-col justify-center place-items-center w-1/4 m-5">
          <h1 className="p-5 text-2xl">Contact</h1>
          <p>
            Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha, Kerala, 688006
          </p>
          <h3>Phone: 0471 272 0261</h3>
          <h4>Email: store@jsdev.com</h4>
        </div>
        <div className="flex flex-col justify-center place-items-center w-1/4 m-5">
          <h1 className="p-5 text-2xl">Categories</h1>
          <p>
            Headphones
            <br />
            Smart Watches
            <br />
            Bluetooth Speakers
            <br />
            Wireless Earbuds
            <br />
            Home Theatre
            <br />
            Projects
          </p>
        </div>
        <div className="flex flex-col justify-center place-items-center w-1/4 m-5">
          <h1 className="p-5 text-2xl">Pages</h1>
          <p>
            Home
            <br />
            About
            <br />
            Privacy Policy
            <br />
            Returns
            <br />
            Terms & Conditions
            <br />
            Contact Us
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
