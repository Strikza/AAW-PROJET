DELETE FROM  public."FAVORITES";
DELETE FROM  public."USERS";
DELETE FROM  public."ANIMALS";

INSERT INTO public."USERS"(
    "ID", "NAME", "PASSWORD", "PERMISSION")
VALUES 
    ('c2e85e90-6101-11ed-9b6a-0242ac120001', 'admin', 'admin', 'admin'),
    ('c2e85e90-6101-11ed-9b6a-0242ac120002', 'user', 'user', 'user');

INSERT INTO public."ANIMALS"(
    "ID", "NAME", "DESC", "URL", "X", "Y")
VALUES
    ('00000000-0000-0000-0000-000000000000', 'Vache', 'Une boîte à meuh sur pattes.', 'annexe/animals/092-vache.png', '200px', '200px'),
    ('00000000-0000-0000-0000-000000000001', 'Poule', 'Ca pond des oeufs.', 'annexe/animals/093-poule.png', '300px', '200px'),
    ('00000000-0000-0000-0000-000000000002', 'Mouton', 'Behhhhhh.', 'annexe/animals/091-mouton.png', '200px', '300px'),
    ('00000000-0000-0000-0000-000000000003', 'Cochon', 'Tout est bon dans le cochon.', 'annexe/animals/090-cochon.png', '300px', '300px'),
    ('00000000-0000-0000-0000-000000000004', 'Ours polaire', 'Dans 2 ans il n''y en aura plus.', 'annexe/animals/102-polar_bear.png', '400px', '500px'),
    ('00000000-0000-0000-0000-000000000005', 'Allay', 'Petite bête trop mignonne.', 'annexe/animals/allay.gif', '400px', '700px'),
    ('00000000-0000-0000-0000-000000000006', 'Morue', 'Poisson moche.', 'annexe/animals/cod.gif', '100px', '600px'),
    ('00000000-0000-0000-0000-000000000007', 'Dauphin', 'Gentil gros poisson.', 'annexe/animals/dolphin.png', '200px', '900px'),
    ('00000000-0000-0000-0000-000000000008', 'Grenouille', 'Matez-moi cette cuisse.', 'annexe/animals/frog_cold.gif', '400px', '500px'),
    ('00000000-0000-0000-0000-000000000009', 'Chèvre', 'Son fromage est pas bon.', 'annexe/animals/goat.png', '800px', '300px'),
    ('00000000-0000-0000-0000-000000000010', 'Poisson-globe', 'Regardez, il gonfle.', 'annexe/animals/pufferfish.gif', '600px', '200px'),
    ('00000000-0000-0000-0000-000000000011', 'Saumon', 'Délicieux avec une petite sauce.', 'annexe/animals/salmon.gif', '900px', '900px'),
    ('00000000-0000-0000-0000-000000000012', 'Creeper', 'Et ça fait bim bam boum.', 'annexe/animals/050-creeper.png', '700px', '900px'),
    ('00000000-0000-0000-0000-000000000013', 'Wither squelette', 'Squelette qui a un peu trop crâmé au soleil.', 'annexe/animals/051-1-squelette-wither.png', '100px', '800px'),
    ('00000000-0000-0000-0000-000000000014', 'Araignée Jockey', 'Espèce rare en voie de disparition.', 'annexe/animals/052-51-Jockey.png', '400px', '500px'),
    ('00000000-0000-0000-0000-000000000015', 'Zombie', 'Un mort qui est vivant.', 'annexe/animals/054-zombie.png', '300px', '600px'),
    ('00000000-0000-0000-0000-000000000016', 'Ghast', 'Grosse méduse volante qui ne pique pas.', 'annexe/animals/056-ghast.gif', '400px', '600px'),
    ('00000000-0000-0000-0000-000000000017', 'Poisson d''argent', 'Insecte pas très fréquentable.', 'annexe/animals/060-silverfish.gif', '700px', '200px'),
    ('00000000-0000-0000-0000-000000000018', 'Blaze', 'Jongleur de feu.', 'annexe/animals/061-blaze.png', '600px', '200px'),
    ('00000000-0000-0000-0000-000000000019', 'Enderdragon', 'Gros oiseau qui a beaucoup d''expérience.', 'annexe/animals/063-enderdragon.gif', '800px', '500px'),
    ('00000000-0000-0000-0000-000000000020', 'Wither', 'Le boss final du zoo.', 'annexe/animals/064-Wither.png', '100px', '900px');