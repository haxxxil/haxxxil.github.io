function check_mode()
{
    if(sessionStorage.getItem("current_mode")===null)
    {
        sessionStorage.setItem("current_mode", "dark");
        const body_element = document.getElementsByTagName("body")[0];
        body_element.classList.add("dark_mode");
        document.getElementById("mode_switcher").src = "/images/light_mode_icon.png"
    }
    else{
        if(sessionStorage.getItem("current_mode")=="light")
        {
            const body_element = document.getElementsByTagName("body")[0];
            body_element.classList.add("light_mode");
            document.getElementById("mode_switcher").src = "/images/dark_mode_icon.png"
        }
        else
        {
            const body_element = document.getElementsByTagName("body")[0];
            body_element.classList.add("dark_mode");
            document.getElementById("mode_switcher").src = "/images/light_mode_icon.png"
        }
    }
}

function switch_mode()
{
    if(sessionStorage.getItem("current_mode")=="light")
    {
        const body_element = document.getElementsByTagName("body")[0];
        body_element.classList.remove("light_mode");
        body_element.classList.add("dark_mode");
        sessionStorage.setItem("current_mode", "dark")
        document.getElementById("mode_switcher").src = "/images/light_mode_icon.png"
    }
    else
    {
        const body_element = document.getElementsByTagName("body")[0];
        body_element.classList.remove("dark_mode");
        body_element.classList.add("light_mode");
        sessionStorage.setItem("current_mode", "light");
        document.getElementById("mode_switcher").src = "/images/dark_mode_icon.png"
    }
}