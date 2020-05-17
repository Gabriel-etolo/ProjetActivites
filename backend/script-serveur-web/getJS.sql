ALTER PROCEDURE "DBA"."http_getJS" (in url varchar(200))
        result(js long varchar)
    BEGIN
    call sa_set_http_header( 'content-Type', 'text/javascript');
    select xp_read_file(dba.getPath()||'JS\'||url);
    END
	
CREATE SERVICE "js" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getJS(:url);
	