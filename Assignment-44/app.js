// Assignment 44
import chalk from "chalk";
function specialSandwich(item) {
    console.log(chalk.green('\nMake your special sandwich with these ingredients: '));
    item.forEach(element => console.log(' - ' + element));
    console.log(chalk.yellow('Enjoy your sandwich! \n'));
}
specialSandwich(['Lettuce', 'Cheese', 'Pickles']);
specialSandwich(['Vegetable', 'Butter']);
specialSandwich(['Bread', 'Mozzarella']);
