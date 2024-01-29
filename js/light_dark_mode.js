function check_mode()
{
    if(sessionStorage.getItem("current_mode")===null)
    {
        sessionStorage.setItem("current_mode", "dark");
        const body_element = document.getElementsByTagName("body")[0];
        body_element.classList.add("dark_mode");
    }
    else{
        if(sessionStorage.getItem("current_mode")=="light")
        {
            const body_element = document.getElementsByTagName("body")[0];
            body_element.classList.add("light_mode");
        }
        else
        {
            const body_element = document.getElementsByTagName("body")[0];
            body_element.classList.add("dark_mode");
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
    }
    else
    {
        const body_element = document.getElementsByTagName("body")[0];
        body_element.classList.remove("dark_mode");
        body_element.classList.add("light_mode");
        sessionStorage.setItem("current_mode", "light");
    }
}