export default function Menu() {
    return (
        <>
        <header>
            <a href="/"><img src="../../annexe/Accueil/lien_accueil.png" id="menu_img"></img></a>
            <nav>
                <ul id="menu">
                    <li class="menu_item">
                        <a href="/liste">Liste des animaux</a>
                    </li>
                    <li class="menu_item">
                        <a href="/plan">Plan</a>
                    </li>
                    <li class="menu_item" id="connexion">
                        <a href="/connexion">Connexion/Inscription</a>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
  }
  