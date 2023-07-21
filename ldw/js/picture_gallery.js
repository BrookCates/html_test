window.onload = () => {
    const pictureArea = document.getElementById("picture_in_gallery")
    const textArea = document.getElementById("text_in_gallery");

    const images = document.querySelectorAll("#picture_in_gallery img")
    console.log(images)

    let timeElasped = 0;

    const timerId = setInterval( ()=>{
        timeElasped ++
        // textArea.innerHTML = timeElasped 
        let visible = timeElasped % 3
        console.log("visible = " + visible)
        console.log( images[visible].style );
        for(let i=0; i<3; i++ ){
            images[i].style.display = "none"
        }
        images[visible].style.display = ""
        console.log(images[visible])

   
    }, 2000)



}