function FindmyLocation() {   
    document.getElementById('button_find').style.display='none'
    document.getElementById('button_back').style.display='block'

    if (!navigator.geolocation) {
        alert("Geolocation is not supported by this browser.");
      }
}  

function BackToMap() {
    window.location.reload()
}