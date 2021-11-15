let childrens = ["Idriss", "Carel", "Brice", "Franck"];

let pseudo = childrens && childrens.map((children)=>children+""+Math.random(3,4567));

pseudo && pseudo.forEach((name)=>console.log("Hello " + name));

