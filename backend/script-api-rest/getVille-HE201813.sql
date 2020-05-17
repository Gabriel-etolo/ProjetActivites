ALTER PROCEDURE "DBA"."sp_getVilles" (in code INTEGER )

BEGIN
call sa_set_http_header('Content-Type', 'application:json; charset=utf-8');	
SELECT DBA.tbActivites.Nom
FROM tbActivites
WHERE villeCode = code

END

CREATE SERVICE "getVilles" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call sp_getVilles(:code);
