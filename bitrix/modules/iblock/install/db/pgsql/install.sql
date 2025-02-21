
CREATE TABLE b_iblock_type (
  ID varchar(50) NOT NULL,
  SECTIONS char(1) NOT NULL DEFAULT 'Y',
  EDIT_FILE_BEFORE varchar(255),
  EDIT_FILE_AFTER varchar(255),
  IN_RSS char(1) NOT NULL DEFAULT 'N',
  SORT int NOT NULL DEFAULT 500,
  PRIMARY KEY (ID)
);

CREATE TABLE b_iblock_type_lang (
  IBLOCK_TYPE_ID varchar(50) NOT NULL,
  LID char(2) NOT NULL,
  NAME varchar(100) NOT NULL,
  SECTION_NAME varchar(100),
  ELEMENT_NAME varchar(100)
);

CREATE TABLE b_iblock (
  ID int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  TIMESTAMP_X timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  IBLOCK_TYPE_ID varchar(50) NOT NULL,
  LID char(2) NOT NULL,
  CODE varchar(50),
  API_CODE varchar(50),
  REST_ON char(1) NOT NULL DEFAULT 'N',
  NAME varchar(255) NOT NULL,
  ACTIVE char(1) NOT NULL DEFAULT 'Y',
  SORT int NOT NULL DEFAULT 500,
  LIST_PAGE_URL varchar(255),
  DETAIL_PAGE_URL varchar(255),
  SECTION_PAGE_URL varchar(255),
  CANONICAL_PAGE_URL varchar(255),
  PICTURE int,
  DESCRIPTION text,
  DESCRIPTION_TYPE char(4) NOT NULL DEFAULT 'text',
  RSS_TTL int NOT NULL DEFAULT '24',
  RSS_ACTIVE char(1) NOT NULL DEFAULT 'Y',
  RSS_FILE_ACTIVE char(1) NOT NULL DEFAULT 'N',
  RSS_FILE_LIMIT int,
  RSS_FILE_DAYS int,
  RSS_YANDEX_ACTIVE char(1) NOT NULL DEFAULT 'N',
  XML_ID varchar(255),
  TMP_ID varchar(40),
  INDEX_ELEMENT char(1) NOT NULL DEFAULT 'Y',
  INDEX_SECTION char(1) NOT NULL DEFAULT 'N',
  WORKFLOW char(1) NOT NULL DEFAULT 'Y',
  BIZPROC char(1) NOT NULL DEFAULT 'N',
  SECTION_CHOOSER char(1),
  LIST_MODE char(1),
  RIGHTS_MODE char(1),
  SECTION_PROPERTY char(1),
  PROPERTY_INDEX char(1),
  VERSION int NOT NULL DEFAULT 1,
  LAST_CONV_ELEMENT int NOT NULL DEFAULT 0,
  SOCNET_GROUP_ID int,
  EDIT_FILE_BEFORE varchar(255),
  EDIT_FILE_AFTER varchar(255),
  SECTIONS_NAME varchar(100),
  SECTION_NAME varchar(100),
  ELEMENTS_NAME varchar(100),
  ELEMENT_NAME varchar(100),
  PRIMARY KEY (ID)
);
CREATE INDEX ix_b_iblock_iblock_type_id_lid_active ON b_iblock (iblock_type_id, lid, active);
CREATE UNIQUE INDEX ux_b_iblock_api_code ON b_iblock (api_code);
CREATE INDEX ix_b_iblock_code ON b_iblock (code);

CREATE TABLE b_iblock_site (
  IBLOCK_ID int NOT NULL,
  SITE_ID char(2) NOT NULL,
  PRIMARY KEY (IBLOCK_ID, SITE_ID)
);

CREATE TABLE b_iblock_messages (
  IBLOCK_ID int NOT NULL,
  MESSAGE_ID varchar(50) NOT NULL,
  MESSAGE_TEXT varchar(255),
  PRIMARY KEY (IBLOCK_ID, MESSAGE_ID)
);

