var callbackLink=document.querySelector(".write-us"),callbackPopup=document.querySelector(".modal-callback"),callbackClose=callbackPopup.querySelector(".modal-close"),callbackForm=callbackPopup.querySelector("form"),userName=callbackPopup.querySelector("[name=name]"),userEmail=callbackPopup.querySelector("[name=email]"),userMessage=callbackPopup.querySelector("[name=message]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("userName")}catch(e){isStorageSupport=!1}callbackLink.addEventListener("click",function(e){e.preventDefault(),callbackPopup.classList.add("modal-show"),storage?(userName.value=storage,userEmail.focus()):userName.focus()}),callbackClose.addEventListener("click",function(e){e.preventDefault(),callbackPopup.classList.remove("modal-show"),callbackPopup.classList.remove("modal-error")}),callbackForm.addEventListener("submit",function(e){userName.value&&userEmail.value&&userMessage.value?isStorageSupport&&localStorage.setItem("userName",userName.value):(e.preventDefault(),callbackPopup.classList.remove("modal-error"),callbackPopup.offsetWidth=callbackPopup.offsetWidth,callbackPopup.classList.add("modal-error"),console.log("Нужжно ввести имя, почту и сообщение."))}),window.addEventListener("keydown",function(e){27===e.keyCode&&callbackPopup.classList.contains("modal-show")&&(e.preventDefault(),callbackPopup.classList.remove("modal-show"),callbackPopup.classList.remove("modal-error"))});