
// mainVariables
let bgAuto = document.querySelector( '#bg' );
let iconAuto = document.querySelector( '#icon' );
let fruitImgAuto = document.querySelector( '#fruitImg' );
let fruitTextAuto = document.querySelector( '#fruitText' );


// fruitsThumb
const appleThumb = document.querySelector( '#apple' );
const mangoThumb = document.querySelector( '#mango' );
const watermelonThumb = document.querySelector( '#watermelon' );
const dragonFruitThumb = document.querySelector( '#dragonFruit' );
const pineAppleThumb = document.querySelector( '#pineApple' );
const blueBerryThumb = document.querySelector( '#blueBerry' );


// appleThumbSelect
appleThumb.addEventListener( 'click', () => {
    appleThumb.classList = 'active';
    mangoThumb.classList = '';
    watermelonThumb.classList = '';
    dragonFruitThumb.classList = '';
    pineAppleThumb.classList = '';
    blueBerryThumb.classList = '';
    iconAuto.href = './img/icon/apple.png';
    fruitImgAuto.src = './img/fruits/apple.png';
    bgAuto.style.background = '#fc4a55';
    fruitTextAuto.innerHTML = 'Apple';
    theme = localStorage.setItem( 'theme', 'apple' );
});


// mangoThumbSelect
mangoThumb.addEventListener( 'click', () => {
    appleThumb.classList = '';
    mangoThumb.classList = 'active';
    watermelonThumb.classList = '';
    dragonFruitThumb.classList = '';
    pineAppleThumb.classList = '';
    blueBerryThumb.classList = '';
    iconAuto.href = './img/icon/mango.png';
    fruitImgAuto.src = './img/fruits/mango.png';
    bgAuto.style.background = '#ffcc02';
    fruitTextAuto.innerHTML = 'Mango';
    theme = localStorage.setItem( 'theme', 'mango' );
});


// watermelonThumbSelect
watermelonThumb.addEventListener( 'click', () => {
    appleThumb.classList = '';
    mangoThumb.classList = '';
    watermelonThumb.classList = 'active';
    dragonFruitThumb.classList = '';
    pineAppleThumb.classList = '';
    blueBerryThumb.classList = '';
    iconAuto.href = './img/icon/watermelon.png';
    fruitImgAuto.src = './img/fruits/watermelon.png';
    bgAuto.style.background = '#92ba3c';
    fruitTextAuto.innerHTML = 'Watermelon';
    theme = localStorage.setItem( 'theme', 'watermelon' );
});


// dragonFruitThumbSelect
dragonFruitThumb.addEventListener( 'click', () => {
    appleThumb.classList = '';
    mangoThumb.classList = '';
    watermelonThumb.classList = '';
    dragonFruitThumb.classList = 'active';
    pineAppleThumb.classList = '';
    blueBerryThumb.classList = '';
    iconAuto.href = './img/icon/dragonFruit.png';
    fruitImgAuto.src = './img/fruits/dragonFruit.png';
    bgAuto.style.background = '#fb6cb2';
    fruitTextAuto.innerHTML = 'DragonFruit';
    theme = localStorage.setItem( 'theme', 'dragonFruit' );
});


// pineAppleThumbSelect
pineAppleThumb.addEventListener( 'click', () => {
    appleThumb.classList = '';
    mangoThumb.classList = '';
    watermelonThumb.classList = '';
    dragonFruitThumb.classList = '';
    pineAppleThumb.classList = 'active'
    blueBerryThumb.classList = '';
    iconAuto.href = './img/icon/pineApple.png';
    fruitImgAuto.src = './img/fruits/pineApple.png';
    fruitTextAuto.innerHTML = 'PineApple';
    bgAuto.style.background = '#ffb43b';
    theme = localStorage.setItem( 'theme', 'pineApple' );
});


// blueBerryThumbSelect
blueBerryThumb.addEventListener( 'click', () => {
    appleThumb.classList = '';
    mangoThumb.classList = '';
    watermelonThumb.classList = '';
    dragonFruitThumb.classList = '';
    pineAppleThumb.classList = '';
    blueBerryThumb.classList = 'active';
    iconAuto.href = './img/icon/blueBerry.png';
    fruitImgAuto.src = './img/fruits/blueBerry.png';
    fruitTextAuto.innerHTML = 'BlueBerry';
    bgAuto.style.background = '#0096c7';
    theme = localStorage.setItem( 'theme', 'blueBerry' );
});


// mainVariables
let titleAuto = document.querySelector( '#title' );
let tasksAuto = document.querySelector( '#navTasks' );
let addTasksAuto = document.querySelector( '#navAddTask' );
let accountAuto = document.querySelector( '#navAccount' );
let nameAuto = document.querySelector( '#name' );
let editNameAuto = document.querySelector( '#editName' );
let changePasswordAuto = document.querySelector( '#changePassword' );
let completedAuto = document.querySelector( '#completed' );
let changeLanguajeAuto = document.querySelector( '#changeLanguaje' );


let languajeAuto = document.querySelector( '#languaje' );


// languajeClick
languajeAuto.addEventListener( 'click', () => {
    localStorage.setItem( 'languaje', languajeAuto.value );
    languaje = localStorage.getItem( 'languaje' );
    console.log( languaje );
    if ( languaje == 'English' ) {
        titleAuto.innerHTML = 'Account';
        tasksAuto.innerHTML = 'Tasks';
        addTasksAuto.innerHTML = 'Add task';
        accountAuto.innerHTML = 'Account';
        nameAuto.innerHTML = 'Name:';
        editNameAuto.innerHTML = 'Edit name';
        changePasswordAuto.innerHTML = 'Change password'
        completedAuto.innerHTML = 'Completed tasks:';
        changeLanguajeAuto.innerHTML = 'Change languaje:';
    };
    if ( languaje == 'Español' ) {
        titleAuto.innerHTML = 'Cuenta';
        tasksAuto.innerHTML = 'Tareas';
        addTasksAuto.innerHTML = 'Añadir tarea';
        accountAuto.innerHTML = 'Cuenta';
        nameAuto.innerHTML = 'Nombre:';
        editNameAuto.innerHTML = 'Editar nombre';
        changePasswordAuto.innerHTML = 'Cambiar contraseña'
        completedAuto.innerHTML = 'Tareas completadas:';
        changeLanguajeAuto.innerHTML = 'Cambiar idioma:';
    };
    if ( languaje == 'Français' ) {
        titleAuto.innerHTML = 'compte';
        tasksAuto.innerHTML = 'corvées';
        addTasksAuto.innerHTML = 'ajouter une tâche';
        accountAuto.innerHTML = 'compte';
        nameAuto.innerHTML = 'com:';
        editNameAuto.innerHTML = 'modifier le nom';
        changePasswordAuto.innerHTML = 'changer le mot de passe'
        completedAuto.innerHTML = 'tâches terminées:';
        changeLanguajeAuto.innerHTML = 'changer la langue:';
    };
    if ( languaje == '日本' ) {
        titleAuto.innerHTML = '明細書';
        tasksAuto.innerHTML = '家事';
        addTasksAuto.innerHTML = 'タスクを追加';
        accountAuto.innerHTML = '明細書';
        nameAuto.innerHTML = '名前';
        editNameAuto.innerHTML = '名前を編集する';
        changePasswordAuto.innerHTML = 'パスワードを変更する'
        completedAuto.innerHTML = '完了したタスク';
        changeLanguajeAuto.innerHTML = '言語を変更';
    };
    if ( languaje == '한국인' ) {
        titleAuto.innerHTML = '청구서';
        tasksAuto.innerHTML = '허드렛 일';
        addTasksAuto.innerHTML = '작업 추가';
        accountAuto.innerHTML = '청구서';
        nameAuto.innerHTML = '이름';
        editNameAuto.innerHTML = '이름 수정';
        changePasswordAuto.innerHTML = '비밀번호 변경'
        completedAuto.innerHTML = '완료된 작업';
        changeLanguajeAuto.innerHTML = '언어 변경';
    };
});