const router = require('express').Router();
const { Order } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req,res)=>{
 try{
    const newOrder = await Order.create({
        ...req.body,
        user_id: req.session.user_id,
    })
    res.status(200).json(newOrder);
 } catch (err) {
    res.status(400).json(err);
 }
})
// router.post('/', withAuth, async (req,res)=>{
// router.delete('/:id', withAuth, async (req, res)=> {

// })

module.exports = router;