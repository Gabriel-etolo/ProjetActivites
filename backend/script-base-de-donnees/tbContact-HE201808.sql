CREATE TABLE "DBA"."tbContact" (
	"IDContact" INTEGER NOT NULL,
	"ActiviteTelephone" CHAR(30) NOT NULL,
	"ActiviteEmail" CHAR(100) NULL,
	"Nom" VARCHAR(50) NULL,
	PRIMARY KEY ( "IDContact" ASC )
) IN "system";
