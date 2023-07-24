const changeText = () => {
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,1)),url('https://wallpapers.com/images/high/master-vijay-hd-winks-88ok9sjx9au6e961.webp')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Bangam Bangam Bathiladi"
    }, 400)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(255, 9, 29, 0.3), rgba(231, 80, 236, 0.479)),url('https://wallpapers.com/images/high/master-vijay-hd-winks-88ok9sjx9au6e961.webp')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Sandhum Pondhum Saravedi"
    }, 600)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(2, 202, 43, 168, 0.3), rgba(255, 20, 23)),url('https://wallpapers.com/images/high/master-vijay-hd-winks-88ok9sjx9au6e961.webp')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Annaa Pannum Athiradi🫶"
    }, 800)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(202, 43, 168, 0.3), rgb(30, 255, 45)),url('https://wallpapers.com/images/high/master-vijay-hd-winks-88ok9sjx9au6e961.webp')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Vaathi Yaaru?…❤️‍🔥 "
    }, 1000)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(231, 80, 236, 0.479)), rgba(202, 43, 168, 0.3)),url('https://wallpapers.com/images/high/master-vijay-hd-winks-88ok9sjx9au6e961.webp')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "THALAPATHY🔥🔥🔥"
    }, 1200)
}

setInterval(changeText, 1500)