CREATE TABLE b_iblock_fields (
  IBLOCK_ID int NOT NULL,
  FIELD_ID varchar(50) NOT NULL,
  IS_REQUIRED char(1),
  DEFAULT_VALUE text,
  PRIMARY KEY (IBLOCK_ID, FIELD_ID)
);

CREATE TABLE b_iblock_property (
  ID int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  TIMESTAMP_X timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  IBLOCK_ID int NOT NULL,
  NAME varchar(255) NOT NULL,
  ACTIVE char(1) NOT NULL DEFAULT 'Y',
  SORT int NOT NULL DEFAULT 500,
  CODE varchar(50),
  DEFAULT_VALUE text,
  PROPERTY_TYPE char(1) NOT NULL DEFAULT 'S',
  ROW_COUNT int NOT NULL DEFAULT 1,
  COL_COUNT int NOT NULL DEFAULT 30,
  LIST_TYPE char(1) NOT NULL DEFAULT 'L',
  MULTIPLE char(1) NOT NULL DEFAULT 'N',
  XML_ID varchar(100),
  FILE_TYPE varchar(200),
  MULTIPLE_CNT int,
  TMP_ID varchar(40),
  LINK_IBLOCK_ID int,
  WITH_DESCRIPTION char(1),
  SEARCHABLE char(1) NOT NULL DEFAULT 'N',
  FILTRABLE char(1) NOT NULL DEFAULT 'N',
  IS_REQUIRED char(1),
  VERSION int NOT NULL DEFAULT 1,
  USER_TYPE varchar(255),
  USER_TYPE_SETTINGS text,
  HINT varchar(255),
  PRIMARY KEY (ID)
);
CREATE INDEX ix_b_iblock_property_iblock_id ON b_iblock_property (iblock_id);
CREATE INDEX ix_b_iblock_property_link_iblock_id ON b_iblock_property (link_iblock_id);
CREATE INDEX ix_b_iblock_property_code ON b_iblock_property (code);
CREATE INDEX ix_b_iblock_property_upper_code ON b_iblock_property(upper(code));

