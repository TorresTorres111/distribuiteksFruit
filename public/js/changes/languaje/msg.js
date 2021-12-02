
// succes
try {
    let succes = document.querySelector( '#succes' );
    if ( succes.innerText == 'add' ) {
        if ( languaje == 'English' ) succes.innerHTML = 'Task added successfully';
        if ( languaje == 'Español' ) succes.innerHTML = 'Tarea añadida correctamente ';
        if ( languaje == 'Français' ) succes.innerHTML = 'tâche ajoutée avec succès';
        if ( languaje == '日本' ) succes.innerHTML = 'タスクが正常に追加されました';
        if ( languaje == '한국인' ) succes.innerHTML = '작업이 성공적으로 추가되었습니다';
        if ( !languaje ) succes.innerHTML = 'Note added successfully';
    };
    if ( succes.innerText == 'edit' ) {
        if ( languaje == 'English' ) succes.innerHTML = 'Task edited successfully';
        if ( languaje == 'Español' ) succes.innerHTML = 'Tarea editada correctamente ';
        if ( languaje == 'Français' ) succes.innerHTML = 'tâche modifiée avec succès';
        if ( languaje == '日本' ) succes.innerHTML = 'タスクが正常に編集されました';
        if ( languaje == '한국인' ) succes.innerHTML = '작업이 성공적으로 수정되었습니다';
        if ( !languaje ) succes.innerHTML = 'Task edited successfully';
    };
    if ( succes.innerText == 'delete' ) {
        if ( languaje == 'English' ) succes.innerHTML = 'Task removed successfully';
        if ( languaje == 'Español' ) succes.innerHTML = 'Tarea eliminada correctamente ';
        if ( languaje == 'Français' ) succes.innerHTML = 'tâche supprimée avec succès';
        if ( languaje == '日本' ) succes.innerHTML = 'タスクは正常に削除されました';
        if ( languaje == '한국인' ) succes.innerHTML = '작업이 성공적으로 제거되었습니다';
        if ( !languaje ) succes.innerHTML = 'Task removed successfully';
    };
    if ( succes.innerText == 'register' ) {
        if ( languaje == 'English' ) succes.innerHTML = 'You have successfully registered';
        if ( languaje == 'Español' ) succes.innerHTML = 'Te has registrado con éxito';
        if ( languaje == 'Français' ) succes.innerHTML = 'vous vous êtes inscrit avec succès';
        if ( languaje == '日本' ) succes.innerHTML = '登録に成功しました';
        if ( languaje == '한국인' ) succes.innerHTML = '성공적으로 등록했습니다';
        if ( !languaje ) succes.innerHTML = 'You have successfully registered';
    };
    if ( succes.innerText == 'logout' ) {
        if ( languaje == 'English' ) succes.innerHTML = 'Session closed successfully';
        if ( languaje == 'Español' ) succes.innerHTML = 'Sesión cerrada con éxito';
        if ( languaje == 'Français' ) succes.innerHTML = 'session fermée avec succès';
        if ( languaje == '日本' ) succes.innerHTML = 'セッションは正常に終了しました';
        if ( languaje == '한국인' ) succes.innerHTML = '세션이 성공적으로 종료되었습니다';
        if ( !languaje ) succes.innerHTML = 'Session closed successfully';
    };
    if ( succes.innerText == 'passChange' ) {
        if ( languaje == 'English' ) succes.innerHTML = 'Password changed successfully';
        if ( languaje == 'Español' ) succes.innerHTML = 'Contraseña cambiada correctamente';
        if ( languaje == 'Français' ) succes.innerHTML = 'le mot de passe a été changé avec succès';
        if ( languaje == '日本' ) succes.innerHTML = 'パスワードは正常に変更されました';
        if ( languaje == '한국인' ) succes.innerHTML = '비밀번호가 성공적으로 변경되었습니다';
        if ( !languaje ) succes.innerHTML = 'Password changed successfully';
    };
    if ( succes.innerText == 'completed' ) {
        if ( languaje == 'English' ) succes.innerHTML = 'Task recorded as completed';
        if ( languaje == 'Español' ) succes.innerHTML = 'Tarea registrada como completada';
        if ( languaje == 'Français' ) succes.innerHTML = 'tâche enregistrée comme terminée';
        if ( languaje == '日本' ) succes.innerHTML = '完了したものとして記録されたタスク';
        if ( languaje == '한국인' ) succes.innerHTML = '완료된 것으로 기록된 작업';
        if ( !languaje ) succes.innerHTML = 'Task recorded as completed';
    };
    if ( succes.innerText == 'name' ) {
        if ( languaje == 'English' ) succes.innerHTML = 'Name changed successfully';
        if ( languaje == 'Español' ) succes.innerHTML = 'Nombre cambiado exitosamente';
        if ( languaje == 'Français' ) succes.innerHTML = 'nom modifié avec succès';
        if ( languaje == '日本' ) succes.innerHTML = '名前が正常に変更されました';
        if ( languaje == '한국인' ) succes.innerHTML = '이름이 성공적으로 변경되었습니다';
        if ( !languaje ) succes.innerHTML = 'Name changed successfully';
    };
} catch ( err ) {
    console.log();
};


