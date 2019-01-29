
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */


window.serializeForm = function(data){
    var convertedJSON = {};
    new FormData(data).forEach(function(value, key) { 
        convertedJSON[key] = value;
    });
    return convertedJSON;
}

window.handleErrors = function(error,e='p'){
    if(!error)        
        return;
    if(error.message && error.error==true){
        return alert(error.message);
    }
    Array.from(document.getElementsByClassName('validate')).map(function(e,f){
        e.innerHTML = '';
    });

    Object.entries(error.errors).map(function(a,b,c){        
        var ele =  document.querySelector('.validate.'+a[0]);
       
        if (ele){
            a[1].map(function(e,f){
                ele.innerHTML = e;
                // var node = document.createElement("p");                 
                // var textnode = document.createTextNode(e);         
                // node.appendChild(textnode);
                // ele.appendChild(node);
            });
        } else{
            element = document.createElement(e);
            element.setAttribute('class','validate text-danger '+a[0]);
            a[1].map(function(e,f){
                var node = document.createElement("p");                 
                var textnode = document.createTextNode(e);         
                node.appendChild(textnode);
                element.appendChild(node);
            });
            // element.append(a[1][0]);           
            var input = document.querySelector('[name="'+a[0]+'"]');
            if(input)
            input.parentNode.insertBefore(element, input.nextSibling);
        }
    }); 
}


require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Master');
