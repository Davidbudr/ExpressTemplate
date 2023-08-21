const helloWorld = (req,res,next) =>{
    console.log("Hello world!");
    next();
}

module.exports = helloWorld;