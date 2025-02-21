CREATE TABLE b_list_rubric
(
	ID int NOT NULL auto_increment,
	LID char(2) NOT NULL,
	CODE varchar(100),
	NAME varchar(100),
	DESCRIPTION	text,
	SORT int NOT NULL DEFAULT 100,
	ACTIVE char(1) NOT NULL DEFAULT 'Y',
	AUTO char(1) NOT NULL DEFAULT 'N',
	DAYS_OF_MONTH varchar(100),
	DAYS_OF_WEEK varchar(15),
	TIMES_OF_DAY varchar(255),
	TEMPLATE varchar(100),
	LAST_EXECUTED datetime,
	VISIBLE char(1) NOT NULL DEFAULT 'Y',
	FROM_FIELD varchar(255),
	PRIMARY KEY (ID)
);
CREATE TABLE b_subscription
(
	ID int NOT NULL auto_increment,
	DATE_INSERT datetime NOT NULL,
	DATE_UPDATE	datetime,
	USER_ID int,
	ACTIVE char(1) NOT NULL DEFAULT 'Y',
	EMAIL varchar(255) NOT NULL,
	FORMAT varchar(4) NOT NULL DEFAULT 'text',
	CONFIRM_CODE varchar(8),
	CONFIRMED char(1) NOT NULL DEFAULT 'N',
	DATE_CONFIRM datetime NOT NULL,
	PRIMARY KEY (ID),
	UNIQUE UK_SUBSCRIPTION_EMAIL (EMAIL, USER_ID),
	INDEX IX_DATE_CONFIRM(CONFIRMED, DATE_CONFIRM)
);
CREATE TABLE b_subscription_rubric
(
	SUBSCRIPTION_ID int NOT NULL,
	LIST_RUBRIC_ID int NOT NULL,
	PRIMARY KEY PK_SUBSCRIPTION_RUBRIC (SUBSCRIPTION_ID, LIST_RUBRIC_ID)
);
CREATE TABLE b_posting
(
	ID int NOT NULL auto_increment,
	TIMESTAMP_X	datetime NOT NULL,
	STATUS char(1) NOT NULL DEFAULT 'D',
	VERSION char(1),
	DATE_SENT datetime,
	SENT_BCC mediumtext,
	FROM_FIELD varchar(255) NOT NULL,
	TO_FIELD varchar(255),
	BCC_FIELD mediumtext,
	EMAIL_FILTER varchar(255),
	SUBJECT varchar(255) NOT NULL,
	BODY_TYPE varchar(4) NOT NULL DEFAULT 'text',
	BODY mediumtext NOT NULL,
	DIRECT_SEND char(1) NOT NULL DEFAULT 'N',
	CHARSET varchar(50),
	MSG_CHARSET varchar(255),
	SUBSCR_FORMAT varchar(4),
	ERROR_EMAIL mediumtext,
	AUTO_SEND_TIME datetime,
	BCC_TO_SEND mediumtext,
	PRIMARY KEY (ID)
);
CREATE TABLE b_posting_email
(
	ID int NOT NULL auto_increment,
	POSTING_ID int NOT NULL,
	STATUS char(1) NOT NULL,
	EMAIL varchar(255) NOT NULL,
	SUBSCRIPTION_ID int,
	USER_ID int,
	PRIMARY KEY (ID),
	INDEX ix_posting_email_status (POSTING_ID, STATUS),
	INDEX ix_posting_email_email (POSTING_ID, EMAIL)
);
CREATE TABLE b_posting_rubric
(
	POSTING_ID int NOT NULL,
	LIST_RUBRIC_ID int NOT NULL,
	UNIQUE UK_POSTING_POSTING_RUBRIC (POSTING_ID,LIST_RUBRIC_ID)
);
CREATE TABLE b_posting_group
(
	POSTING_ID int NOT NULL,
	GROUP_ID int NOT NULL,
	UNIQUE UK_POSTING_POSTING_GROUP (POSTING_ID,GROUP_ID)
);
CREATE TABLE b_posting_file
(
	POSTING_ID int NOT NULL,
	FILE_ID int NOT NULL,
	UNIQUE KEY UK_POSTING_POSTING_FILE (POSTING_ID,FILE_ID)
);
