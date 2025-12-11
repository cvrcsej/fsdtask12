let animal = {
    name: "Tiger",
    type: "Mammal"
};

animal.habitat = "Forest";
console.log("After adding habitat:", animal);

animal.name = "Bengal Tiger";
console.log("After updating name:", animal);

delete animal.type;
console.log("After deleting type:", animal);