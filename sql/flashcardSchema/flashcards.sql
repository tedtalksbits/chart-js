/*
  FLASHCARDS SCHEMA
  - id
  - deck_id
  - question
  - answer
  - tags
  - type
  - created_at
  - updated_at

*/

-- Table Definition

CREATE TABLE `flashcards` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `deck_id` INT NOT NULL,
  `question` VARCHAR(255),
  `answer` VARCHAR(255),
  `tags` VARCHAR(255),
  `type` VARCHAR(255),
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);