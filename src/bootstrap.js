// initializing application
const Product = require('../models/product');
const Supplier = require('../models/supplier');

// Product.belongsTo(Supplier, {
//     // as: "Supplier",
//     foreignKey: "supplierId"
// })
// Supplier.hasMany(Product,
//     {
//         // as: "Product",
//         foreignKey: "supplierId"
//     }
// )


module.exports = async () => {
    // try {
    //     const suppplier = await Supplier.create({
    //         supplierName: "Rehman"
    //     });
    //     const product = await Product.create({
    //         productName: "Laptop",
    //         productPrice: 500,
    //         supplierId: Supplier.id
    //     });
    // } catch (error) {
    //     console.log({ error });
    // }
    // // getting all products
    // try {
    //     const products = await Product.findAll({
    //         where: {
    //             supplierName: "Rehman",
    //             include: [
    //                 {
    //                     model: Product,
    //                     as: "Products"
    //                 }
    //             ]
    //         }
    //     });
    //     console.log("products => ", products);
    // } catch (error) {
    //     console.log({ error });
    // }

    // console.log("helo");
}
