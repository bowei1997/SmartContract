
async function main(){
    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    const hello_world = await HelloWorld.deploy("Hello World!");
    console.log("Contract deployed to adress: ", hello_world.address);

}



main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1); 
    });

