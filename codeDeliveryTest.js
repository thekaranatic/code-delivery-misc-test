function whatsHappening(choice){
    switch (choice) {
        case 1:
            console.log(`You have imported me online through a github repo & your choice is ${choice}`);
            break;
        case 2:
            console.log(`Your choice is ${choice}`);
            break;
        case 3:
            console.log(`Your choice is ${choice} & 3+3=6`);
            break;
        case 4:
            console.log(choice*2);
            break;
        default:
            console.log("Invalid option");
    }
}
