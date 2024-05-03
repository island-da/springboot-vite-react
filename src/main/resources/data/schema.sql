CREATE TABLE IF NOT EXISTS products (
  id                    UUID          NOT NULL,
  name                  VARCHAR(255)  NOT NULL,
  price                 INTEGER       NOT NULL,
  created_at            TIMESTAMP             ,
  updated_at            TIMESTAMP             ,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS product_attributes (
  id                    UUID          NOT NULL,
  product_id            UUID          NOT NULL,
  status                VARCHAR(255)  NOT NULL,
  description           VARCHAR(3000) NOT NULL,
  image_path            VARCHAR(3000) NOT NULL,
  created_at            TIMESTAMP             ,
  updated_at            TIMESTAMP             ,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS `users` (
  id                    UUID          NOT NULL,
  name                  VARCHAR(255)  NOT NULL,
  email                 VARCHAR(255)  NOT NULL,
  tel                   VARCHAR(255)  NOT NULL,
  post_code             VARCHAR(255)  NOT NULL,
  address               VARCHAR(255)  NOT NULL,
  created_at            TIMESTAMP             ,
  updated_at            TIMESTAMP             ,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS `orders` (
  id                    UUID          NOT NULL,
  user_id               UUID          NOT NULL,
  product_id            UUID          NOT NULL,
  quantity              INTEGER       NOT NULL,
  created_at            TIMESTAMP             ,
  updated_at            TIMESTAMP             ,
  PRIMARY KEY (id)
);
