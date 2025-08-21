import React from 'react';
import { motion } from 'framer-motion';
import { Utensils } from 'lucide-react';

const menusData = [
  {
    title: 'Mehndi Menu 1',
    price: '1,050',
    items: [
      'Vegetable Fried Rice',
      'Chicken Curry',
      'Lahori Channy',
      'Badami Halwa',
      'Fresh Salad, Raita, Naan',
      'Soft Drinks & Mineral Water',
    ],
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Mehndi Menu 2',
    price: '1,150',
    items: [
      'Chicken Achari Biryani',
      'Chicken Achari Korma',
      'Allo Cholay & Kofta Curry',
      'Badami Halwa',
      'Fresh Salad, Raita, Naan',
      'Soft Drinks & Mineral Water',
    ],
    image: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Barat Menu 1',
    price: '1,350',
    items: [
      'Chnna Mewa Pulao',
      'Dhaka Chicken & Seekh Kabab',
      'Beef Qorma & Palak Allo',
      'Suji Badami Halwa',
      'Fresh Salad, Naan',
      'Soft Drinks, Mineral Water & Green Tea',
    ],
    image: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Barat Menu 2',
    price: '1,500',
    items: [
      'Beef Pulao',
      'Chicken Steam Roast & Seekh Kabab',
      'White Beef/Chicken Hundi',
      'Mutter Gosht/Mix Vegetable',
      'Kheer',
      'Fresh Salad, Naan, Mineral Water & Green Tea',
    ],
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Walima Menu 1',
    price: '1,800',
    items: [
      'Kabali Pulao',
      'Chicken Boti & Seekh Kabab',
      'Badami Mutton/White Mutton',
      'Mix Vegetable',
      'Fruit Trifle & Russian Salad',
      'Naan, Soft Drinks, Raita & Black Tea',
    ],
    image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Walima Menu 2',
    price: '2,100',
    items: [
      'Narinji Pulao',
      'Chicken Malai Boti & Chicken Seekh Kabab',
      'White Mutton & Fish',
      'Kheer/Fruit Trifle, Muraba, Jalebi/Gulab Jamon',
      'Russian Salad, Naan, Raita',
      'Soft Drinks, Mineral Water & Kashmiri Tea',
    ],
    image: 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Special Menu',
    price: '2,300',
    items: [
      'Mutton Karahi & Chicken Reshmi Kabab',
      'Beef Steam Roast & Chicken Malai Boti',
      'Trout Fish & Palak Paneer',
      'Gajar Halwa/Fruit Trifle',
      'Russian Salad, Naan',
      'Soft Drinks/Fresh Juice, Mineral Water & Kashmiri Tea',
    ],
    image: 'https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const Menus = ({ onMenuSelect }: { onMenuSelect: (menuTitle: string) => void }) => {
  return (
    <section id="menus" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Signature Menus</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Curated packages for your special events, featuring authentic Pakistani cuisine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menusData.map((menu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group"
            >
              <div className="relative">
                <img
                  src={menu.image}
                  alt={menu.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-lg font-bold py-2 px-4 rounded-lg">
                  PKR {menu.price}
                  <span className="text-sm font-normal"> / person</span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Utensils className="h-6 w-6 mr-3 text-blue-600" />
                  {menu.title}
                </h3>
                <ul className="space-y-2 text-gray-600 flex-grow mb-6">
                  {menu.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  onClick={() => onMenuSelect(menu.title)}
                >
                  Book This Menu
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;