CREATE TABLE b_iblock_property_feature (
  ID int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  PROPERTY_ID int NOT NULL,
  MODULE_ID varchar(50) NOT NULL,
  FEATURE_ID varchar(100) NOT NULL,
  IS_ENABLED char(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (ID)
);
CREATE UNIQUE INDEX ux_b_iblock_property_feature_property_id_module_id_feature_id ON b_iblock_property_feature (property_id, module_id, feature_id);

CREATE TABLE b_iblock_section (
  ID int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  TIMESTAMP_X timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  MODIFIED_BY int,
  DATE_CREATE timestamp,
  CREATED_BY int,
  IBLOCK_ID int NOT NULL,
  IBLOCK_SECTION_ID int,
  ACTIVE char(1) NOT NULL DEFAULT 'Y',
  GLOBAL_ACTIVE char(1) NOT NULL DEFAULT 'Y',
  SORT int NOT NULL DEFAULT 500,
  NAME varchar(255) NOT NULL,
  PICTURE int,
  LEFT_MARGIN int,
  RIGHT_MARGIN int,
  DEPTH_LEVEL int,
  DESCRIPTION text,
  DESCRIPTION_TYPE char(4) NOT NULL DEFAULT 'text',
  SEARCHABLE_CONTENT text,
  CODE varchar(255),
  XML_ID varchar(255),
  TMP_ID varchar(40),
  DETAIL_PICTURE int,
  SOCNET_GROUP_ID int,
  PRIMARY KEY (ID)
);
CREATE INDEX ix_b_iblock_section_iblock_id_iblock_section_id ON b_iblock_section (iblock_id, iblock_section_id);
CREATE INDEX ix_b_iblock_section_iblock_id_depth_level ON b_iblock_section (iblock_id, depth_level);
CREATE INDEX ix_b_iblock_section_iblock_id_code ON b_iblock_section (iblock_id, code);
CREATE INDEX ix_b_iblock_section_iblock_id_left_margin ON b_iblock_section (iblock_id, left_margin);
CREATE INDEX ix_b_iblock_section_iblock_id_right_margin ON b_iblock_section (iblock_id, right_margin);

CREATE TABLE b_iblock_section_property (
  IBLOCK_ID int NOT NULL,
  SECTION_ID int NOT NULL,
  PROPERTY_ID int NOT NULL,
  SMART_FILTER char(1),
  DISPLAY_TYPE char(1),
  DISPLAY_EXPANDED char(1),
  FILTER_HINT varchar(255),
  PRIMARY KEY (IBLOCK_ID, SECTION_ID, PROPERTY_ID)
);
CREATE INDEX ix_b_iblock_section_property_property_id ON b_iblock_section_property (property_id);
CREATE INDEX ix_b_iblock_section_property_section_id ON b_iblock_section_property (section_id);

CREATE TABLE b_iblock_element (
  ID int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  TIMESTAMP_X timestamp,
  MODIFIED_BY int,
  DATE_CREATE timestamp,
  CREATED_BY int,
  IBLOCK_ID int NOT NULL DEFAULT '0',
  IBLOCK_SECTION_ID int,
  ACTIVE char(1) NOT NULL DEFAULT 'Y',
  ACTIVE_FROM timestamp,
  ACTIVE_TO timestamp,
  SORT int NOT NULL DEFAULT '500',
  NAME varchar(255) NOT NULL,
  PREVIEW_PICTURE int,
  PREVIEW_TEXT text,
  PREVIEW_TEXT_TYPE varchar(4) NOT NULL DEFAULT 'text',
  DETAIL_PICTURE int,
  DETAIL_TEXT text,
  DETAIL_TEXT_TYPE varchar(4) NOT NULL DEFAULT 'text',
  SEARCHABLE_CONTENT text,
  WF_STATUS_ID int DEFAULT '1',
  WF_PARENT_ELEMENT_ID int,
  WF_NEW char(1),
  WF_LOCKED_BY int,
  WF_DATE_LOCK timestamp,
  WF_COMMENTS text,
  IN_SECTIONS char(1) NOT NULL DEFAULT 'N',
  XML_ID varchar(255),
  CODE varchar(255),
  TAGS varchar(255),
  TMP_ID varchar(40),
  WF_LAST_HISTORY_ID int,
  SHOW_COUNTER int,
  SHOW_COUNTER_START timestamp,
  PRIMARY KEY (ID)
);
CREATE INDEX ix_b_iblock_element_iblock_id_iblock_section_id ON b_iblock_element (iblock_id, iblock_section_id);
CREATE INDEX ix_b_iblock_element_iblock_id_xml_id_wf_parent_element_id ON b_iblock_element (iblock_id, xml_id, wf_parent_element_id);
CREATE INDEX ix_b_iblock_element_wf_parent_element_id ON b_iblock_element (wf_parent_element_id);
CREATE INDEX ix_b_iblock_element_iblock_id_code ON b_iblock_element (iblock_id, code);
CREATE INDEX ix_b_iblock_element_iblock_id_name ON b_iblock_element (iblock_id, name);

CREATE TABLE b_iblock_element_property (
  ID int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  IBLOCK_PROPERTY_ID int NOT NULL,
  IBLOCK_ELEMENT_ID int NOT NULL,
  VALUE text NOT NULL,
  VALUE_TYPE char(4) NOT NULL DEFAULT 'text',
  VALUE_ENUM int,
  VALUE_NUM numeric,
  DESCRIPTION varchar(255),
  PRIMARY KEY (ID)
);
CREATE INDEX ix_b_iblock_element_property_iblock_element_id_iblock_property_ ON b_iblock_element_property (iblock_element_id, iblock_property_id);
CREATE INDEX ix_b_iblock_element_property_iblock_property_id ON b_iblock_element_property (iblock_property_id);
CREATE INDEX ix_b_iblock_element_property_value_enum_iblock_property_id ON b_iblock_element_property (value_enum, iblock_property_id);
CREATE INDEX ix_b_iblock_element_property_value_num_iblock_property_id ON b_iblock_element_property (value_num, iblock_property_id);
CREATE INDEX ix_b_iblock_element_property_value_iblock_property_id_iblock_el ON b_iblock_element_property (value, iblock_property_id, iblock_element_id);

CREATE TABLE b_iblock_property_enum (
  ID int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  PROPERTY_ID int NOT NULL,
  VALUE varchar(255) NOT NULL,
  DEF char(1) NOT NULL DEFAULT 'N',
  SORT int NOT NULL DEFAULT '500',
  XML_ID varchar(200) NOT NULL,
  TMP_ID varchar(40),
  PRIMARY KEY (ID)
);
CREATE UNIQUE INDEX ux_b_iblock_property_enum_property_id_xml_id ON b_iblock_property_enum (property_id, xml_id);

CREATE TABLE b_iblock_group (
  IBLOCK_ID int NOT NULL,
  GROUP_ID int NOT NULL,
  PERMISSION char(1) NOT NULL
);
CREATE UNIQUE INDEX ux_b_iblock_group_iblock_id_group_id ON b_iblock_group (iblock_id, group_id);

CREATE TABLE b_iblock_right (
  ID int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  IBLOCK_ID int NOT NULL,
  GROUP_CODE varchar(50) NOT NULL,
  ENTITY_TYPE varchar(32) NOT NULL,
  ENTITY_ID int NOT NULL,
  DO_INHERIT char(1) NOT NULL,
  TASK_ID int NOT NULL,
  OP_SREAD char(1) NOT NULL,
  OP_EREAD char(1) NOT NULL,
  XML_ID varchar(32),
  PRIMARY KEY (ID)
);
CREATE INDEX ix_b_iblock_right_iblock_id_entity_type_entity_id ON b_iblock_right (iblock_id, entity_type, entity_id);
CREATE INDEX ix_b_iblock_right_group_code_iblock_id ON b_iblock_right (group_code, iblock_id);
CREATE INDEX ix_b_iblock_right_entity_id_entity_type ON b_iblock_right (entity_id, entity_type);
CREATE INDEX ix_b_iblock_right_id_op_eread_group_code ON b_iblock_right (id, op_eread, group_code);
CREATE INDEX ix_b_iblock_right_id_op_sread_group_code ON b_iblock_right (id, op_sread, group_code);
CREATE INDEX ix_b_iblock_right_task_id ON b_iblock_right (task_id);

CREATE TABLE b_iblock_section_right (
  IBLOCK_ID int NOT NULL,
  SECTION_ID int NOT NULL,
  RIGHT_ID int NOT NULL,
  IS_INHERITED char(1) NOT NULL,
  PRIMARY KEY (RIGHT_ID, SECTION_ID)
);
CREATE INDEX ix_b_iblock_section_right_section_id_iblock_id ON b_iblock_section_right (section_id, iblock_id);
CREATE INDEX ix_b_iblock_section_right_iblock_id_right_id ON b_iblock_section_right (iblock_id, right_id);

CREATE TABLE b_iblock_element_right (
  IBLOCK_ID int NOT NULL,
  SECTION_ID int NOT NULL,
  ELEMENT_ID int NOT NULL,
  RIGHT_ID int NOT NULL,
  IS_INHERITED char(1) NOT NULL,
  PRIMARY KEY (RIGHT_ID, ELEMENT_ID, SECTION_ID)
);
CREATE INDEX ix_b_iblock_element_right_element_id_iblock_id ON b_iblock_element_right (element_id, iblock_id);
CREATE INDEX ix_b_iblock_element_right_iblock_id_right_id ON b_iblock_element_right (iblock_id, right_id);

CREATE TABLE b_iblock_section_element (
  IBLOCK_SECTION_ID int NOT NULL,
  IBLOCK_ELEMENT_ID int NOT NULL,
  ADDITIONAL_PROPERTY_ID int
);
CREATE UNIQUE INDEX ux_b_iblock_section_element_iblock_section_id_iblock_element_id ON b_iblock_section_element (iblock_section_id, iblock_element_id, additional_property_id);
CREATE INDEX ix_b_iblock_section_element_iblock_element_id ON b_iblock_section_element (iblock_element_id);

CREATE TABLE b_iblock_rss (
  ID int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  IBLOCK_ID int NOT NULL,
  NODE varchar(50) NOT NULL,
  NODE_VALUE varchar(250),
  PRIMARY KEY (ID)
);

CREATE TABLE b_iblock_cache (
  CACHE_KEY varchar(35) NOT NULL,
  CACHE text NOT NULL,
  CACHE_DATE timestamp NOT NULL,
  PRIMARY KEY (CACHE_KEY)
);

CREATE TABLE b_iblock_element_lock (
  IBLOCK_ELEMENT_ID int NOT NULL,
  DATE_LOCK timestamp,
  LOCKED_BY varchar(32),
  PRIMARY KEY (IBLOCK_ELEMENT_ID)
);

CREATE TABLE b_iblock_sequence (
  IBLOCK_ID int NOT NULL,
  CODE varchar(50) NOT NULL,
  SEQ_VALUE int,
  PRIMARY KEY (IBLOCK_ID, CODE)
);

CREATE TABLE b_iblock_offers_tmp (
  ID int8 GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  PRODUCT_IBLOCK_ID int8 NOT NULL,
  OFFERS_IBLOCK_ID int8 NOT NULL,
  TIMESTAMP_X timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)
);

