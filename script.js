let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let botDoorPath = './imgs/robot.svg';
let beachDoorPath = './imgs/beach.svg';
let spaceDoorPath = './imgs/space.svg';
let closedDoorPath = './imgs/closed_door.svg';

let numClosedDoors = 3
let openDoor1 = null;
let openDoor2 = null;
let openDoor3 = null;

const isClicked = (door) => {
    if (door.src == closedDoorPath){
        return false;
    }else{
        return true;
    }
}

let playDoor = () => {
    numClosedDoors--
    if (numClosedDoors == 0){
        gameOver();
    }
};

let randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random()*numClosedDoors);
    if (choreDoor == 0){
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor == 1){
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }else{
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath
    }
}

doorImage1.onclick = () => {
    if (!isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor();
    }
};
doorImage2.onclick = () => {
    if (!isClicked(doorImage1)) {
        doorImage2.src = openDoor2;   
        playDoor();
    }
};
doorImage3.onclick = () => {
    if (!isClicked(doorImage1)) {
        doorImage3.src = openDoor3;
        playDoor();
    }
};

console.log(randomChoreDoorGenerator())