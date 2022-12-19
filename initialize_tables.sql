DROP TABLE IF EXISTS public."ANIMALS" CASCADE;
DROP TABLE IF EXISTS public."USERS" CASCADE;
DROP TABLE IF EXISTS public."FAVORITES" CASCADE;
DROP TABLE IF EXISTS public."TOKENS" CASCADE;

CREATE TABLE public."ANIMALS"
(
    "ID" uuid NOT NULL,
    "NAME" character varying NOT NULL,
    "DESC" character varying NOT NULL,
    "URL" character varying NOT NULL,
    "X" character varying NULL,
    "Y" character varying NULL,
    PRIMARY KEY ("ID")
);

ALTER TABLE IF EXISTS public."ANIMALS"
    OWNER to postgres;

CREATE TABLE public."USERS"
(
    "ID" uuid NOT NULL,
    "NAME" character varying NOT NULL,
    "PASSWORD" character varying NOT NULL,
    "PERMISSION" character varying NOT NULL,
    PRIMARY KEY ("ID")
);

ALTER TABLE IF EXISTS public."USERS"
    OWNER to postgres;

CREATE TABLE public."FAVORITES"
(
    "USER_ID" uuid NOT NULL,
    "ANIMAL_ID" uuid NOT NULL,
    CONSTRAINT "LOCAL_USER_ID" FOREIGN KEY ("USER_ID")
        REFERENCES public."USERS" ("ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "LOCAL_ANIMAL_ID" FOREIGN KEY ("ANIMAL_ID")
        REFERENCES public."ANIMALS" ("ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public."FAVORITES"
    OWNER to postgres;

CREATE TABLE public."TOKENS"
(
    "USER_ID" uuid NOT NULL,
    "VALUE" character varying NOT NULL,
    PRIMARY KEY ("USER_ID"),
    CONSTRAINT "LOCAL_USER_ID" FOREIGN KEY ("USER_ID")
        REFERENCES public."USERS" ("ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public."TOKENS"
    OWNER to postgres;