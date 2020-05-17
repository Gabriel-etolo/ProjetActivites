ALTER FUNCTION "DBA"."getPath"()

returns long varchar
deterministic
BEGIN
 declare dbPath long varchar; 
 declare dbName long varchar; 
 set dbPath = (select db_property ('file'));       
 set dbName = (select db_property('name')) + '.db'; 
 set dbPath = left(dbPath, length(dbPath)-length(dbName)); 
 return dbPath; 
END