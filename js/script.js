/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


    


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list, page) {
  const startIndex = (page * 9) - 9;
  const endIndex = (page * 9);

  const ulStudentList = document.querySelector('.student-list');
    ulStudentList.innerHTML = "";

  for(let i = 0; i < list.length; i++){
    if ((i >= startIndex) && (i < endIndex)) {
      const picture = data[i].picture.large;
      const title = data[i].name.title;
      const firstName = data[i].name.first;
      const lastName = data[i].name.last;
      const email = data[i].email;
      const registeredDate = data[i].registered.date; 

      const listItem = `
      <li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src="${picture}" alt="Profile Picture">
          <h3>${title} ${firstName} ${lastName}</h3>
          <span class="email">${email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${registeredDate}</span>
        </div>
      </li>
    `;
    ulStudentList.insertAdjacentHTML('beforeend', listItem);
    }
  }

  return ulStudentList;
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination (list) {
  const numberOfPaginationButtons = Math.ceil( list.length / 9 );
  const linkList = document.querySelector('.link-list'); 
    linkList.innerHTML = "";
  
  for(let i = 1; i < (numberOfPaginationButtons + 1); i++) {
    const pageButton = ` 
    <li>
    <button type="button">${i}</button>
    </li>
    `
    linkList.insertAdjacentHTML('beforeend', pageButton);
  }

  const firstPaginationButton = linkList.firstElementChild.firstElementChild.className = 'active';

  showPage(data, 1);
  

  linkList.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
      for(i = 0; i < linkList.children.length; i++) {
        linkList.children[i].firstElementChild.className = '';
      }
      let activePaginationButton = e.target;
      activePaginationButton.className = 'active';

      const pageNumber = activePaginationButton.textContent;

      showPage(data, pageNumber);
    }
  });
  
  return numberOfPaginationButtons;
}

addPagination(data);

// Call functions
