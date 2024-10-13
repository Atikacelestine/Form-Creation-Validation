//Intialize the Async Function
async function fetchUserData();{ 
const apiUrl='https://jsonplaceholder.typicode.com/users'
    const dataContainer= document.getElementById('api-data')
    try{
        dataContainer.innerHTML="";
        dataContainer.text='Loading user data...';
        const response = await fetch (apiUrl);
        const users = await response.json();

        dataContainer.text.Content="";
        const userList=document.createElement('ul');
        users.forEach(user=>{
            const listItem =document.createElement('li');
            listItems.push(listItem);
            listItem.textContent= user.name;
            userList.appenChild(listItem);
        });
        dataContainer.appendChild(userList);

    }catch(error){
        dataContainer.textContent='Failed to load user data';
        console.error('Error.',error);
    }
}
document.addEventListener('DOMContentLoaded',fetchUserData);
