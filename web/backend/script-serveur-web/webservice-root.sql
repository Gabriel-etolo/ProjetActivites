CREATE SERVICE "root" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON AS call dba.http_getPage(:url);
