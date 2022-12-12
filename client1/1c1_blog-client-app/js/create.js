// javascript for create.html
const form = document.querySelector('form');

const createPost = async (e) => {
    e.preventDefault();

  const doc = {
    title: form.title.value,
    body: form.body.value,
    likes: 0,
    }

  await fetch('http://localhost:3000/posts', {       
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
    })

    window.location.replace( 'index.html' )    // .(21212.02.4 RAM Go home. Can't use '/'. not sure about replace())
    }
//  ---------------------------------------------------

form.addEventListener( 'submit', createPost );