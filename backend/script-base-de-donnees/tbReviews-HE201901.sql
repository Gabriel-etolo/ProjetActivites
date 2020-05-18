CREATE TABLE "DBA"."tbReviews" (
	"actiReviewTitle" VARCHAR(50) NULL,
	"actiReviewContent" VARCHAR(240) NULL,
	"nomActivite" VARCHAR(50) NOT NULL,
	"id" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
	"idNom" INTEGER NULL,
	PRIMARY KEY ( "id" ASC )
) IN "system";
