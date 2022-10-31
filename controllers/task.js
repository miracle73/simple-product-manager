const task = require('../Models/task')
const getallProducts = async (req, res) => {
    try {
        const products = await task.find({})
        res.status(201).json({ products })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}
const createProduct = async (req, res) => {
    try {
        const products = await task.create(req.body)
        res.status(201).json({ products })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}
const updateProduct = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const products = await task.findOneAndUpdate({ _id: taskID }, req.body , {new: true, runValidators: true})
        if (!products){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        res.status(201).json({ products }) 
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
}
const deleteProduct = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const products = await task.findOneAndDelete({ _id: taskID })
        if (!products){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        const productse = await task.find({})
        res.status(201).json({message: 'successfully deleted', products_remaining: productse})
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
}
const getProduct = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const products = await task.findOne({ _id: taskID })
        if (!products){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        res.status(201).json({ products})
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
}
module.exports = { getallProducts, createProduct, updateProduct, deleteProduct, getProduct };
