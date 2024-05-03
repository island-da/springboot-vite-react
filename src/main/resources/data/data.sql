truncate table product_attributes;
truncate table products;
truncate table `users`;

insert into products values (
  '039b4506-f78a-48b0-9505-64acf8b3011e',
  '商品A',
  8000,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);
insert into product_attributes values (
  '52c48db8-af93-44c8-a085-7f2c237b3839',
  '039b4506-f78a-48b0-9505-64acf8b3011e',
  'A',
  '説明文',
  '/image/a.png',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);

insert into products values (
  'ade18a72-d8b3-4a62-97c2-f446e4dc5e82',
  '商品B',
  7000,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);
insert into product_attributes values (
  'd6ff2148-0f1e-4bc0-b96a-fd058e572db0',
  'ade18a72-d8b3-4a62-97c2-f446e4dc5e82',
  'S',
  '説明文',
  '/image/b.png',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);

insert into products values (
  'b40200d0-9971-45b7-aab4-02291337249c',
  '商品C',
  9000,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);
insert into product_attributes values (
  'c043c02e-7859-4aa7-be66-8e73f233c9c1',
  'b40200d0-9971-45b7-aab4-02291337249c',
  'B',
  '説明文',
  '/image/c.png',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);

insert into `users` values (
  '3029bea7-fcf3-4fef-8fbc-754f111f3b56',
  'ユーザ1',
  'example@example.com',
  '03-1234-5678',
  '135-0001',
  '東京都千代田区1-1',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);
