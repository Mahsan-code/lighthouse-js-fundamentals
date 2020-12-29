const temp = 12;
raining = true;
if(temp<0){
    console.log('Make sure you pick out a scarf');
}else if (temp<15 && raining){
    console.log('short sleevs wont cut it');
}else if(temp<-40 || temp>40){
    console.log('maybe going outside is not a great idea');
}else{
    console.log('short sleevs are fine');
}

console.log('now you are ready to go out');


