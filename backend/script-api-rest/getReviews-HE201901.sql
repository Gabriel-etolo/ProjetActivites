CREATE PROCEDURE "DBA"."getReviews" (in Acti char(50))
	BEGIN
    call sa_set_http_header('Content-Type', 'application:json; charset=utf-8');
    SELECT DBA.tbReviews.actiReviewTitle, actiReviewContent
	From tbReviews
	WHERE nomActivite = Acti
END;
