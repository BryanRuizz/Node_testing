const { values } = require('lodash');
var recipes = require('../recipes.json');
var router = require('express').Router();

router
  .get("/:id", (req, res) => {
    let st, en;
    st = new Date();

    const id = req.params.id;
    if (id.length > 1 || undefined || "" || 0 ||null) {
      console.log("putos", id);
      return res.status(400).send({ message: "NOT_FOUND" });
    }

    const value = recipes.filter((recipe,index) => {
      if(recipe.id===id){
        return index
      }
    })

    en = endTime = new Date();
    var timeDiff = en - st; //in ms
    timeDiff /= 1000;
    var seconds = Math.round(timeDiff);

    res.send({index:value});
  })

module.exports = router;


------------------------------

putos asdasd

[0mGET /recipes/step/asdasd [33m400[0m 6.274 ms - 23[0m

    1) Should return 400 for /recipes/step/:id if id is not valid

[0mGET /recipes/step/5?elapsedTime=0 [32m200[0m 1.308 ms - 12[0m

    2) Should respond with 0 if elapsed time is 0

[0mGET /recipes/step/4?elapsedTime=11 [32m200[0m 0.606 ms - 12[0m

    3) Should respond back with the correct step - 1

[0mGET /recipes/step/2?elapsedTime=9 [32m200[0m 0.757 ms - 12[0m

    4) Should respond back with the correct step - 2

  0 passing (8s)

  4 failing

  1) express_recipes_routes

       Should return 400 for /recipes/step/:id if id is not valid:

     Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (/projects/challenge/test/index.spec.js)

      at listOnTimeout (node:internal/timers:569:17)

      at process.processTimers (node:internal/timers:512:7)

  2) express_recipes_routes

       Should respond with 0 if elapsed time is 0:

     Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (/projects/challenge/test/index.spec.js)

      at listOnTimeout (node:internal/timers:569:17)

      at process.processTimers (node:internal/timers:512:7)

  3) express_recipes_routes

       Should respond back with the correct step - 1:

     Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (/projects/challenge/test/index.spec.js)

      at listOnTimeout (node:internal/timers:569:17)

      at process.processTimers (node:internal/timers:512:7)

  4) express_recipes_routes

       Should respond back with the correct step - 2:

     Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (/projects/challenge/test/index.spec.js)

      at listOnTimeout (node:internal/timers:569:17)

      at process.processTimers (node:internal/timers:512:7)
