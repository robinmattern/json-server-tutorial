// javascript for index.html
const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
  console.log(term);
  let uri = 'http://localhost:3000/members';
  if (term) {
    uri += `&q=${term}`
  }

  var res = await fetch(uri);
  var members = await res.json();
      console.log( members );

//   var  aHTML    =  members.sort( sortitem ).map( fmtMember ).join( "\n" )
 var  members  =  members.sort( sortitem ).map( fmtMember ) 
 var  template =  members.join( "\n" )

// ------------------------------------------------------------------------------

 function  fmtMember( pMember, i ) {

      var  aClass   =            i % 2 == 1 ? "row-even" : "row-odd"
//     var  aClass   = "row-" + ( i % 2      ?     "even" :     "odd" )
//     var  aClass   =   (  `class="row-even"` )

      var  aMI      =     pMember.Middlename;  aMI = ( aMI  > "" ) ?   ` ${ aMI.substr(0,1) }. ` : ""
      var  aName    = `${ pMember.FirstName }${aMI} ${ pMember.LastName }`
      var  aPhone   =     pMember.Phone1 + ( pMember.Phone2 > ""   ? `, ${ pMember.Phone2  }` : "" )
           aPhone   =     aPhone == "null" ? "" : aPhone
      var  aEmail   =     pMember.Email

      var  aRow     = `  <tr Class="${ aClass }" id="R${ `${ i + 1 }`.padStart( 3, "0" ) }">\n`
                    + `  <td class="name"><strong><a href="syschangepassword.js?username=${ aName }">${ aName }</a></strong></td>\n`
                    + `  <td class="email"><small ><a href="mailto:${ aEmail }">Email Address</a></small></td>\n`
                    + `  <td class="phone"><small >${ aPhone }&nbsp;&nbsp;&nbsp;</small></td>\n`
                    + `</tr>\n`

//          mHTMLs.push( aRow )
//          aData    = aHeadRow + aRow
           aData    = aRow
   return  aData
           }   // eof  fmtMember 
     

  /*
  let template = '';
  members.forEach( member => { fmtMembers( member ) } )
  
  posts.forEach(post => {
    template += `
      <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 200)}...</p>
        <a href="details.html?id=${post.id}">Read more</a>    <!-- .(21212.02.2 RAM Don't use absolute url) -->
      </div>
    `
  });
*/
  container.innerHTML = template;
}

// search
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
})

window.addEventListener('DOMContentLoaded', () => renderPosts());


function  sortitem( a, b ) {                                                          // .(21209.04.1 RJS Beg Add SortItems)
  return (a.LastName + a.FirstName) > (b.LastName + b.FirstName) ? 1 : -1
          }                                                                           // .(21209.04.1 RJS End)
