ALTER PROCEDURE "DBA"."http_getCSS"(in url char(255))
RESULT(css long varchar)
BEGIN
   
call sa_set_http_header( 'Content-Type', 'text/css');
    select xp_read_file(dba.getPath()  ||'CSS/'||  url);
END

CREATE SERVICE "css" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getCSS(:url);
