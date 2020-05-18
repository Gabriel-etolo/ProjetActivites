CREATE PROCEDURE "DBA"."addReview"(in acti varchar(50), in title varchar(50), in content varchar(240))
/* RESULT( nom_colonne type_colonne, ... ) */
BEGIN
Call sa_set_http_header('Access-Control-Allow-Origin', '*');

	/*INSERT into tbReviews values(title, content, acti);*/
    INSERT INTO tbReviews (actiReviewTitle, actiReviewContent, nomActivite) VALUES (title, content, acti);
END;
