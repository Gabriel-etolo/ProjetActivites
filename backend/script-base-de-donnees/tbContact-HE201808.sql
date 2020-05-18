CREATE TABLE "DBA"."tbContact" (
	"IDContact" INTEGER NOT NULL,
	"ActiviteTelephone" CHAR(30) NOT NULL,
	"ActiviteEmail" CHAR(100) NULL,
	"Nom" VARCHAR(50) NULL,
	"idNom" INTEGER NULL,
	PRIMARY KEY ( "IDContact" ASC )
) IN "system";

ALTER TABLE "DBA"."tbContact" ADD CONSTRAINT "tbContact_to_tbActivites" FOREIGN KEY ( "idNom" ASC ) REFERENCES "DBA"."tbActivites" ( "idNom" );