// errors
try {
    let errors = document.querySelector( '#errors' );
    if ( errors.innerText == 'missing' ) {
        if ( languaje == 'English' ) errors.innerHTML = 'Missed adding note information';
        if ( languaje == 'Español' ) errors.innerHTML = 'Faltó agregar información de la nota';
        if ( languaje == 'Français' ) errors.innerHTML = `vous avez manqué l'ajout d'informations sur la note`;
        if ( languaje == '日本' ) errors.innerHTML = 'メモ情報の追加を逃した';
        if ( languaje == '한국인' ) errors.innerHTML = '메모 정보를 추가하지 못했습니다';
        if ( !languaje ) errors.innerHTML = 'Missed adding note information';
    };
    if ( errors.innerText == 'fields' ) {
        if ( languaje == 'English' ) errors.innerHTML = 'That email is already registered';
        if ( languaje == 'Español' ) errors.innerHTML = 'Rellena todos los campos';
        if ( languaje == 'Français' ) errors.innerHTML = `remplissez tous les champs`;
        if ( languaje == '日本' ) errors.innerHTML = 'すべてのフィールドに入力します';
        if ( languaje == '한국인' ) errors.innerHTML = '모든 필드를 채우십시오';
        if ( !languaje ) errors.innerHTML = 'Fill in all the fields';
    };
    if ( errors.innerText == 'userExist' ) {
        if ( languaje == 'English' ) errors.innerHTML = 'That email is already registered';
        if ( languaje == 'Español' ) errors.innerHTML = 'Ese correo ya está registrado';
        if ( languaje == 'Français' ) errors.innerHTML = `cet email est déjà enregistré`;
        if ( languaje == '日本' ) errors.innerHTML = 'そのメールはすでに登録されています';
        if ( languaje == '한국인' ) errors.innerHTML = '이미 등록된 이메일입니다';
        if ( !languaje ) errors.innerHTML = 'That email is already registered';
    };
    if ( errors.innerText == 'noUser' ) {
        if ( languaje == 'English' ) errors.innerHTML = 'It seems that this email is not registered';
        if ( languaje == 'Español' ) errors.innerHTML = 'Parece ser que este correo no esta registrado';
        if ( languaje == 'Français' ) errors.innerHTML = `il semble que cet email ne soit pas enregistré`;
        if ( languaje == '日本' ) errors.innerHTML = 'このメールは登録されていないようです';
        if ( languaje == '한국인' ) errors.innerHTML = '이 이메일이 등록되지 않은 것 같습니다';
        if ( !languaje ) errors.innerHTML = 'It seems that this email is not registered';
    };
    if ( errors.innerText == 'incorrectPass' ) {
        if ( languaje == 'English' ) errors.innerHTML = 'Incorrect password';
        if ( languaje == 'Español' ) errors.innerHTML = 'Contraseña incorrecta';
        if ( languaje == 'Français' ) errors.innerHTML = `mot de passe incorrect`;
        if ( languaje == '日本' ) errors.innerHTML = 'パスワードが正しくありません';
        if ( languaje == '한국인' ) errors.innerHTML = '잘못된 비밀번호';
        if ( !languaje ) errors.innerHTML = 'Incorrect password';
    };
    if ( errors.innerText == 'requiredLogin' ) {
        if ( languaje == 'English' ) errors.innerHTML = 'Please log in before doing this';
        if ( languaje == 'Español' ) errors.innerHTML = 'Inicia sesión antes de realizar esta acción';
        if ( languaje == 'Français' ) errors.innerHTML = `veuillez vous connecter avant de faire cela`;
        if ( languaje == '日本' ) errors.innerHTML = 'これを行う前にログインしてください';
        if ( languaje == '한국인' ) errors.innerHTML = '이 작업을 수행하기 전에 로그인하십시오';
        if ( !languaje ) errors.innerHTML = 'Please log in before doing this';
    };
    if ( errors.innerText == 'match' ) {
        if ( languaje == 'English' ) errors.innerHTML = 'New passwords do not match';
        if ( languaje == 'Español' ) errors.innerHTML = 'Las nuevas contraseñas no coinciden';
        if ( languaje == 'Français' ) errors.innerHTML = `les nouveaux mots de passe ne correspondent pas`;
        if ( languaje == '日本' ) errors.innerHTML = '新しいパスワードが一致しません';
        if ( languaje == '한국인' ) errors.innerHTML = '새 비밀번호가 일치하지 않습니다';
        if ( !languaje ) errors.innerHTML = 'New passwords do not match';
    };
    if ( errors.innerText == 'stop' ) {
        if ( languaje == 'English' ) errors.innerHTML = 'Stop there hacker >...< please';
        if ( languaje == 'Español' ) errors.innerHTML = 'Alto ahi hacker >...< por favor';
        if ( languaje == 'Français' ) errors.innerHTML = `arrêtez là pirate >...< s'il vous plaît`;
        if ( languaje == '日本' ) errors.innerHTML = 'ハッカーを止めて >...< お願いします';
        if ( languaje == '한국인' ) errors.innerHTML = '그만해 해커 >...< 제발';
        if ( !languaje ) errors.innerHTML = 'Stop there hacker >...< please';
    };
} catch ( err ) {
    console.log();
};