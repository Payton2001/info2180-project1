/* Add your JavaScript to this file */

window.onload = function(){
    let message = document.getElementsByClassName('message')[0]
    let btn = document.getElementsByTagName('button')[0]
    let mail = document.getElementsByTagName('input')[0]
    let is_valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    btn.addEventListener('click',  function(e){
        e.preventDefault()
        let mail_value = mail.value
        if (mail_value == "" || !mail_value.match(is_valid)){
            message.innerHTML = 'Please enter avalid email address.'
            mail.value = ''
        }
        else if (mail_value != "" && mail_value.match(is_valid)){
            message.innerHTML = `Thank You! Your email address ${mail_value} has been added to our mailing list!`
            mail.value = ''
        }

    })

}

