<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST["name"];
    $nom_de_famille = $_POST["last-name"];
    $email = $_POST["mail"];
    $telephone = $_POST["phone"];
    $message = $_POST["message"];

    // Adresse e-mail de destination
    $destinataire = "votre@email.com";

    // Sujet du message
    $sujet = "Nouveau message de la part de $nom";

    // Corps du message
    $corps_message = "Nom: $nom\n";
    $corps_message .= "Nom de Famille: $nom_de_famille\n";
    $corps_message .= "E-mail: $email\n";
    $corps_message .= "Téléphone: $telephone\n\n";
    $corps_message .= "Message:\n$message";

    // En-têtes du message
    $headers = "De: $email";
}
?>
