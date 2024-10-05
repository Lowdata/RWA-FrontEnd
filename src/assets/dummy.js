import { co,solar,house,building,cosmetics, fashion, watch } from "../assets/images";

export const dummyProducts = [
  {
    id: 1006,
    name: "Fashion Brand Collection",
    image: cosmetics, 
    description: `This exclusive fashion brand collection features a unique line of designer clothing and accessories, capturing the essence of modern haute couture. With an emphasis on sustainability, each item in this collection is made from eco-friendly materials and designed by renowned fashion houses. This brand has gained traction globally and is set to disrupt the fashion industry with its innovative, limited-edition collections.`,
    category: "Fashion",
    amount: 8000000,
    raised: 500000,
  },
  {
    id: 1007,
    name: "Luxury House in Bangalore",
    image: house, // Placeholder for appropriate image
    description: `This luxury home located in the heart of Bangalore represents the finest in modern architecture. With a market value around 1 million, the house offers cutting-edge design, spacious interiors, and state-of-the-art amenities. It is nestled in a prestigious residential area, making it a prime investment for those seeking a home in one of India's fastest-growing cities.`,
    category: "Real Estate",
    amount: 1000000,
    raised: 900000,
  },
  {
    id: 1009,
    name: "Virtual Fashion NFT",
    image: fashion,
    description: `Virtual Fashion NFT #12 is a digital fashion piece crafted for the virtual fashion industry. As the concept of virtual wearables grows, this NFT provides collectors with a highly unique, fully customizable virtual garment that can be worn across the metaverse. It is one of the first designs of its kind and is expected to set trends in the virtual fashion world.`,
    category: "NFT",
    amount: 950000,
    raised: 600000,
  },
  {
    id: 1010,
    name: "NFT Collectible Watch",
    image: watch,
    description: `This digital collectible watch NFT is a one-of-a-kind virtual timepiece representing luxury and cutting-edge digital design. Featuring intricate animations and rare design elements, this NFT collectible is perfect for tech enthusiasts and luxury watch collectors.`,
    category: "NFT",
    amount: 3000000,
    raised: 1000000,
  },
  // New items with amounts above 10 million
  {
    id: 1011,
    name: "Renewable Energy Corporation",
    image: solar, // Placeholder for appropriate image
    description: `This renewable energy corporation is spearheading the clean energy revolution with innovative solar and wind power solutions. By investing in sustainable technologies, it aims to reduce the carbon footprint of industries worldwide. The company operates multiple green energy projects and is rapidly scaling up its operations.`,
    category: "Energy",
    amount: 1500000,
    raised: 8000000,
  },
  {
    id: 1012,
    name: "High-Rise Residential Buildings",
    image: building, // Placeholder for appropriate image
    description: `These high-rise residential buildings are part of a luxury real estate project designed to accommodate growing urban populations. Offering stunning views and premium living experiences, the buildings are a beacon of modern architecture and sustainability. With state-of-the-art facilities and eco-friendly designs, they are set to attract global investors.`,
    category: "Real Estate",
    amount: 25000000,
    raised: 15000000,
  },
  {
    id: 1013,
    name: "Co-Working Spaces Network",
    image: co, // Placeholder for appropriate image
    description: `This co-working space network provides freelancers, startups, and small businesses with innovative, shared office environments. With flexible workspaces designed for collaboration, the network spans across major global cities, offering high-speed internet, state-of-the-art meeting rooms, and communal facilities. It has become a hub for entrepreneurs seeking dynamic, cost-effective office spaces.`,
    category: "Real Estate",
    amount: 12000000,
    raised: 9000000,
  },
  {
    id: 1014,
    name: "Luxury Apartment Complex",
    image: building, // Placeholder for appropriate image
    description: `The luxury apartment complex is designed for upscale urban living, offering high-end amenities like rooftop pools, gyms, and concierge services. Located in a prime real estate market, it is ideal for investors looking to capitalize on growing demands for luxury living spaces in metropolitan areas.`,
    category: "Real Estate",
    amount: 20000000,
    raised: 18000000,
  },
  {
    id: 1015,
    name: "Solar Energy Farm",
    image: solar, // Placeholder for appropriate image
    description: `This solar energy farm is a large-scale renewable energy project designed to harness solar power for regional energy needs. It supports efforts toward sustainable energy by providing clean power to hundreds of homes and businesses, reducing dependence on fossil fuels. As the demand for green energy rises, this farm is set to become a key player in the renewable energy sector.`,
    category: "Energy",
    amount: 18000000,
    raised: 1200000,
  },
];
