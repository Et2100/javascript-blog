console.log("Heeloo there")
function pillow(name){
    alert("Hello there " + name)
}
function isEven(num){

    if(num%2==0){
        alert("true")
    } 
    else{
        alert("isn't even")
    }
 }
function countdown(num){

    let clickOn=""
    while(num>0){
        clickOn=clickOn+num + ".."
        num= num-1
    }
    alert(clickOn)
}
function countIsEven(ARY){
    let result=0
    let position=0
    while(position<ARY.length){
        let element=ARY[position]
        position=position+1
        if(element%2==0){
            result= result+1
        }
        
    }
    return result
}