ALTER PROCEDURE "DBA"."http_getPage"(in url char(255) )
result(html long varchar)
BEGIN
  call sa_set_http_header( 'Content-Type', 'text/html' ); 
	select xp_read_file(dba.getPath() || url || '.html'); 
END

CREATE SERVICE "page" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getPage(:url);