CREATE TABLE b_iblock_iproperty (
  ID int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  IBLOCK_ID int NOT NULL,
  CODE varchar(50) NOT NULL,
  ENTITY_TYPE char(1) NOT NULL,
  ENTITY_ID int NOT NULL,
  TEMPLATE text NOT NULL,
  PRIMARY KEY (ID)
);
CREATE INDEX ix_b_iblock_iproperty_iblock_id_entity_type_entity_id ON b_iblock_iproperty (iblock_id, entity_type, entity_id);

CREATE TABLE b_iblock_iblock_iprop (
  IBLOCK_ID int NOT NULL,
  IPROP_ID int NOT NULL,
  VALUE text NOT NULL,
  PRIMARY KEY (IBLOCK_ID, IPROP_ID)
);
CREATE INDEX ix_b_iblock_iblock_iprop_iprop_id ON b_iblock_iblock_iprop (iprop_id);

CREATE TABLE b_iblock_section_iprop (
  IBLOCK_ID int NOT NULL,
  SECTION_ID int NOT NULL,
  IPROP_ID int NOT NULL,
  VALUE text NOT NULL,
  PRIMARY KEY (SECTION_ID, IPROP_ID)
);
CREATE INDEX ix_b_iblock_section_iprop_iprop_id ON b_iblock_section_iprop (iprop_id);
CREATE INDEX ix_b_iblock_section_iprop_iblock_id ON b_iblock_section_iprop (iblock_id);

CREATE TABLE b_iblock_element_iprop (
  IBLOCK_ID int NOT NULL,
  SECTION_ID int NOT NULL,
  ELEMENT_ID int NOT NULL,
  IPROP_ID int NOT NULL,
  VALUE text NOT NULL,
  PRIMARY KEY (ELEMENT_ID, IPROP_ID)
);
CREATE INDEX ix_b_iblock_element_iprop_iprop_id ON b_iblock_element_iprop (iprop_id);
CREATE INDEX ix_b_iblock_element_iprop_iblock_id ON b_iblock_element_iprop (iblock_id);
