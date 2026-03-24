const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const products = [
    {
        id: 1,
        name: 'Gethair-F 10%',
        price: 55.00,
        image: '/assets/topical-solution.jpg',
        category: 'Serum',
        rating: 4.9,
        reviews_count: 128,
        description: 'Intense solution with 10% Minoxidil and 0.1% Finasteride. This advanced topical formula is designed to stimulate dormant follicles and entry into the active growth phase faster than standard solutions.',
        ingredients: ['Minoxidil 10%', 'Finasteride 0.1%', 'Transcutol P', 'Purified Water'],
        howToUse: 'Apply 1ml (approx. 5-6 sprays or 1 dropper) on the affected areas of the scalp. Massage gently for 1-2 minutes. Use twice daily.',
        benefits: ['Blocks DHT production', 'Stimulates blood flow', 'Increases hair thickness', 'Visible results in 90 days']
    },
    {
        id: 2,
        name: 'KTGOLD Shampoo',
        price: 35.00,
        image: '/assets/KGOLD-SHAMPOO.jpg',
        category: 'Cleanser',
        rating: 4.8,
        reviews_count: 85,
        description: 'A powerful anti-dandruff and hair strengthening shampoo containing Ketoconazole and Zpto. It gently cleanses the scalp while maintaining natural moisture levels for shining and strong hair.',
        ingredients: ['Ketoconazole', 'Zinc Pyrithione (Zpto)', 'Biotin', 'Aloe Vera'],
        howToUse: 'Wet hair thoroughly. Apply a generous amount of KTGOLD Shampoo. Massage into scalp for 2 minutes. Rinse thoroughly. Repeat if necessary.',
        benefits: ['Eliminates dandruff', 'Reduces scalp itch', 'Sulphate & Paraben Free', 'Suitable for all hair types']
    },
    {
        id: 3,
        name: 'Herbitrace-30 Tablets',
        price: 40.00,
        image: '/assets/herbitrace tablet.jpg',
        category: 'Supplement',
        rating: 4.9,
        reviews_count: 54,
        description: 'Advanced nutritional support for hair health. Each tablet is packed with herbal extracts, vitamins, and minerals specifically selected to nourish hair roots from within.',
        ingredients: ['Bhringraj', 'Shatavari', 'Guduchi', 'Amla', 'Arjuna', 'Biotin', 'Zinc'],
        howToUse: 'Take 1 tablet twice daily after meals, or as directed by your healthcare professional. Consistent use for 3-6 months is recommended.',
        benefits: ['Nourishes hair roots', 'Supplies essential minerals', '100% Herbal extracts', 'No side effects']
    },
    {
        id: 4,
        name: 'CLODES-B Lotion',
        price: 30.00,
        image: '/assets/CLODES-lotion.jpg',
        category: 'Treatment',
        rating: 4.7,
        reviews_count: 32,
        description: 'Medical-grade lotion for targeting scalp inflammation, irritation, and fungal concerns. Helps create a healthy environment for hair growth.',
        ingredients: ['Clotrimazole', 'Beclomethasone Dipropionate', 'Glycerin', 'Purified Water'],
        howToUse: 'Cleanse the affected area first. Apply a thin layer of lotion to the scalp. Massage gently until absorbed. Use twice daily.',
        benefits: ['Reduces inflammation', 'Anti-fungal protection', 'Soothes redness', 'Fast-absorbing formula']
    },
    {
        id: 5,
        name: 'Professional Derma Roller',
        price: 25.00,
        image: '/assets/derma-roller-full.png',
        category: 'Tool',
        rating: 5.0,
        reviews_count: 210,
        description: 'Our 540-needle professional derma roller is designed to create micro-channels in the scalp, dramatically increasing the absorption of topical solutions like Gethair-F.',
        ingredients: ['Medical Grade Stainless Steel Needles', 'Ergonomic ABS handle'],
        howToUse: 'Sterilize the roller before and after use. Gently roll across the scalp in vertical, horizontal, and diagonal directions. Use once weekly.',
        benefits: ['Boosts serum absorption', 'Increases scalp circulation', 'Stimulates collagen', 'Easy to use at home']
    },
    {
        id: 6,
        name: 'Advanced Growth Kit',
        price: 149.00,
        image: '/assets/kit.jpg',
        category: 'Kit',
        rating: 5.0,
        reviews_count: 345,
        description: 'The ultimate professional-grade hair restoration system. This comprehensive kit combines our most powerful topical serum, deep-cleansing shampoo, nutrient-rich tablets, soothing lotion, and microneedling tool to tackle hair loss from every angle.',
        ingredients: ['Gethair-F 10%', 'KTGOLD Shampoo', 'Herbitrace-30 Tablets', 'CLODES-B Lotion', 'Derma Roller'],
        howToUse: 'Morning: Apply Gethair-F. Evening: Take 1 Herbitrace tablet. Shampoo 3x weekly with KTGOLD. Use Derma Roller once weekly followed by Serum.',
        benefits: ['Complete 5-in-1 system', 'Maximum potency formulas', 'Targets hormonal and physical causes', 'Includes all necessary tools']
    }
];

const importData = async () => {
    try {
        await Product.deleteMany();
        await Product.insertMany(products);
        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
