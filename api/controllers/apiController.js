'use strict';

const homeController = async (req, res) => {
  return res.status(200).json({message: 'Home Route', status: 'OK'});
};


module.exports = {
  homeController
}
