const onModify = (event) =>{
    console.log("modify : " +event.target.id)
}

const onDelete = (event) =>{
    const modal_dlg_bg = document.getElementById("modal_dlg_bg");
    const modal_dlg_form = document.getElementById("modal_dlg_form")
    let width = window.innerWidth
    modal_dlg_form.style.left = (width/2 - 150) + 'px'
    modal_dlg_bg.style.display = "block"
     console.log("delete : " + event.target.id)
}

const on_modal_ok = (event) => {
    const modal_dlg_bg = document.getElementById("modal_dlg_bg");
    modal_dlg_bg.style.display = "none"
    console.log("on_modal_ok : " + event.target.id)
}

const on_modal_cancel = (event) => {
    const modal_dlg_bg = document.getElementById("modal_dlg_bg");
    modal_dlg_bg.style.display = "none"
    console.log("on_modal_cancel : " + event.target.id)
}