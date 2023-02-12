const router = require('express').Router();
const { Event, User, Category } = require('../models');
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
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

});

router.get('/category/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  // if (!req.session.loggedIn) {
  //   res.redirect('/login');
  // } else {
    // If the user is logged in, allow them to view the gallery
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
      res.render('category', { category, loggedIn: req.session.loggedIn });
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

      res.render('event', { event, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
// });


module.exports = router;
