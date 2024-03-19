import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import { Link } from "react-router-dom";   

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
  {
    id: 2,
    imageUrl: 'https://thumbs.dreamstime.com/b/kerala-boat-house-india-tourism-back-waters-169949666.jpg',
    title: 'Traditional Kerala Houseboat',
    price: {
      day: '₹ 700 per day (includes meals & board games)',
      night: '₹ 1,500 per night (includes basic meals)'
    },
    description: 'Experience the charm of Kerala backwaters on a traditional houseboat. Ideal for a relaxing journey and enjoying scenic landscapes.'
  },
  {
    id: 3,
    imageUrl: 'https://www.oyorooms.com/blog/wp-content/uploads/2017/10/3-min-2.jpg', // Replace with image of houseboat with fishing gear
    title: 'Fishing Houseboat',
    price: {
      day: '₹ 800 per day (includes basic fishing equipment)',
      night: '₹ 2,000 per night (includes meals & extended fishing time)'
    },
    description: 'Equipped for fishing enthusiasts, this houseboat provides a unique opportunity to combine your love for the water with a chance to catch some fish.'
  },
  {
    id: 4,
    imageUrl: 'https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2019/08/Goa-Backwater-Houseboat.jpg', // Replace with image of houseboat with party lights
    title: 'Party Houseboat',
    price: {
      day: '₹ 1,200 per day (includes sound system)',
      night: '₹ 3,000 per night (includes sound system & party lights)'
    },
    description: 'Looking for a fun celebration on the water? Our party houseboat comes equipped with a sound system and lighting to make your gathering unforgettable.'
  },
  {
    id: 5,
    imageUrl: 'https://media1.thrillophilia.com/filestore/dwbfor7u6cp3xj5702nfkymfng0c_shutterstock_1154918653.jpg?w=753&h=450&dpr=2.0', // Replace with image of houseboat with yoga mats
    title: 'Yoga Retreat Houseboat',
    price: {
      day: '₹ 600 per day (includes yoga mats)',
      night: '₹ 1,800 per night (includes yoga mats & morning yoga session)'
    },
    description: 'Find inner peace and serenity on our yoga retreat houseboat. Enjoy yoga sessions amidst the calming waters and breathtaking scenery.'
  },
  {
    id: 6,
    imageUrl: 'https://thumbs.dreamstime.com/b/house-boat-kerala-india-12896811.jpg',
    title: 'Family Houseboat',
    price: {
      day: '₹ 900 per day (includes children\'s life jackets)',
      night: '₹ 2,200 per night (includes meals & board games)'
    },
    description: 'Designed with families in mind, this houseboat offers a safe and comfortable space for your loved ones to enjoy a memorable time together.'
  }
];


const PackagesCard = ({ packages }) => {
  return (
    <div className="flex flex-col bg-white rounded-md shadow-md hover:shadow-lg overflow-hidden">
      <img
        src={packages.imageUrl}
        alt={packages.title}
        className="h-64 object-cover rounded-tl-md rounded-tr-md w-full" // Make image take full width
      />
      <div className="flex flex-col p-4 justify-between">
        <div className="pb-3">
          <h1 className="font-semibold text-lg text-gray-800">{packages.title}</h1>
          <p className="text-sm text-gray-600">{packages.description}</p>
        </div>
        <div className="font-bold text-sm text-gray-600">
          <p>
            <span className="mr-1 uppercase">Day:</span>
            {packages.price.day}
          </p>
          <p>
            <span className="mr-1 uppercase">Night:</span>
            {packages.price.night}
          </p>
        </div>
        <a
          href="https://www.kindacode.com" // Replace with actual packages link
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md transition duration-300 ease-in-out self-end" // Align button to bottom right
        >
         <Link to="/packageinfo">
          Book Now
         </Link>
        </a>
      </div>
    </div>
  );
};

const Packages = () => {
  return (
    <div>
     <div className="font-bold text-4xl uppercase ">
      Exclusive Packages
     </div>
      <div className="p-10 px-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10">
          {HouseboatData.map((packages, index) => (
            <PackagesCard key={index} packages={packages} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
