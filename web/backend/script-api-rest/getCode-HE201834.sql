ALTER PROCEDURE "DBA"."getCode"()
result(nom char(50), code INTEGER )
BEGIN
call sa_set_http_header('Content-Type', 'application:json; charset=utf-8');	
select VilleNom, VilleCode
 FROM tbVilles
END

CREATE SERVICE "code" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call getCode();
