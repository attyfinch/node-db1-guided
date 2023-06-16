const Shippers = require('./shippers-model')

module.exports = {
  checkId,
  checkPayload,
}

function checkId(req, res, next) {
  const { id } = req.params

  Shippers.getById(id)
    .then(id => {
      if (!id) {
        next({status: 404, message: "that id does not exist"})
      }
    })
  next()
}

function checkPayload(req, res, next) {
  const { phone, shippername } = req.body;

  if (!phone || 
    phone === undefined || 
    !shippername || 
    shippername === undefined) 
    {
      next({status: 404, message: "All fields required"})
  }

  next()
}
