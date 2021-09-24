let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("grinding is about to begin");
        coffeeIsGrinding = true;
    }
}

pressGrindBeans()

//

