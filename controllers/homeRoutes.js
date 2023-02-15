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
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the event
    try {
      const dbEventData = await Event.findByPk(req.params.id);

      const event = dbEventData.get({ plain: true });

      res.render('event', { event, logged_in: req.session.logged_in });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
);

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('signup');
});

router.get('/profile', withAuth, async (req, res) => {
  
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        { model: Event, attributes:['id','title','dateandtime'] },
        { model: Saved_event, attributes:['id','event_id','title','notes'] }
      ],
    }); 

    var user = userData.get({ plain: true });
    // console.log(user.events[0].title)
    // console.log(user.saved_events[0].notes)
    
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
    res.redirect('/');
    return;
  }
  res.render('login')
 })

module.exports = router;