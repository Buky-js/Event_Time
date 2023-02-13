const router = require('express').Router();
const { Event, User, Category, Saved_event, Order } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const dbCategoryData = await Category.findAll({
        include: [
          {
            model: Event,
            atrributes: ['title', 'description'],
          },
        ],
      });

      const categories = dbCategoryData.map((category)=>
      category.get({plain:true})
      );
      res.render('homepage', {
        categories,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

});

router.get('/category/:id', async (req, res) => {
    try {
      const dbCategoryData = await Category.findByPk(req.params.id, {
        include: [
          {
            model: Event,
            attributes: [
              'id',
              'title',
              'present_by',
              'dateandtime',
              'location',
              'description',
              'price',
              'filename',
              'map',
            ],
          },
        ],
      });
      const category = dbCategoryData.get({ plain: true });
      res.render('category', { category, logged_in: req.session.logged_in });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // GET one event
router.get('/event/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  // if (!req.session.loggedIn) {
  //   res.redirect('/login');
  // } else {
    // If the user is logged in, allow them to view the painting
    try {
      const dbEventData = await Event.findByPk(req.params.id);

      const event = dbEventData.get({ plain: true });

      res.render('event', { event, logged_in: req.session.logged_in });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
// }
);


router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Order, 
      attributes: [
        'user_id',
        'event_id',
      ],
      
      }],
    });
  
    // const userData = await User.findByPk(req.session.user_id,{
    //   include: [{model:Event, through: Order, as: 'order_history'}]
    // })

    const user =userData.get({ plain: true });
    console.log(user);   

    
    const orderList = user.orders;
       
    console.log(orderList);
    console.log(orderList[0].event_id)

    res.render('profile', {
      ...user,
      logged_in: true
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

 router.get('/login',(req, res)=>{
  if (req.session.logged_in){
    res.redirect('/profile');
    return;
  }
  res.render('login')
 })

module.exports = router;
