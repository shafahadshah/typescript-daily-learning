import { add } from "./add";
import { subtract } from "./subtract";
import { multiply } from "./multiply";
import { divide } from "./divide";
import { power } from "./power";
import { modulo } from "./modulo";

function main(): void {
    console.log("Add:", add(10, 5));
    console.log("Subtract:", subtract(10, 5));
    console.log("Multiply:", multiply(10, 5));
    console.log("Divide:", divide(10, 5));
    console.log("Power:", power(2, 3));
    console.log("Modulo:", modulo(10, 3));
}

main();