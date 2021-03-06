-- Database: EducationalPrograms

-- DROP DATABASE "EducationalPrograms";

CREATE DATABASE "EducationalPrograms"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Russian_Russia.1251'
    LC_CTYPE = 'Russian_Russia.1251'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;





CREATE TABLE EduProgram (

 primaryKey UUID NOT NULL,

 Name VARCHAR(100) NULL,

 Description TEXT NULL,

 Semestr UUID NOT NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE Semestr (

 primaryKey UUID NOT NULL,

 Name VARCHAR(100) NULL,

 Description TEXT NULL,

 DateBegin TIMESTAMP(3) NULL,

 DateEnd TIMESTAMP(3) NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE Contract (

 primaryKey UUID NOT NULL,

 Description TEXT NULL,

 Priorities TEXT NULL,

 Number VARCHAR(7) NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (

 LockKey VARCHAR(300) NOT NULL,

 UserName VARCHAR(300) NOT NULL,

 LockDate TIMESTAMP(3) NULL,

 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (

 primaryKey UUID NOT NULL,

 Module VARCHAR(1000) NULL,

 Name VARCHAR(255) NULL,

 Value TEXT NULL,

 "User" VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (

 primaryKey UUID NOT NULL,

 "User" VARCHAR(255) NULL,

 Published BOOLEAN NULL,

 Module VARCHAR(255) NULL,

 Name VARCHAR(255) NULL,

 Value TEXT NULL,

 HotKeyData INT NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (

 primaryKey UUID NOT NULL,

 Name VARCHAR(255) NOT NULL,

 DataObjectView VARCHAR(255) NOT NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (

 primaryKey UUID NOT NULL,

 Name VARCHAR(255) NOT NULL,

 "Order" INT NOT NULL,

 PresentView VARCHAR(255) NOT NULL,

 DetailedView VARCHAR(255) NOT NULL,

 FilterSetting_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (

 primaryKey UUID NOT NULL,

 Caption VARCHAR(255) NOT NULL,

 DataObjectView VARCHAR(255) NOT NULL,

 ConnectMasterProp VARCHAR(255) NOT NULL,

 OwnerConnectProp VARCHAR(255) NULL,

 FilterSetting_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (

 primaryKey UUID NOT NULL,

 DataObjectType VARCHAR(255) NOT NULL,

 Container VARCHAR(255) NULL,

 ContainerTag VARCHAR(255) NULL,

 FieldsToView VARCHAR(255) NULL,

 FilterSetting_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (

 primaryKey UUID NOT NULL,

 AppName VARCHAR(256) NULL,

 UserName VARCHAR(512) NULL,

 UserGuid UUID NULL,

 ModuleName VARCHAR(1024) NULL,

 ModuleGuid UUID NULL,

 SettName VARCHAR(256) NULL,

 SettGuid UUID NULL,

 SettLastAccessTime TIMESTAMP(3) NULL,

 StrVal VARCHAR(256) NULL,

 TxtVal TEXT NULL,

 IntVal INT NULL,

 BoolVal BOOLEAN NULL,

 GuidVal UUID NULL,

 DecimalVal DECIMAL(20,10) NULL,

 DateTimeVal TIMESTAMP(3) NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (

 primaryKey UUID NOT NULL,

 Category VARCHAR(64) NULL,

 EventId INT NULL,

 Priority INT NULL,

 Severity VARCHAR(32) NULL,

 Title VARCHAR(256) NULL,

 Timestamp TIMESTAMP(3) NULL,

 MachineName VARCHAR(32) NULL,

 AppDomainName VARCHAR(512) NULL,

 ProcessId VARCHAR(256) NULL,

 ProcessName VARCHAR(512) NULL,

 ThreadName VARCHAR(512) NULL,

 Win32ThreadId VARCHAR(128) NULL,

 Message VARCHAR(2500) NULL,

 FormattedMessage TEXT NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAG (

 primaryKey UUID NOT NULL,

 Name VARCHAR(80) NOT NULL,

 Login VARCHAR(50) NULL,

 Pwd VARCHAR(50) NULL,

 IsUser BOOLEAN NOT NULL,

 IsGroup BOOLEAN NOT NULL,

 IsRole BOOLEAN NOT NULL,

 ConnString VARCHAR(255) NULL,

 Enabled BOOLEAN NULL,

 Email VARCHAR(80) NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMLG (

 primaryKey UUID NOT NULL,

 Group_m0 UUID NOT NULL,

 User_m0 UUID NOT NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMI (

 primaryKey UUID NOT NULL,

 User_m0 UUID NOT NULL,

 Agent_m0 UUID NOT NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE Session (

 primaryKey UUID NOT NULL,

 UserKey UUID NULL,

 StartedAt TIMESTAMP(3) NULL,

 LastAccess TIMESTAMP(3) NULL,

 Closed BOOLEAN NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMS (

 primaryKey UUID NOT NULL,

 Name VARCHAR(100) NOT NULL,

 Type VARCHAR(100) NULL,

 IsAttribute BOOLEAN NOT NULL,

 IsOperation BOOLEAN NOT NULL,

 IsView BOOLEAN NOT NULL,

 IsClass BOOLEAN NOT NULL,

 SharedOper BOOLEAN NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMP (

 primaryKey UUID NOT NULL,

 Subject_m0 UUID NOT NULL,

 Agent_m0 UUID NOT NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMF (

 primaryKey UUID NOT NULL,

 FilterText TEXT NULL,

 Name VARCHAR(255) NULL,

 FilterTypeNView VARCHAR(255) NULL,

 Subject_m0 UUID NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAC (

 primaryKey UUID NOT NULL,

 TypeAccess VARCHAR(7) NULL,

 Filter_m0 UUID NULL,

 Permition_m0 UUID NOT NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMLO (

 primaryKey UUID NOT NULL,

 Class_m0 UUID NOT NULL,

 Operation_m0 UUID NOT NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMLA (

 primaryKey UUID NOT NULL,

 View_m0 UUID NOT NULL,

 Attribute_m0 UUID NOT NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMLV (

 primaryKey UUID NOT NULL,

 Class_m0 UUID NOT NULL,

 View_m0 UUID NOT NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));


CREATE TABLE STORMLR (

 primaryKey UUID NOT NULL,

 StartDate TIMESTAMP(3) NULL,

 EndDate TIMESTAMP(3) NULL,

 Agent_m0 UUID NOT NULL,

 Role_m0 UUID NOT NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));




 ALTER TABLE EduProgram ADD CONSTRAINT FKc179df3b08624ba2987414f99a6ee565 FOREIGN KEY (Semestr) REFERENCES Semestr; 
CREATE INDEX Index06532884bcc8448aa44be0101fdda382 on EduProgram (Semestr); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKd31ffcc2912a4f6bb5744b257f6303f7 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK98b27233adb34b68973050a71015e3a8 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FK8572d605bf884b44b5fcf2a590b3dc1b FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMLG ADD CONSTRAINT FK2f71590bf13646599892c50f3c279cb0 FOREIGN KEY (Group_m0) REFERENCES STORMAG; 

 ALTER TABLE STORMLG ADD CONSTRAINT FK3f23a7a49db248f1b0b4e8c99cb45160 FOREIGN KEY (User_m0) REFERENCES STORMAG; 

 ALTER TABLE STORMI ADD CONSTRAINT FK29fa5e27f2684275b54415788b547b96 FOREIGN KEY (User_m0) REFERENCES STORMAG; 

 ALTER TABLE STORMI ADD CONSTRAINT FK0213a0400f3d4b228e27bfd13cf76aa2 FOREIGN KEY (Agent_m0) REFERENCES STORMAG; 

 ALTER TABLE STORMP ADD CONSTRAINT FKa81521bdaba6408095bd50079843b293 FOREIGN KEY (Subject_m0) REFERENCES STORMS; 

 ALTER TABLE STORMP ADD CONSTRAINT FK68af267bb7274c499e0e9ee388fab3f0 FOREIGN KEY (Agent_m0) REFERENCES STORMAG; 

 ALTER TABLE STORMF ADD CONSTRAINT FK25d76a7749a84ef0a2846a146a46a0e8 FOREIGN KEY (Subject_m0) REFERENCES STORMS; 

 ALTER TABLE STORMAC ADD CONSTRAINT FK12c8de4321254449a32ccedeb82f3933 FOREIGN KEY (Filter_m0) REFERENCES STORMF; 

 ALTER TABLE STORMAC ADD CONSTRAINT FK9c5af11a36b64138bf5b4ff193fb39fd FOREIGN KEY (Permition_m0) REFERENCES STORMP; 

 ALTER TABLE STORMLO ADD CONSTRAINT FKc167371f0fec4cf7b35afb7346bb8519 FOREIGN KEY (Class_m0) REFERENCES STORMS; 

 ALTER TABLE STORMLO ADD CONSTRAINT FK89007654578b4f579e2a73dbadf3eaee FOREIGN KEY (Operation_m0) REFERENCES STORMS; 

 ALTER TABLE STORMLA ADD CONSTRAINT FK458a625882c745fa902d15b0f7263d2e FOREIGN KEY (View_m0) REFERENCES STORMS; 

 ALTER TABLE STORMLA ADD CONSTRAINT FKde98c9555ffb4cbcb5e063effb940714 FOREIGN KEY (Attribute_m0) REFERENCES STORMS; 

 ALTER TABLE STORMLV ADD CONSTRAINT FK0d849d60418e48b5812390eea8e9ae42 FOREIGN KEY (Class_m0) REFERENCES STORMS; 

 ALTER TABLE STORMLV ADD CONSTRAINT FK3bbc549033a847b4b476323107721dfa FOREIGN KEY (View_m0) REFERENCES STORMS; 

 ALTER TABLE STORMLR ADD CONSTRAINT FK221a2eaf0641423f96c7d738f7a83193 FOREIGN KEY (Agent_m0) REFERENCES STORMAG; 

 ALTER TABLE STORMLR ADD CONSTRAINT FKfe33a237c05146aab8e762e9e95b2519 FOREIGN KEY (Role_m0) REFERENCES STORMAG; 
 
ALTER TABLE eduprogram ALTER COLUMN name TYPE VARCHAR(100); ALTER TABLE eduprogram ALTER COLUMN name SET NOT NULL; 
ALTER TABLE eduprogram ALTER COLUMN description TYPE TEXT; ALTER TABLE eduprogram ALTER COLUMN description SET NOT NULL; 
ALTER TABLE semestr ALTER COLUMN name TYPE VARCHAR(100); ALTER TABLE semestr ALTER COLUMN name SET NOT NULL; 
ALTER TABLE semestr ALTER COLUMN description TYPE TEXT; ALTER TABLE semestr ALTER COLUMN description SET NOT NULL; 
ALTER TABLE semestr ALTER COLUMN datebegin TYPE TIMESTAMP(3); ALTER TABLE semestr ALTER COLUMN datebegin SET NOT NULL; 
ALTER TABLE semestr ALTER COLUMN dateend TYPE TIMESTAMP(3); ALTER TABLE semestr ALTER COLUMN dateend SET NOT NULL; 
ALTER TABLE contract ALTER COLUMN description TYPE TEXT; ALTER TABLE contract ALTER COLUMN description SET NOT NULL; 
ALTER TABLE contract ALTER COLUMN number TYPE VARCHAR(7); ALTER TABLE contract ALTER COLUMN number SET NOT NULL; 
