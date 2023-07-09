import userModel from "../models/userModel.js";
import productModel from "../models/productModel.js";

export const addToWishlist = async (req, res) => {
    try {
      const { productId, userId } = req.body;
  
      // Check if the product and user exist
      const product = await productModel.findById(productId);
      const user = await userModel.findById(userId);
  
      if (!product || !user) {
        return res.status(404).json({ error: 'Product or user not found' });
      }
  
      // Add the product to the user's wishlist
      user.wishlist.push(product);
      await user.save();
  
      return res.status(200).json({ message: 'Product added to the wishlist' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };