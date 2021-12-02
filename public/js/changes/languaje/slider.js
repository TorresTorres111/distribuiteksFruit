
// mainVariables
let h21 = document.querySelector( '#h21' );
let h22 = document.querySelector( '#h22' );
let h23 = document.querySelector( '#h23' );
let p1 = document.querySelector( '#p1' );
let p2 = document.querySelector( '#p2' );
let p3 = document.querySelector( '#p3' );


// changeSlider
const changeSlider = () => {

    if ( languaje == 'English' ) {
        h21.innerHTML = 'Hello !!!';
        h22.innerHTML = 'Fruit themes ???';
        h23.innerHTML = 'Notifications . . .';
        p1.innerHTML = `Think of a place. . . <br> Where you can keep your homework organized, a place that helps you never finish your tasks late again, that is a comfortable and customizable place <br> That's skFruit.`;
        p2.innerHTML = 'In ksFruit you can place fruit themes to customize the application <br> Choose the one that best suits your style, you can choose between apple, watermelon, blueberry, among some others.';
        p3.innerHTML = 'ksFruit not only allows you to add tasks <br> The application will also send you a notification one day before you have to deliver or finish the task.'
    };
    if ( languaje == 'Español' ) {
        h21.innerHTML = 'Hola !!!';
        h22.innerHTML = 'Temas frutales ???';
        h23.innerHTML = 'Notificaciones . . .';
        p1.innerHTML = 'Piensa en un lugar . . . <br> Donde puedas mantener tus deberes organizados, un lugar que te ayude a nunca mas terminar tus tareas tarde, que sea un lugar cómodo y personalizable <br> Eso es skFruit.';
        p2.innerHTML = 'En ksFruit puedes colocar temas frutales para personalizar la aplicación <br> Elije el que mas se adapte a tu estilo, puedes elegir entre manzana, sandía, mora azul, entre algunos otros.';
        p3.innerHTML = 'In ksFruit you can place fruit themes to customize the application <br> Choose the one that best suits your style, you can choose between apple, watermelon, blueberry, among some others.'
    }
    if ( languaje == 'Français' ) {
        h21.innerHTML = 'salut !!!';
        h22.innerHTML = `thèmes de fruits ???`;
        h23.innerHTML = 'notifications . . .';
        p1.innerHTML = `Pensez à un endroit. . . <br> Où vous pouvez garder vos devoirs organisés, un endroit qui vous aide à ne plus jamais terminer vos tâches en retard, c'est un endroit confortable et personnalisable <br> C'est skFruit.`;
        p2.innerHTML = `Dans ksFruit, vous pouvez placer des thèmes de fruits pour personnaliser l'application <br> Choisissez celui qui convient le mieux à votre style, vous pouvez choisir entre pomme, pastèque, myrtille, entre autres.`;
        p3.innerHTML = `ksFruit vous permet non seulement d'ajouter des tâches <br> L'application vous enverra également une notification un jour avant que vous deviez livrer ou terminer la tâche.`;
    };
    if ( languaje == '日本' ) {
        h21.innerHTML = 'こんにちは';
        h22.innerHTML = 'フルーツのテーマ';
        h23.innerHTML = '通知';
        p1.innerHTML = '場所を考えてください。 。 。 <br>宿題を整理しておくことができる場所、タスクを二度と遅く終わらせないようにする場所、それは快適でカスタマイズ可能な場所です<br>それはskFruitです。';
        p2.innerHTML = 'ksFruitでは、フルーツのテーマを配置してアプリケーションをカスタマイズできます。<br>自分のスタイルに最適なテーマを選択し、リンゴ、スイカ、ブルーベリーなどから選択できます。';
        p3.innerHTML = 'ksFruitを使用すると、タスクを追加できるだけでなく、<br>アプリケーションは、タスクを配信または終了する必要がある1日前に通知を送信します。'
    };
    if ( languaje == '한국인' ) {
        h21.innerHTML = '안녕하십니까';
        h22.innerHTML = '과일 테마';
        h23.innerHTML = '알림';
        p1.innerHTML = '장소를 생각해보십시오. . . <br> 숙제를 정리할 수 있는 곳, 다시는 숙제를 늦게 끝내지 않도록 도와주는 곳, 그것이 편안하고 사용자 정의 가능한 곳입니다 <br> skFruit입니다.';
        p2.innerHTML = 'ksFruit에서는 과일 테마를 배치하여 애플리케이션을 사용자 정의할 수 있습니다. <br> 스타일에 가장 적합한 것을 선택하고, 사과, 수박, 블루베리 중에서 선택할 수 있습니다.';
        p3.innerHTML = 'ksFruit을 사용하면 작업을 추가할 수 있을 뿐만 아니라 <br> 작업을 전달하거나 완료해야 하기 하루 전에 애플리케이션에서 알림을 보내드립니다.'
    };
    if ( !languaje ) {
        h21.innerHTML = 'Hello !!!';
        h22.innerHTML = 'Fruit themes ???';
        h23.innerHTML = 'Notifications . . .';
        p1.innerHTML = `Think of a place. . . <br> Where you can keep your homework organized, a place that helps you never finish your tasks late again, that is a comfortable and customizable place <br> That's skFruit.`;
        p2.innerHTML = 'In ksFruit you can place fruit themes to customize the application <br> Choose the one that best suits your style, you can choose between apple, watermelon, blueberry, among some others.';
        p3.innerHTML = 'ksFruit not only allows you to add tasks <br> The application will also send you a notification one day before you have to deliver or finish the task.'
    };

};
changeSlider();