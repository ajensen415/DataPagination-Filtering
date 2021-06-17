
//This function will display a page of 9 students & include each individual's personal info.
function showPage (list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i ++ ) {
      if (i >= startIndex && i < endIndex) {
         const li = document.createElement('li');
         li.className = 'student-item cf';
         studentList.appendChild(li);

         const studentDetails = document.createElement('div');
         studentDetails.className = 'student-details';
         li.appendChild(studentDetails);

         const avatar = document.createElement('img');
         avatar.className = 'avatar';
         avatar.src = list[i].picture.large;
         avatar.alt = 'Profile Picture';
         studentDetails.appendChild(avatar);

         const studentName = document.createElement('h3');
         studentName.textContent = `${list[i].name.title}. ${list[i].name.first} ${list[i].name.last}`;
         studentDetails.appendChild(studentName);

         const studentEmail = document.createElement('span');
         studentEmail.className = 'email';
         studentEmail.textContent = `${list[i].email}`;
         studentDetails.appendChild(studentEmail);

         const joinedDetails = document.createElement('div');
         joinedDetails.className = 'joined-details';
         li.appendChild(joinedDetails);

         const dateJoined = document.createElement('span');
         dateJoined.className = 'date';
         dateJoined.textContent = `${list[i].registered.date}`;
         joinedDetails.appendChild(dateJoined);
       } 
   }
}

//This function will create & append the pagination buttons to allow users to navigate to different pages.
function addPagination(list) {
   const buttonCount = Math.ceil(list.length / 9);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
      for (let i = 1; i <= buttonCount; i ++) {
      const li = document.createElement('li');
      const pageButton = document.createElement('button');
      pageButton.type = 'button';
      pageButton.textContent = i;
      li.appendChild(pageButton);
      linkList.appendChild(li);
   }
   linkList.children[0].children[0].className = 'active';
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         for (i = 0; i < linkList.children.length; i ++) {
            const currentButton = linkList.children[i].children[0];
            currentButton.className = '';
         } 
         e.target.className = 'active';
         showPage(data, e.target.textContent);
      }
   });
}

//Call functions
showPage(data,1);
addPagination(data);

