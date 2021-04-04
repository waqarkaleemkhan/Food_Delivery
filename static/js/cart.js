var updateBtns = document.getElementsByClassName('update-cart')
for(var i =0; i<updateBtns.length; i++){
    updateBtns[i].addEventListener('click',function(){
        var productId = this.dataset.product
        var action =this.dataset.action
        console.log('productId:',productId, 'action:',action)
        console.log('User:',user)
        if(user=='AnonymousUser'){
            console.log('User is not authenticated')
        }
        else{
            updateUserOrder(productId,action)
        }
    })
}

function updateUserOrder(productId,action)
{
    console.log('User is authenticated sending data..')
    var url = '/update_item/' //pasing data to this url
    // to send post data we need to use fetch first we send the url to which we want to send the data
    //then define what kind of data we are going to send to backend here
    //then send header
    //then send body the body is gonna be the data we are gonna send to the backend
    //then take a promise 
    fetch(url,{
         method:'POST',
         headers:{
             'Content-Type':'application/json',
             'X-CSRFToken':csrftoken,
         },
         body:JSON.stringify({'productId':productId,'action':action})
     })
     .then((response)=>{
         return response.json()
     })

     .then((data)=>{
        console.log('data:',data)
        location.reload()
    })

}