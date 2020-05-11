ALTER PROCEDURE "DBA"."getContact" (in Acti char(50))
    result ( ActiTel char(30), ActiEmail char(100))
	BEGIN
    call sa_set_http_header('Content-Type', 'application:JSON; charset=utf-8');	
	select list('<tr>'||'<td>'||ActiviteTelephone||'</td>'|| ' '||'<td>'||activiteEmail||'</td>'||'</tr>')
	From tbContact
	WHERE Nom = Acti
	END
	
CREATE SERVICE "Contact" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call getContact(:acti);
	