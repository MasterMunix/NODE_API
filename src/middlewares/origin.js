const checkAuthorization = (req, res, next) => {
  const headerAuth = req.headers.authorization || "";
  //TODO Bearer
  console.log(headerAuth); 
  const token = headerAuth.split(" ").pop(); //1111
  if(!token){
    res.status(405);
    res.send({error: "No tienes token"});
  }
  else {
    next();
  }
};

module.exports = { checkAuthorization };
