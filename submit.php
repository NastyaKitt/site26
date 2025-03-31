<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['tel1']));
    
    // Проверяем, что поля не пустые
    if (!empty($name) && !empty($phone)) {
        $to = 'your_email@example.com'; // Замените на вашу почту
        $subject = 'Новая заявка на ремонт';
        $message = "Имя: $name\nТелефон: $phone";
        $headers = "From: noreply@yourdomain.com\r\n" . // Замените на ваш домен
                   "Reply-To: $to";

        // Отправляем почту
        if (mail($to, $subject, $message, $headers)) {
            echo "Спасибо! Ваша заявка отправлена.";
        } else {
            echo "Ошибка при отправке заявки.";
        }
    } else {
        echo "Пожалуйста, заполните все поля!";
    }
} else {
    echo "Неправильный метод запроса.";
}
?>