DELETE FROM  public."FAVORITES";
DELETE FROM  public."USERS";
DELETE FROM  public."ANIMALS";
DELETE FROM  public."TOKENS";

INSERT INTO public."USERS"(
    "ID", "NAME", "PASSWORD", "PERMISSION")
VALUES 
    ('91c56141-6e8a-4c1c-a292-ccdcd6b5c481', 'admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'admin'),
    ('db75ed15-34a4-43a1-a2e8-86a27dbd39f6', 'user', '04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb', 'user');

INSERT INTO public."ANIMALS"(
    "ID", "NAME", "DESC", "URL", "X", "Y")
VALUES
    ('99d64b4a-7f81-11ed-a1eb-0242ac120002', 'Vache', 'Une boîte à meuh sur pattes.', 'annexe/animals/092-vache.png', '200px', '1200px'),
    ('a9e9da74-7f81-11ed-a1eb-0242ac120002', 'Poule', 'Ca pond des oeufs.', 'annexe/animals/093-poule.png', '300px', '1200px'),
    ('9ae4cc9c-ed9c-4d26-9425-ba560fcbed0b', 'Mouton', 'Behhhhhh.', 'annexe/animals/091-mouton.png', '200px', '1300px'),
    ('67eb54fe-14f3-4add-89f0-680351a607b2', 'Cochon', 'Tout est bon dans le cochon.', 'annexe/animals/090-cochon.png', '300px', '1300px'),
    ('4a379fb2-e736-45e1-956f-796d8b109798', 'Ours polaire', 'Dans 2 ans il n''y en aura plus.', 'annexe/animals/102-polar_bear.png', '400px', '500px'),
    ('8cc16bf5-bf13-4980-8ea2-3c6d6fa17414', 'Allay', 'Petite bête trop mignonne.', 'annexe/animals/allay.gif', '400px', '1200px'),
    ('9643189d-5935-47dd-abbf-9b4593cca30d', 'Morue', 'Poisson moche.', 'annexe/animals/cod.gif', '100px', '600px'),
    ('2354ea61-be9f-47cd-9cab-01531f72ea1d', 'Dauphin', 'Gentil gros poisson.', 'annexe/animals/dolphin.png', '200px', '900px'),
    ('2edd36d6-ecae-44cc-bfd1-7092be96d31a', 'Grenouille', 'Matez-moi ses cuisses.', 'annexe/animals/frog_cold.gif', '300px', '500px'),
    ('28cb03c1-4dcb-40db-b734-49eb6f1a9bab', 'Chèvre', 'Son fromage n''est pas bon.', 'annexe/animals/goat.png', '800px', '1300px'),
    ('194fcf5b-b272-48d2-bd0e-0564653bf198', 'Poisson-globe', 'Regardez, il gonfle.', 'annexe/animals/pufferfish.gif', '600px', '1200px'),
    ('f19a1b7b-ea94-4f21-b941-a4b7805258dc', 'Saumon', 'Délicieux avec une petite sauce.', 'annexe/animals/salmon.gif', '900px', '900px'),
    ('aa6a772b-10e8-4b57-956e-1ed0f6c5c8a4', 'Creeper', 'Et ça fait bim bam boum.', 'annexe/animals/050-creeper.png', '700px', '900px'),
    ('2563618c-935a-45bc-b499-92ecb247e629', 'Wither squelette', 'Squelette qui a un peu trop crâmé au soleil.', 'annexe/animals/051-1-squelette-wither.png', '100px', '800px'),
    ('b3d29247-8381-497b-a6d6-9b662af89be7', 'Araignée Jockey', 'Espèce rare en voie de disparition.', 'annexe/animals/052-51-Jockey.png', '400px', '900px'),
    ('36cd8444-e1f6-49e1-a52d-ab11ab1d610d', 'Zombie', 'Un mort qui est vivant.', 'annexe/animals/054-zombie.png', '300px', '800px'),
    ('651c5cd6-108b-4985-9170-d2660631728c', 'Ghast', 'Grosse méduse volante qui ne pique pas.', 'annexe/animals/056-ghast.gif', '700px', '700px'),
    ('b42a4913-74e6-45f6-84c5-665220007914', 'Poisson d''argent', 'Insecte pas très fréquentable.', 'annexe/animals/060-silverfish.gif', '700px', '1200px'),
    ('82f5c372-5f30-4d15-831b-2db5c94b0cd2', 'Blaze', 'Jongleur de feu.', 'annexe/animals/061-blaze.png', '500px', '900px'),
    ('0b2a16e0-7dc5-4a83-8328-291363008d28', 'Enderdragon', 'Gros oiseau qui a beaucoup d''expérience.', 'annexe/animals/063-enderdragon.gif', '800px', '500px'),
    ('205fb2b4-f684-4672-b59c-94e538d991e8', 'Wither', 'Le boss final du zoo.', 'annexe/animals/064-Wither.png', '100px', '900px');